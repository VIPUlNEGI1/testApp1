import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Design size (Figma/XD)
const guidelineWidth = 375;
const guidelineHeight = 812;

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;

/**
 * Scale based on screen width
 */
export const scale = (size: number) =>
  (width / guidelineWidth) * size;

/**
 * Scale based on screen height
 */
export const verticalScale = (size: number) =>
  (height / guidelineHeight) * size;

/**
 * Moderate scaling (recommended for fonts & spacing)
 */
export const moderateScale = (
  size: number,
  factor = 0.5,
) => size + (scale(size) - size) * factor;

/**
 * Width percentage
 */
export const wp = (percent: number) =>
  (width * percent) / 100;

/**
 * Height percentage
 */
export const hp = (percent: number) =>
  (height * percent) / 100;


// fontSize: moderateScale(16)
// width: wp(90)
// height: hp(40)
// padding: moderateScale(16)
// borderRadius: moderateScale(12)
// width: scale(24),
// height: scale(24),