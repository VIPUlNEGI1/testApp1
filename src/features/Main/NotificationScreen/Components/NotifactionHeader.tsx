import React from 'react';

import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Colors from '@/Theme/Colors';
import Fonts from '@/Theme/Fonts';

import { scale } from '@/Helpers/Responsive';

interface Props {
  unreadCount: number;
  onBack: () => void;
  onMarkAllRead: () => void;
}

export default function NotificationHeader({
  unreadCount,
  onBack,
  onMarkAllRead,
}: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onBack}
        style={styles.backButtonWrapper}
      >
        <Text style={styles.backButton}>
          ←
        </Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.pageTitle}>
          Notifications
        </Text>

        <Text style={styles.pageDescription}>
          {unreadCount} unread notifications
        </Text>
      </View>

      {unreadCount > 0 ? (
        <Pressable
          style={({ pressed }) => [
            styles.markAllButton,
            pressed && styles.markAllButtonPressed,
          ]}
          onPress={onMarkAllRead}
        >
          <Text style={styles.markAllText}>
            Mark all read
          </Text>
        </Pressable>
      ) : (
        <View style={styles.placeholder} />
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    paddingVertical: scale(12),
  },

  backButtonWrapper: {
    width: scale(44),
    height: scale(44),

    borderRadius: scale(14),

    backgroundColor: '#F8FAFC',

    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  backButton: {
    fontSize: scale(22),
    color: Colors.darkGray,
    fontFamily: Fonts.ThemeSemiBold,
  },

  content: {
    flex: 1,
    marginHorizontal: scale(14),
  },

  pageTitle: {
    color: Colors.darkGray,
    fontSize: scale(24),
    fontFamily: Fonts.ThemeExtraBold,
  },

  pageDescription: {
    marginTop: scale(4),

    color: Colors.lightGray,
    fontSize: scale(13),
    fontFamily: Fonts.ThemeMedium,
  },

  markAllButton: {
    paddingHorizontal: scale(14),
    paddingVertical: scale(10),

    borderRadius: scale(14),
 
  },

  markAllButtonPressed: {
    opacity: 0.7,
  },

  markAllText: {
    color: Colors.blue,
    fontSize: scale(14),
    fontWeight: '600',
    fontFamily: Fonts.ThemeSemiBold,
  },

  placeholder: {
    width: scale(70),
  },
});