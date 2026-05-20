import 'react-native-reanimated';
import React from 'react';
import { LogBox } from 'react-native';

import AppNavigation from './src/Navagation/AppNavigation';
import { PaperProvider } from 'react-native-paper';
LogBox.ignoreAllLogs();
export default function Apxp() {
  return (
      <PaperProvider>
        <AppNavigation />
      </PaperProvider>
 );
}
