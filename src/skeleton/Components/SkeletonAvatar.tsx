import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import { Skeleton } from './Skeleton';
import { DimensionValue } from 'react-native';

type SkeletonAvatarProps = {
  size?: DimensionValue;
  radius?: number;
  animated?: boolean;
  style?: any;
};

const SkeletonAvatarComponent = ({
  size = 48,
  radius = 24,
  animated = true,
  style,
}: SkeletonAvatarProps) => {
  return (
    <View style={[styles.container, style]}>
      <Skeleton width={size} height={size} radius={radius} animated={animated} />
    </View>
  );
};

export const SkeletonAvatar = memo(SkeletonAvatarComponent);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
