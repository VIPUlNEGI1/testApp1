import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import BottomTabs from './BottomTabs';
import { RootStackParamList } from '@/Types/types';
import AttendanceScreen from '@/features/Main/AttendanceScreen/AttendanceScreen';
import CompaniesScreen from '@/features/Main/CompaniesScreen/CompaniesScreen';
import HomeScreen from '@/features/Main/HomeScreen/HomeScreen';

const Stack = createStackNavigator<RootStackParamList>();

export default () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="BottomTabs">
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="AttendanceScreen" component={AttendanceScreen} />
      <Stack.Screen name="CompaniesScreen" component={CompaniesScreen} />
      <Stack.Screen name="NewHomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};
