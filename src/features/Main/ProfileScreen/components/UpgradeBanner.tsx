import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Colors from '@/Theme/Colors';
import Fonts from '@/Theme/Fonts';
import { scale } from '@/Helpers/Responsive';

interface UpgradeBannerProps {
  onUpgradePress?: () => void;
}

export default function UpgradeBanner({ onUpgradePress }: UpgradeBannerProps) {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.title}>Upgrade to Premium</Text>
        <Text style={styles.subtitle}>Unlock unlimited courses, live sessions, and premium support.</Text>
      </View>
      <Pressable style={styles.button} onPress={onUpgradePress} android_ripple={{ color: '#ffffff20' }}>
        <Text style={styles.buttonText}>Upgrade</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    borderRadius: scale(28),
    padding: scale(18),
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 10,
  },
  content: {
    flex: 1,
    marginRight: scale(14),
  },
  title: {
    color: Colors.darkGray,
    fontSize: scale(16),
    fontFamily: Fonts.ThemeBold,
    marginBottom: scale(6),
  },
  subtitle: {
    color: Colors.textMuted,
    fontSize: scale(12),
    fontFamily: Fonts.ThemeRegular,
  },
  button: {
    backgroundColor: Colors.brandLightI,
    borderRadius: scale(20),
    paddingVertical: scale(12),
    paddingHorizontal: scale(18),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontSize: scale(13),
    fontFamily: Fonts.ThemeBold,
  },
});
