import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import BottomTabs from './BottomTabs';
import SearchScreen from '@/features/Main/SearchScreen/Searchscreen';
import MyLabiry from '@/features/MyLabiry/MyLabiry';
import NotificationScreen from '@/features/Main/NotificationScreen/NotificationScreen';
import Profile from '@/features/Main/ProfileScreen/ProfileScreen';
import QuizScreen from '@/features/QuizScreen/quizScreen';
import { RootStackParamList } from '@/Types/types';

const Stack = createStackNavigator<RootStackParamList>();

export default () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="BottomTabs">
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="MyLabiry" component={MyLabiry} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="QuizScreen" component={QuizScreen} />
    </Stack.Navigator>
  );
};
