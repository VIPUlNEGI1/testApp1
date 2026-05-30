import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { BOTTOM_TABS } from './BottomTabConfig';
import CurvedBottomTabs from './CurvedBottomTabs';

const Tab = createBottomTabNavigator<Record<string, undefined>>();

export default function BottomTabs() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} tabBar={props => <CurvedBottomTabs {...props} />}>
      {BOTTOM_TABS.map(tab => (
        <Tab.Screen key={tab.name} name={tab.name} component={tab.component} options={{ title: tab.label }} />
      ))}
    </Tab.Navigator>
  );
}