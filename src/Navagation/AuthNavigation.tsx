import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import type { RootStackParamList } from '@/Types/types';
import loginScreen from '@/features/Auth/Login/loginScreen';
const Stack = createStackNavigator<RootStackParamList>();

export default () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="loginScreen" component={loginScreen} />
    </Stack.Navigator>
  );
};
