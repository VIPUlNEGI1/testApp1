import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { SvgFromXml } from 'react-native-svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { BOTTOM_TABS } from './BottomTabConfig';
import SVGByteCode from '@/Helpers/SVGByteCode';
import { scale } from '@/Helpers/Responsive';
import Colors from '@/Theme/Colors';

export default function CurvedBottomTabs({ state, descriptors, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  const renderIcon = (routeName: string, focused: boolean) => {
    const tabConfig = BOTTOM_TABS.find(t => t.name === routeName);
    const iconKey = focused ? tabConfig?.activeIcon : tabConfig?.inactiveIcon;
    const iconXml = iconKey ? SVGByteCode[iconKey] : undefined;

    if (!iconXml) {
      return null;
    }

    return <SvgFromXml xml={iconXml} width={scale(24)} height={scale(24)} />;
  };

  return (
    <View style={[styles.curvedContainer, { paddingBottom: insets.bottom + scale(8) }]}> 
      <View style={styles.curvedBar}>
        {state.routes.map((route: any, index: number) => {
          const focused = state.index === index;
          const tabConfig = BOTTOM_TABS.find(t => t.name === route.name);

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
              style={[styles.tabItem, focused && styles.tabItemActive]}
            >
              <View style={styles.tabContent}>
                {renderIcon(route.name, focused)}
                <Text style={[styles.tabLabel, focused && styles.tabLabelActive]}>{tabConfig?.label}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  curvedContainer: {
    backgroundColor: Colors.secondary,
    borderTopLeftRadius: scale(30),
    borderTopRightRadius: scale(30),
    paddingTop: scale(10),
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: -4 },
    elevation: 10,
    position: 'relative',
    bottom: 0,
    left: 0,
    right: 0,
  },
  curvedBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(16),
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: scale(10),
    borderRadius: scale(18),
  },
  tabItemActive: {
    backgroundColor: Colors.gray[50],
  },
  tabContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    marginTop: scale(4),
    fontSize: scale(10),
    color:'#ffffff',
    fontWeight: '600',
  },
  tabLabelActive: {
    color: Colors.tabBarActive,
  },
});
