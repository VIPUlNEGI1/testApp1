import React from 'react';

import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';

import { Swipeable } from 'react-native-gesture-handler';

import Colors from '@/Theme/Colors';
import Fonts from '@/Theme/Fonts';
import { scale } from '@/Helpers/Responsive';

import { Notification } from '../NotificationTypes';
import SwipeActions from './Swiper';


interface Props {
  item: Notification;
  onRead: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function NotificationCard({
  item,
  onRead,
  onDelete,
}: Props) {
  return (
    <Swipeable
  renderRightActions={(progress, dragX) => (
    <SwipeActions
      progress={progress}
      dragX={dragX}
      onDelete={() => onDelete(item.id)}
    />
  )}
  rightThreshold={40}
  overshootRight={false}
  onSwipeableOpen={() => onRead(item.id)}
>
      <Pressable
        onPress={() => onRead(item.id)}
        style={({ pressed }) => [
          styles.notificationCard,
          item.read &&
            styles.notificationCardRead,
          pressed &&
            styles.notificationCardPressed,
        ]}
      >
        <View
          style={[
            styles.iconCircle,
            {
              backgroundColor:
                item.badgeColor,
            },
          ]}
        >
          <Text style={styles.icon}>
            {item.icon}
          </Text>
        </View>

        <View style={styles.textBlock}>
          <View style={styles.titleRow}>
            <Text
              numberOfLines={1}
              style={styles.notificationTitle}
            >
              {item.title}
            </Text>

            {!item.read && (
              <View
                style={styles.unreadDot}
              />
            )}
          </View>

          <Text
            numberOfLines={2}
            style={
              styles.notificationSubtitle
            }
          >
            {item.subtitle}
          </Text>
        </View>

        <Text style={styles.notificationTime}>
          {item.time}
        </Text>
      </Pressable>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  notificationCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: scale(16),
    borderRadius: scale(20),
    backgroundColor: '#F8FAFC',
  },

  notificationCardRead: {
    backgroundColor: '#FFFFFF',
    opacity: 0.8,
  },

  notificationCardPressed: {
    backgroundColor: '#F1F5F9',
  },

  iconCircle: {
    width: scale(56),
    height: scale(56),
    borderRadius: scale(20),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: scale(14),
  },

  icon: {
    fontSize: scale(24),
  },

  textBlock: {
    flex: 1,
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scale(4),
  },

  notificationTitle: {
    flex: 1,
    color: Colors.darkGray,
    fontSize: scale(16),
    fontFamily: Fonts.ThemeSemiBold,
  },

  unreadDot: {
    width: scale(8),
    height: scale(8),
    borderRadius: scale(4),
    backgroundColor: Colors.blue,
    marginLeft: scale(8),
  },

  notificationSubtitle: {
    color: Colors.lightGray,
    fontSize: scale(13),
    fontFamily: Fonts.ThemeRegular,
    lineHeight: scale(18),
  },

  notificationTime: {
    marginLeft: scale(12),
    color: Colors.lightGray,
    fontSize: scale(11),
    fontFamily: Fonts.ThemeMedium,
    marginTop: scale(2),
  },
});