import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import BottomTabs from './BottomTabs';
import SearchScreen from '@/features/Main/SearchScreen/Searchscreen';
import MyLabiry from '@/features/MyLabiry/MyLabiry';

type HomeStackParamList = {
  BottomTabs: undefined;
  SearchScreen: { courseId?: string };
  MyLabiry: undefined;
};

const Stack = createStackNavigator<HomeStackParamList>();

export default () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="BottomTabs">
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="MyLabiry" component={MyLabiry} />
    </Stack.Navigator>
  );
};
