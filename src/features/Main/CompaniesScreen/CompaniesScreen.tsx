import React from 'react';
import {
  View,
  FlatList,
  StatusBar,
  StyleSheet,
} from 'react-native';
import AppSeparator from '@/Component/AppSeparator/AppSeparator';
import Colors from '@/Theme/Colors';
import { useCompaniesScreen } from './hooks/useCompaniesScreen';
import {
  CompaniesHeader,
  SearchBar,
  CompanyCard,
  StateMessages,
  FloatingAddButton,
} from './components';
import { Company } from '@/hooks/useCompanies';

export default function CompaniesScreen() {
  const {
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
  } = useCompaniesScreen('SUB22106', '177', 20);

  const renderItem = ({ item }: { item: Company }) => (
    <CompanyCard
      company={item}
      onRetagPress={handleRetagCompany}
    />
  );

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Colors.companiesScreen.statusBarBackground}
        barStyle="dark-content"
      />

      <AppSeparator size={20} />
 
      <CompaniesHeader
        companyCount={getCompanyCount()}
        onNearbyClientsPress={handleNearbyClients}
      />

      <AppSeparator size={10} />
 
      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onFilterPress={() => console.log('Filter pressed')}
      />

 
      <FlatList
        data={filteredCompanies}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <StateMessages
            loading={loading}
            error={error}
            isEmpty={filteredCompanies.length === 0 && !loading && !error}
            rawCount={raw?.length ?? 0}
            onRetry={handleRefresh}
          />
        }
      />

   
      {(loading || error) && (
        <StateMessages
          loading={loading}
          error={error}
          isEmpty={false}
          rawCount={raw?.length ?? 0}
          onRetry={handleRefresh}
        />
      )}

 
      <FloatingAddButton onPress={handleAddCompany} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.companiesScreen.background,
  },

  listContent: {
    paddingHorizontal: 10,
    paddingBottom: 100,
  },
});
