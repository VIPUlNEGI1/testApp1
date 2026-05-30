import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Colors from '@/Theme/Colors';
import Fonts from '@/Theme/Fonts';
import { scale } from '@/Helpers/Responsive';

interface UpgradeBannerProps {
  onUpgradePress?: () => void;
}

export default function UpgradeBanner({
  onUpgradePress,
}: UpgradeBannerProps) {
  return (
    <LinearGradient
      colors={['#FFB200', '#FF5E3A']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.card}
    >
      <View style={styles.leftSection}>
        <View style={styles.iconBox}>
          <Text style={styles.icon}>⌂</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Upgrade To Premium</Text>

          <Text style={styles.subtitle}>
            Unlock unlimited courses & live sessions
          </Text>
        </View>
      </View>

      <Pressable style={styles.button} onPress={onUpgradePress}>
        <Text style={styles.buttonText}>Upgrade ↗</Text>
      </Pressable>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: scale(28),
    padding: scale(10),
    marginBottom: scale(1),
  },

  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  iconBox: {
    width: scale(54),
    height: scale(54),
    borderRadius: scale(18),
    backgroundColor: 'rgba(255,255,255,0.18)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scale(14),
  },

  icon: {
    fontSize: scale(24),
    color: '#fff',
  },

  content: {
    flex: 1,
  },

  title: {
    color: '#fff',
    fontSize: scale(18),
    fontWeight: '700',

  },

  subtitle: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: scale(13),
    fontFamily: Fonts.ThemeRegular,
    marginTop: scale(4),
    paddingRight: scale(8),
  },

  button: {
    backgroundColor: 'rgba(0,0,0,0.18)',
    paddingHorizontal: scale(18),
    paddingVertical: scale(12),
    borderRadius: scale(18),
    marginLeft: scale(12),
  },

  buttonText: {
    color: '#fff',
    fontSize: scale(14),
    fontFamily: Fonts.ThemeBold,
  },
});