import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import BottomTabs from './BottomTabs';
import { RootStackParamList } from '@/Types/types';

const Stack = createStackNavigator<RootStackParamList>();

export default () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="BottomTabs">
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
    </Stack.Navigator>
  );
};
