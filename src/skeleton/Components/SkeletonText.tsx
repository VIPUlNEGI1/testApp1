import React, { memo } from 'react';
import { View, DimensionValue } from 'react-native';
import { Skeleton } from './Skeleton';

type SkeletonTextProps = {
  lines?: number;
  width?: DimensionValue | Array<DimensionValue>;
  height?: DimensionValue;
  spacing?: number;
  animated?: boolean;
};

const SkeletonTextComponent = ({
  lines = 3,
  width = '100%',
  height = 16,
  spacing = 8,
  animated = true,
}: SkeletonTextProps) => {
  const renderLine = (index: number, totalLines: number) => {
    let lineWidth: DimensionValue;

    if (Array.isArray(width)) {
      lineWidth = width[index] || width[0];
    } else if (typeof width === 'string' || typeof width === 'number') {
      // More realistic width variations for different lines
      if (index === 0) {
        // First line - usually longest
        lineWidth =
          typeof width === 'string' && width === '100%' ? '95%' : (width as DimensionValue);
      } else if (index === totalLines - 1) {
        // Last line - usually shorter
        lineWidth = typeof width === 'string' && width === '100%' ? '65%' : '70%';
      } else {
        // Middle lines - varied lengths
        const variations = ['85%', '90%', '80%', '88%', '75%'];
        lineWidth = variations[index % variations.length] as DimensionValue;
      }
    } else {
      lineWidth = '100%';
    }

    return (
      <Skeleton
        key={index}
        width={lineWidth}
        height={height}
        radius={6}
        animated={animated}
        style={index > 0 && { marginTop: spacing }}
      />
    );
  };

  return <View>{Array.from({ length: lines }).map((_, index) => renderLine(index, lines))}</View>;
};

export const SkeletonText = memo(SkeletonTextComponent);
