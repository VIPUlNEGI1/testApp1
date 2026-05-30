import 'react-native-reanimated';
import React, { useEffect } from 'react';
import { LogBox } from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';

import AppNavigation from './src/Navagation/AppNavigation';
import { PaperProvider } from 'react-native-paper';
 
LogBox.ignoreAllLogs();
export default function Apxp() {
  const testCrash = () => {
    crashlytics().crash();
  };
  useEffect(() => {
    crashlytics().setCrashlyticsCollectionEnabled(true);
    crashlytics().log('Crashlytics initialized');
  }, []);

  return (
      <PaperProvider>
        <AppNavigation />
      </PaperProvider>
 );
}
