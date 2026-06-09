import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SvgFromXml } from 'react-native-svg';
import SVGByteCode from '@/Helpers/SVGByteCode';
import Colors from '@/Theme/Colors';
import { Company } from '@/hooks/useCompanies';

interface CompanyCardProps {
  company: Company;
  onRetagPress: (companyId: string) => void;
}

const CompanyCard: React.FC<CompanyCardProps> = ({
  company,
  onRetagPress,
}) => {
  return (
    <View style={styles.card}>
 
      <View style={styles.headerRow}>
        <View style={styles.companyRow}>
          <View style={styles.logoBox}>
            <Image
              source={require('@/Assets/download.png')}
              style={styles.image}
            />
          </View>
          <Text style={styles.companyName}>{company.name}</Text>
        </View>

        <TouchableOpacity
          style={styles.retagButton}
          onPress={() => onRetagPress(company.id)}
        >
          <Text style={styles.retagText}>Re-tag</Text>
          <SvgFromXml xml={SVGByteCode.location} width={18} height={18} />
        </TouchableOpacity>
      </View>

      <View style={styles.addressRow}>
        <SvgFromXml xml={SVGByteCode.location} width={16} height={16} />
        <Text style={styles.address}>{company.address}</Text>
      </View>

 
      <View style={styles.personRow}>
        <SvgFromXml xml={SVGByteCode.user} width={16} height={16} />
        <Text style={styles.personName}>{company.contactPerson}</Text>
      </View>
 
      <View style={styles.contactRow}>
        <View style={styles.contactItem}>
          <SvgFromXml xml={SVGByteCode.phone} width={16} height={16} />
          <Text style={styles.contactText}>{company.phone}</Text>
        </View>

        <View style={styles.contactItem}>
          <SvgFromXml xml={SVGByteCode.email} width={16} height={16} />
          <Text style={styles.contactText}>{company.email || 'NA'}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.companiesScreen.cardBackground,
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    elevation: 2,
  },

  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  companyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  logoBox: {
    width: 28,
    height: 28,
    borderRadius: 6,
    backgroundColor: Colors.companiesScreen.logoBackground,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  companyName: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: Colors.companiesScreen.companyName,
  },

  retagButton: {
    gap: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },

  retagText: {
    color: Colors.companiesScreen.primary,
    fontSize: 12,
    fontWeight: '600',
  },

  addressRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 8,
  },

  address: {
    marginLeft: 6,
    flex: 1,
    color: Colors.companiesScreen.textTertiary,
    fontSize: 12,
    lineHeight: 18,
  },

  personRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },

  personName: {
    marginLeft: 6,
    fontSize: 12,
    color: Colors.companiesScreen.textSecondary,
  },

  contactRow: {
    flexDirection: 'row',
    marginTop: 8,
    flexWrap: 'wrap',
  },

  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },

  contactText: {
    marginLeft: 6,
    color: Colors.companiesScreen.contactText,
    fontSize: 12,
  },
});

export default CompanyCard;
