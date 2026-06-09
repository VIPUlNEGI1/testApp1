declare module 'react-native-vector-icons/MaterialCommunityIcons' {
  import { ComponentType } from 'react';
  import { TextProps, TextStyle } from 'react-native';

  export interface IconProps extends TextProps {
    name: string;
    size?: number;
    color?: string;
    style?: TextStyle;
  }

  const MaterialCommunityIcons: ComponentType<IconProps> & {
    loadFont?: () => void;
  };
  export default MaterialCommunityIcons;
}
