import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SvgFromXml } from 'react-native-svg';

import { BOTTOM_TABS } from './BottomTabConfig';
import { scale } from '@/Helpers/Responsive';
import Colors from '@/Theme/Colors';
import Fonts from '@/Theme/Fonts';
import SVGByteCode from '@/Helpers/SVGByteCode';

const Tab = createBottomTabNavigator<Record<string, undefined>>();

function CustomBottomBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const focused = state.index === index;
        const tabConfig = BOTTOM_TABS.find(t => t.name === route.name);
        const iconKey = focused ? tabConfig?.activeIcon : tabConfig?.inactiveIcon;
        const iconXml = iconKey ? SVGByteCode[iconKey] : undefined;

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
            activeOpacity={0.85}
            accessibilityRole="button"
            accessibilityState={focused ? { selected: true } : {}}
            accessibilityLabel={descriptors[route.key].options.tabBarAccessibilityLabel}
            onPress={onPress}
            style={[
              styles.tabItem,
              focused && styles.tabItemActive,
              tabConfig?.isSpecial && styles.specialTabItem,
              tabConfig?.isSpecial && focused && styles.specialTabItemActive,
            ]}
          >
            {iconXml ? (
              <View style={tabConfig?.isSpecial ? styles.specialIconWrapper : undefined}>
                <SvgFromXml
                  xml={iconXml}
                  width={scale(tabConfig?.isSpecial ? 28 : 24)}
                  height={scale(tabConfig?.isSpecial ? 28 : 24)}
                />
              </View>
            ) : null}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function BottomTabs() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} tabBar={props => <CustomBottomBar {...props} />}>
      {BOTTOM_TABS.map(tab => (
        <Tab.Screen key={tab.name} name={tab.name} component={tab.component} options={{ title: tab.label }} />
      ))}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    borderRadius: scale(25),
    paddingVertical: scale(10),
    paddingHorizontal: scale(14),
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 8,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: scale(8),
    borderRadius: scale(18),
  },
  tabItemActive: {
    backgroundColor: Colors.blueBatch,
  },
  specialTabItem: {
    transform: [{ translateY: -4 }],
  },
  specialTabItemActive: {
    backgroundColor: Colors.brandLightI,
  },
  specialIconWrapper: {
 
    borderRadius: scale(20),
 
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: scale(2),
  },
  tabLabel: {
    marginTop: scale(4),
    fontSize: scale(10),
    fontFamily: Fonts.ThemeMedium,
  },
  tabLabelActive: {
    // color: '#FF9228',
  },
  specialTabLabel: {
    fontWeight: '700',
  },
  tabLabelInactive: {
    color: '#787878ff',
  },
});