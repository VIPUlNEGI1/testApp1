import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SvgFromXml } from 'react-native-svg';
import SVGByteCode from '@/Helpers/SVGByteCode';
import Colors from '@/Theme/Colors';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (text: string) => void;
  onFilterPress: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
  onFilterPress,
}) => {
  return (
    <View style={styles.searchRow}>
      <View style={styles.searchContainer}>
        <SvgFromXml xml={SVGByteCode.search} width={18} height={18} />

        <TextInput
          placeholder="Search..."
          value={searchQuery}
          onChangeText={onSearchChange}
          style={styles.searchInput}
          placeholderTextColor={Colors.companiesScreen.placeholder}
        />
      </View>

      <TouchableOpacity style={styles.filterButton} onPress={onFilterPress}>
        <SvgFromXml xml={SVGByteCode.filter} width={18} height={18} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchRow: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  searchContainer: {
    flex: 1,
    backgroundColor: Colors.companiesScreen.searchBackground,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginRight: 8,
    height: 50,
  },

  searchInput: {
    flex: 1,
    marginLeft: 8,
    color: Colors.companiesScreen.text,
  },

  filterButton: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: Colors.companiesScreen.searchBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchBar;
