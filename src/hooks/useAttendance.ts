import {useCallback, useEffect, useMemo, useState} from 'react';
import APICall from '@/Network/APICall';

const monthNames: Record<string, string> = {
  JAN: '01',
  FEB: '02',
  MAR: '03',
  APR: '04',
  MAY: '05',
  JUN: '06',
  JUL: '07',
  AUG: '08',
  SEP: '09',
  OCT: '10',
  NOV: '11',
  DEC: '12',
};

const toIsoDate = (rawDate?: string | null) => {
  if (!rawDate) {
    return '';
  }

  const parts = rawDate.trim().split('-');
  if (parts.length !== 3) {
    return rawDate;
  }

  const [day, month, year] = parts;
  const normalizedMonth = monthNames[month.toUpperCase()] || month;
  return `${year}-${normalizedMonth}-${day.padStart(2, '0')}`;
};

export type Attendance = {
  id: string;
  attendanceId: number;
  userId: string;
  userFullName: string;
  date: string; // e.g. 29-MAY-2026
  dateKey: string; // e.g. 2026-05-29
  inTime: string | null;
  outTime: string | null;
  checkInLocation: string | null;
  checkInLat?: number | null;
  checkInLng?: number | null;
  checkOutLocation?: string | null;
  checkOutLat?: number | null;
  checkOutLng?: number | null;
  raw?: any;
};

type UseAttendanceOpts = {
  userId: string | number;
  fromDate: string; // YYYY-MM-DD
  toDate: string; // YYYY-MM-DD
  pageSize?: number;
  initialOffset?: number;
};

export default function useAttendance({
  userId,
  fromDate,
  toDate,
  pageSize = 25,
  initialOffset = 0,
}: UseAttendanceOpts) {
  const [items, setItems] = useState<Attendance[]>([]);
  const [offset, setOffset] = useState(initialOffset);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [range, setRange] = useState({fromDate, toDate});

  useEffect(() => {
    setRange({fromDate, toDate});
  }, [fromDate, toDate]);

  const mapRaw = useCallback(
    (r: any): Attendance => {
      const date = r.attendancedate ?? '';
      const dateKey = toIsoDate(date);

      return {
        id: String(r.attendanceid ?? r.rowNumber ?? ''),
        attendanceId: Number(r.attendanceid ?? 0),
        userId: String(r.userid ?? userId ?? ''),
        userFullName: r.userfullname ?? '',
        date,
        dateKey,
        inTime: r.intime ?? null,
        outTime: r.outtime ?? null,
        checkInLocation: r.checkinloclocation ?? null,
        checkInLat: r.checkinloclatitude ? Number(r.checkinloclatitude) : null,
        checkInLng: r.checkinloclongitude ? Number(r.checkinloclongitude) : null,
        checkOutLocation: r.checkoutloclocation ?? null,
        checkOutLat: r.checkoutloclatitude ? Number(r.checkoutloclatitude) : null,
        checkOutLng: r.checkoutloclongitude ? Number(r.checkoutloclongitude) : null,
        raw: r,
      };
    },
    [userId],
  );

const fetchPage = useCallback(
  async (off = 0, replace = false) => {
    if (!userId) return;

    try {
      if (off === 0) {
        setLoading(true);
      } else {
        setLoadingMore(true);
      }

      setError(null);

      const url =
        `/ords/accounts/attendance/getdaywise` +
        `?USER_ID=${userId}` +
        `&FROM_DATE=${range.fromDate}` +
        `&TO_DATE=${range.toDate}` +
        (off > 0 ? `&offset=${off}` : '');

      const res = await APICall<any>('get', null, url);

      if (!Array.isArray(res?.data?.items)) {
        throw new Error('Invalid API response');
      }

      const newItems = res.data.items.map(mapRaw);

      setItems(prev =>
        replace || off === 0 ? newItems : [...prev, ...newItems],
      );

      setHasMore(newItems.length === pageSize);
      setOffset(off);
    } catch (e: any) {
      setError(e?.message || 'Failed to load attendance');
    } finally {
      setLoading(false);
      setLoadingMore(false);
      setRefreshing(false);
    }
  },
  [userId, range.fromDate, range.toDate, pageSize, mapRaw],
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
    fetchPage(initialOffset, true);
  }, [fetchPage, initialOffset]);

  const attendances = useMemo(() => items, [items]);

  return {
    attendances,
    raw: items,
    loading,
    loadingMore,
    refreshing,
    error,
    hasMore,
    offset,
    loadMore,
    refresh,
    setRange,
    range,
  };
}
