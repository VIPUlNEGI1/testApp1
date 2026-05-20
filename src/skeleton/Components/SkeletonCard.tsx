import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import { Skeleton } from './Skeleton';

import { SkeletonAvatar } from './SkeletonAvatar';
import { SkeletonText } from './SkeletonText';

type SkeletonCardProps = {
  animated?: boolean;
  showAvatar?: boolean;
  avatarSize?: number;
  lines?: number;
  height?: number;
  style?: any;
};

const SkeletonCardComponent = ({
  animated = true,
  showAvatar = true,
  avatarSize = 48,
  lines = 3,
  height = 120,
  style,
}: SkeletonCardProps) => {
  return (
    <View style={[styles.container, { height }, style]}>
      {showAvatar && (
        <View style={styles.avatarContainer}>
          <SkeletonAvatar size={avatarSize} animated={animated} />
        </View>
      )}

      <View style={styles.content}>
        <Skeleton width="90%" height={22} radius={6} animated={animated} style={styles.title} />
        <SkeletonText lines={lines} height={16} spacing={8} animated={animated} />
        <View style={styles.footer}>
          <View style={styles.footerLeft}>
            <Skeleton width={48} height={14} radius={7} animated={animated} />
            <Skeleton width={32} height={14} radius={7} animated={animated} style={styles.rating} />
          </View>
          <Skeleton width={64} height={24} radius={12} animated={animated} />
        </View>
      </View>
    </View>
  );
};

export const SkeletonCard = SkeletonCardComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginHorizontal: 20,
    marginVertical: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },

  avatarContainer: {
    marginRight: 12,
  },

  content: {
    flex: 1,
  },

  title: {
    marginBottom: 8,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },

  footerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  rating: {
    marginLeft: 8,
  },
});
