import { useState, useCallback } from 'react';
import useCompanies, { Company } from '@/hooks/useCompanies';

interface UseCompaniesScreenReturn {
  companies: Company[];
  filteredCompanies: Company[];
  loading: boolean;
  error: any;
  searchQuery: string;
  raw: Company[] | undefined;
  handleSearchChange: (text: string) => void;
  handleRefresh: () => void;
  handleAddCompany: () => void;
  handleNearbyClients: () => void;
  handleRetagCompany: (companyId: string) => void;
  getCompanyCount: () => number;
}

export const useCompaniesScreen = (
  subscriptionId: string,
  employeeId: string,
  pageSize?: number
): UseCompaniesScreenReturn => {
  const { companies, raw, loading, error, searchQuery, setSearchQuery, refresh } = useCompanies({
    subscriptionId,
    employeeId,
    pageSize: pageSize || 20,
  });

  const handleSearchChange = useCallback((text: string) => {
    setSearchQuery(text);
  }, [setSearchQuery]);

  const handleRefresh = useCallback(() => {
    refresh();
  }, [refresh]);

  const handleAddCompany = useCallback(() => {
    console.log('Add company pressed');
 
  }, []);

  const handleNearbyClients = useCallback(() => {
    console.log('Nearby clients pressed');
 
  }, []);

  const handleRetagCompany = useCallback((companyId: string) => {
    console.log(`Re-tag company ${companyId}`);
 
  }, []);

  const getCompanyCount = useCallback(() => {
    return companies?.length || 0;
  }, [companies]);

  const filteredCompanies = companies || [];

  return {
    companies,
    filteredCompanies,
    loading,
    error,
    searchQuery,
    raw,
    handleSearchChange,
    handleRefresh,
    handleAddCompany,
    handleNearbyClients,
    handleRetagCompany,
    getCompanyCount,
  };
};
