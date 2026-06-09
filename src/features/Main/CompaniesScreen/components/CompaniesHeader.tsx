import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SvgFromXml } from 'react-native-svg';
import SVGByteCode from '@/Helpers/SVGByteCode';
import Colors from '@/Theme/Colors';

interface CompaniesHeaderProps {
  companyCount: number;
  onNearbyClientsPress: () => void;
}

const CompaniesHeader: React.FC<CompaniesHeaderProps> = ({
  companyCount,
  onNearbyClientsPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerTitleRow}>
        <SvgFromXml xml={SVGByteCode.companies} width={20} height={20} />
        <Text style={styles.companyTitle}>
          Companies ({companyCount})
        </Text>
      </View>

      <TouchableOpacity style={styles.nearByContainer} onPress={onNearbyClientsPress}>
        <SvgFromXml
          xml={SVGByteCode.location}
          width={18}
          height={18}
          style={styles.nearByIcon}
        />
        <Text style={styles.nearByText}>Near by Clients</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 10,
  },

  headerTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  companyTitle: {
    marginLeft: 8,
    fontSize: 20,
    fontWeight: '600',
    color: Colors.companiesScreen.companyTitle,
    borderBottomWidth: 2,
    borderBottomColor: Colors.companiesScreen.primary,
    paddingBottom: 4,
  },

  nearByContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  nearByText: {
    color: Colors.companiesScreen.primary,
    fontWeight: '600',
    marginRight: 5,
  },

  nearByIcon: {
    marginRight: 6,
  },
});

export default CompaniesHeader;
