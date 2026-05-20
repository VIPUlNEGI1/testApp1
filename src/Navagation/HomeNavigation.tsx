import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import type { RootStackParamList } from '@/Types/types';
import HomeScreen from '@/features/Main/Home/HomeScreen';
import SearchScreen from '@/features/Main/SearchScreen/Searchscreen';
import MyLabiry from '@/features/MyLabiry/MyLabiry';
const Stack = createStackNavigator<RootStackParamList>();

export default () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="MyLabiry" component={MyLabiry} />
    </Stack.Navigator>
  );
};
