import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Colors from '@/Theme/Colors';

interface LocationSectionProps {
  location: string;
  onCheckOut: () => void;
}

const LocationSection: React.FC<LocationSectionProps> = ({
  location,
  onCheckOut,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.locationTitle}>Current Location</Text>

      <Text style={styles.location}>{location}</Text>

      <TouchableOpacity
        style={styles.checkoutBtn}
        onPress={onCheckOut}
      >
        <Text style={styles.checkoutText}>Check Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },

  locationTitle: {
    textAlign: 'center',
    marginTop: 30,
    color: Colors.homeScreen.locationTitle,
    fontWeight: '700',
    fontSize: 16,
  },

  location: {
    textAlign: 'center',
    marginTop: 10,
    color: Colors.homeScreen.addressText,
    lineHeight: 20,
    fontSize: 14,
  },

  checkoutBtn: {
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.homeScreen.checkOutButton,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },

  checkoutText: {
    color: Colors.homeScreen.white,
    fontSize: 16,
    fontWeight: '700',
  },
});

export default LocationSection;
