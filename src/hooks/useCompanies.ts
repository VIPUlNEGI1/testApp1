import {useCallback, useEffect, useMemo, useState} from 'react';
import APICall from '@/Network/APICall';

export type Company = {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  address: string | null;
  contactPerson: string | null;
  latitude?: number | null;
  longitude?: number | null;
  zone_name?: string | null;
  stage_name?: string | null;
  raw?: any;
};

type UseCompaniesOpts = {
  subscriptionId: string;
  employeeId?: string | number;
  pageSize?: number;
  initialOffset?: number;
};

export default function useCompanies({
  subscriptionId,
  employeeId,
  pageSize = 20,
  initialOffset = 0,
}: UseCompaniesOpts) {
  const [items, setItems] = useState<Company[]>([]);
  const [offset, setOffset] = useState(initialOffset);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [hasMore, setHasMore] = useState(true);

  const mapRawToCompany = useCallback((r: any): Company => {
    return {
      id: String(r.client_idpk ?? r.id ?? ''),
      name: r.client_name ?? '',
      email: r.client_email ?? null,
      phone: r.client_mobile ? String(r.client_mobile) : null,
      address: r.client_location ?? null,
      contactPerson: r.client_contactpersonname ?? null,
      latitude: r.client_latitude ?? null,
      longitude: r.client_longitude ?? null,
      zone_name: r.zone_name ?? null,
      stage_name: r.stage_name ?? null,
      raw: r,
    } as Company;
  }, []);

  const fetchPage = useCallback(
    async (off = 0, replace = false) => {
      if (!subscriptionId) return;

      try {
        if (replace) {
          setRefreshing(true);
        } else if (off === 0) {
          setLoading(true);
        } else {
          setLoadingMore(true);
        }

        setError(null);

        const params = {
          subscription_id: subscriptionId,
          EMPLOYEE_ID: employeeId,
          offset: off,
        } as any;

        const url = '/ords/accounts/clientlist/getclient';
        const res = await APICall<any>('get', params, url);

        if (res && res.status >= 200 && res.status < 300 && Array.isArray(res.data?.items)) {
          const newItems = res.data.items.map(mapRawToCompany);

          setHasMore(newItems.length === pageSize);

          setItems(prev => (replace || off === 0 ? newItems : [...prev, ...newItems]));
          setOffset(off);
        } else {
          // If API returns a wrapper or different shape, try to handle gracefully
          const maybeItems = res?.data?.items ?? [];
          if (Array.isArray(maybeItems)) {
            const newItems = maybeItems.map(mapRawToCompany);
            setItems(prev => (replace || off === 0 ? newItems : [...prev, ...newItems]));
            setHasMore(newItems.length === pageSize);
            setOffset(off);
          } else {
            setError('Unexpected API response');
          }
        }
      } catch (err: any) {
        setError(err?.message || 'Network error');
      } finally {
        setLoading(false);
        setLoadingMore(false);
        setRefreshing(false);
      }
    },
    [subscriptionId, employeeId, mapRawToCompany, pageSize],
  );

  const loadMore = useCallback(() => {
    if (loadingMore || loading || !hasMore) return;
    const next = offset + pageSize;
    fetchPage(next, false);
  }, [offset, pageSize, fetchPage, loadingMore, loading, hasMore]);

  const refresh = useCallback(() => {
    setHasMore(true);
    fetchPage(0, true);
  }, [fetchPage]);

  useEffect(() => {
    // initial load
    fetchPage(initialOffset, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subscriptionId, employeeId]);

  const filtered = useMemo(() => {
    if (!searchQuery) return items;
    const q = searchQuery.toLowerCase();
    return items.filter(i => (i.name || '').toLowerCase().includes(q) || (i.address || '').toLowerCase().includes(q));
  }, [items, searchQuery]);

  return {
    companies: filtered,
    raw: items,
    loading,
    loadingMore,
    refreshing,
    error,
    searchQuery,
    setSearchQuery,
    loadMore,
    refresh,
    refetch: () => fetchPage(offset === 0 ? 0 : offset, true),
    hasMore,
    offset,
  };
}
