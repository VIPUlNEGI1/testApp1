import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { scale } from '@/Helpers/Responsive';
import Colors from '@/Theme/Colors';

export default function ClaimsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Claims</Text>
      <Text style={styles.subtitle}>View your claim requests and statuses here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: scale(24),
    fontWeight: '700',
    color: Colors.text,
    marginBottom: scale(8),
  },
  subtitle: {
    fontSize: scale(14),
    color: Colors.textSecondary,
    textAlign: 'center',
  },
});
