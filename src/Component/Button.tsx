import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '@/Theme/Colors';

export interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'solid' | 'outline' | 'gradient';
  size?: 'small' | 'medium' | 'large';
  color?: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  style?: ViewStyle;
  textStyle?: TextStyle;
  gradientColors?: string[];
  gradientStart?: { x: number; y: number };
  gradientEnd?: { x: number; y: number };
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'solid',
  size = 'medium',
  color,
  backgroundColor,
  textColor,
  borderColor,
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  style,
  textStyle,
  gradientColors,
  gradientStart = { x: 0, y: 0 },
  gradientEnd = { x: 1, y: 0 },
}) => {
  const getButtonStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {};

    // Size styles
    switch (size) {
      case 'small':
        baseStyle.paddingVertical = 8;
        baseStyle.paddingHorizontal = 16;
        baseStyle.borderRadius = 6;
        break;
      case 'medium':
        baseStyle.paddingVertical = 12;
        baseStyle.paddingHorizontal = 24;
        baseStyle.borderRadius = 8;
        break;
      case 'large':
        baseStyle.paddingVertical = 16;
        baseStyle.paddingHorizontal = 32;
        baseStyle.borderRadius = 12;
        break;
    }

    // Variant styles
    switch (variant) {
      case 'solid':
        baseStyle.backgroundColor = backgroundColor || color || Colors.brand;
        break;
      case 'outline':
        baseStyle.backgroundColor = 'transparent';
        baseStyle.borderWidth = 1;
        baseStyle.borderColor = borderColor || color || Colors.brand;
        break;
      case 'gradient':
        // Gradient is handled separately
        break;
    }

    // Disabled state
    if (disabled) {
      baseStyle.opacity = 0.5;
    }

    return baseStyle;
  };

  const getTextStyle = (): TextStyle => {
    const baseStyle: TextStyle = {
      fontWeight: '600',
    };

    // Size text styles
    switch (size) {
      case 'small':
        baseStyle.fontSize = 14;
        break;
      case 'medium':
        baseStyle.fontSize = 16;
        break;
      case 'large':
        baseStyle.fontSize = 18;
        break;
    }

    // Variant text styles
    switch (variant) {
      case 'solid':
      case 'gradient':
        baseStyle.color = textColor || '#FFFFFF';
        break;
      case 'outline':
        baseStyle.color = textColor || color || Colors.brand;
        break;
    }

    return baseStyle;
  };

  const renderContent = () => {
    if (loading) {
      return (
        <ActivityIndicator
          size="small"
          color={variant === 'outline' ? color || Colors.brand : '#FFFFFF'}
        />
      );
    }

    const iconElement = icon && (
      <View style={iconPosition === 'left' ? styles.iconLeft : styles.iconRight}>{icon}</View>
    );

    return (
      <>
        {iconPosition === 'left' && iconElement}
        <Text style={[getTextStyle(), textStyle]}>{title}</Text>
        {iconPosition === 'right' && iconElement}
      </>
    );
  };

  const buttonContent = (
    <TouchableOpacity
      style={[getButtonStyle(), styles.button, style]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {renderContent()}
    </TouchableOpacity>
  );

  if (variant === 'gradient') {
    return (
      <LinearGradient
        colors={gradientColors || Colors.buttonGradient}
        start={gradientStart}
        end={gradientEnd}
        style={[getButtonStyle(), styles.button, style]}
      >
        <TouchableOpacity
          style={styles.gradientButton}
          onPress={onPress}
          disabled={disabled || loading}
          activeOpacity={0.8}
        >
          {renderContent()}
        </TouchableOpacity>
      </LinearGradient>
    );
  }

  return buttonContent;
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  gradientButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
});

export default Button;
