import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View, Text } from 'react-native';

// import {Constant} from '@/Helpers'

import type { RootStackParamList } from '@/Types/types';
import onboardingScreen from '@/features/Auth/Onboarding/onboardingScreen';
import loginScreen from '@/features/Auth/Login/loginScreen';
import HomeNavigation from './HomeNavigation';

const Stack = createStackNavigator<RootStackParamList>();

export default () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="onboardingScreen" component={onboardingScreen} />
      <Stack.Screen name="loginScreen" component={loginScreen} />
      {/* <Stack.Screen name="Home" component={HomeNavigation} /> */}
    </Stack.Navigator>
  );
};
