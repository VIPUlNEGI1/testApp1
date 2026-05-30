import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { SvgFromXml } from 'react-native-svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { BOTTOM_TABS } from './BottomTabConfig';
import { scale } from '@/Helpers/Responsive';
import Colors from '@/Theme/Colors';
import SVGByteCode from '@/Helpers/SVGByteCode';

export default function CurvedBottomTabs({ state, descriptors, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  const renderIcon = (routeName: string, focused: boolean) => {
    const tabConfig = BOTTOM_TABS.find(t => t.name === routeName);
    const iconKey = focused ? tabConfig?.activeIcon : tabConfig?.inactiveIcon;
    const iconXml = iconKey ? SVGByteCode[iconKey] : undefined;

    if (!iconXml) return null;

    return (
      <View style={tabConfig?.isSpecial ? styles.specialIconWrapper : styles.iconWrapper}>
        <SvgFromXml
          xml={iconXml}
          width={scale(tabConfig?.isSpecial ? 32 : 24)}
          height={scale(tabConfig?.isSpecial ? 32 : 24)}
        />
      </View>
    );
  };

  return (
      <View style={styles.curvedContainer}>
        <View style={styles.curvedBar}>
          {state.routes.map((route: any, index: number) => {
            const focused = state.index === index;
            const tabConfig = BOTTOM_TABS.find(t => t.name === route.name);
            const isSpecial = tabConfig?.isSpecial;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });
              if (!focused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            return (
              <TouchableOpacity
                key={route.key}
                activeOpacity={0.8}
                accessibilityRole="button"
                accessibilityState={focused ? { selected: true } : {}}
                accessibilityLabel={descriptors[route.key].options.tabBarAccessibilityLabel}
                onPress={onPress}
                style={[
                  styles.tabItem,
                  isSpecial && styles.specialTabItem,
                  focused && styles.tabItemActive,
                  isSpecial && focused && styles.specialTabItemActive,
                ]}
              >
                {renderIcon(route.name, focused)}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // position: 'relative',
    // bottom: 0,
    // left: 0,
    // right: 0,
    // top: 45,
  },
  curvedContainer: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: scale(30),
    borderTopRightRadius: scale(30),
    paddingBottom: scale(20),
    paddingTop: scale(0),
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: -5 },
    elevation: 10,
    position: 'relative',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
  },
  curvedBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: scale(20),
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: scale(10),
  },
  tabItemActive: {
    opacity: 1,
  },
  specialTabItem: {
    transform: [{ translateY: -scale(25) }],
  },
  specialTabItemActive: {
    transform: [{ translateY: -scale(25) }],
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  specialIconWrapper: {
    width: scale(60),
    height: scale(60),
    borderRadius: scale(30),
    backgroundColor: Colors.brand,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.brand,
    shadowOpacity: 0.4,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },
});
