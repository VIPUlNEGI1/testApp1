import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { verticalScale } from '@/Helpers/Responsive';
import  Colors from '@/Theme/Colors';

export default memo(({ size = 1 }: { size?: number }) => {
  return (
    <View
      style={[styles.container, { height: verticalScale(size), width: '100%' }]}
    />
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.transparent,
  },
});
