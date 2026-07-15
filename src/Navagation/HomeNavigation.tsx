import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import BottomTabs from './BottomTabs';
import type { HomeStackParamList } from '@/Types/types';

const Stack = createStackNavigator<HomeStackParamList>();

export default () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="BottomTabs">
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
    </Stack.Navigator>
  );
};
