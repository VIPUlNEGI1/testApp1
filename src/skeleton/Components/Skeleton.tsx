import React, { memo, useEffect } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle, DimensionValue } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';

type SkeletonProps = {
  width?: DimensionValue;
  height?: DimensionValue;
  radius?: number;
  style?: StyleProp<ViewStyle>;

  /**
   * Light mode base color
   */
  backgroundColor?: string;

  /**
   * Shimmer highlight color
   */
  highlightColor?: string;

  /**
   * Animation duration
   */
  duration?: number;

  /**
   * Enable / disable shimmer
   */
  animated?: boolean;
};

const SHIMMER_WIDTH = 100;

const SkeletonComponent = ({
  width = '100%',
  height = 16,
  radius = 8,
  style,
  backgroundColor = '#F3F4F6',
  highlightColor = '#FFFFFF',
  duration = 1000,
  animated = true,
}: SkeletonProps) => {
  const shimmer = useSharedValue(0);

  useEffect(() => {
    if (!animated) {
      return;
    }

    shimmer.value = withRepeat(
      withTiming(1, {
        duration,
      }),
      -1,
      false,
    );
  }, [animated, duration, shimmer]);

  const animatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      shimmer.value,
      [0, 1],
      [-SHIMMER_WIDTH, SHIMMER_WIDTH * 2],
      Extrapolation.CLAMP,
    );

    return {
      transform: [{ translateX }],
    };
  });

  return (
    <View
      style={[
        styles.container,
        {
          width,
          height,
          borderRadius: radius,
          backgroundColor,
        },
        style,
      ]}
    >
      {animated && (
        <Animated.View style={[styles.shimmerWrapper, animatedStyle]}>
          <LinearGradient
            colors={['transparent', highlightColor, highlightColor, 'transparent']}
            locations={[0, 0.3, 0.7, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradient}
          />
        </Animated.View>
      )}
    </View>
  );
};

export const Skeleton = SkeletonComponent;

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },

  shimmerWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: SHIMMER_WIDTH,
  },

  gradient: {
    flex: 1,
  },
});
