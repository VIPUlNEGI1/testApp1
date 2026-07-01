import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { SvgFromXml } from 'react-native-svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import * as BottomTabConfig from './BottomTabConfig';
import SVGByteCode from '@/Helpers/SVGByteCode';
import { scale } from '@/Helpers/Responsive';
import Colors from '@/Theme/Colors';

const CurvedBottomTabs = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const { bottom } = useSafeAreaInsets();


  
  const BOTTOM_TABS: any = (BottomTabConfig as any).BOTTOM_TABS ?? (BottomTabConfig as any).default ?? BottomTabConfig;

  return (
    <View style={[styles.container, { paddingBottom: bottom + scale(8) }]}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const focused = state.index === index;

          const tab = BOTTOM_TABS.find((item: any) => item.name === route.name);

          if (!tab) return null;

          const iconKey = focused ? tab.activeIcon : tab.inactiveIcon;
          const iconXml =
            SVGByteCode[iconKey as keyof typeof SVGByteCode];

          return (
            <TouchableOpacity
              key={route.key}
              activeOpacity={0.8}
              style={[styles.tab, focused && styles.activeTab]}
              accessibilityRole="button"
              accessibilityState={focused ? { selected: true } : {}}
              accessibilityLabel={
                descriptors[route.key]?.options.tabBarAccessibilityLabel
              }
              onPress={() => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                  canPreventDefault: true,
                });

                if (!focused && !event.defaultPrevented) {
                  navigation.navigate(route.name as never);
                }
              }}
            >
              {iconXml && (
                <SvgFromXml
                  xml={iconXml}
                  width={scale(24)}
                  height={scale(24)}
                />
              )}

              <Text style={[styles.label, focused && styles.activeLabel]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default CurvedBottomTabs;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    borderTopLeftRadius: scale(30),
    borderTopRightRadius: scale(30),
    paddingTop: scale(10),
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    elevation: 10,
  },

  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(16),
  },

  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: scale(10),
    borderRadius: scale(18),
  },

  activeTab: {
    backgroundColor: Colors.primaryDark,
  },

  label: {
    marginTop: scale(4),
    fontSize: scale(10),
    fontWeight: '600',
    color: '#fff',
  },

  activeLabel: {
    color: Colors.success,
  },
});