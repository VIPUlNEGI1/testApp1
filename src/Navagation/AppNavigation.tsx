import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AuthNavigation from './AuthNavigation';
import HomeNavigation from './HomeNavigation';
import { RootStackParamList } from '@/Types/types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigation() {
  const initialRouteName = 'Home';

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          key={initialRouteName}
          screenOptions={{ headerShown: false }}
          initialRouteName={initialRouteName}>
          <Stack.Screen name="Home" component={HomeNavigation} />
          <Stack.Screen name="Auth" component={AuthNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
