import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import AppSeparator from '@/Component/AppSeparator/AppSeparator';
import Colors from '@/Theme/Colors';
import { useHome } from './hooks/useHome';
import {
  Header,
  QuickActions,
  LocationSection,
  TimeInfo,
  DecorativeCircles,
} from './components';

export default function HomeScreen() {
  const {
    timeInfo,
    userInfo,
    locationInfo,
    quickActions,
    handleCheckOut,
    handleMenuPress,
    handleActionPress,
  } = useHome();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <StatusBar
          backgroundColor={Colors.homeScreen.background}
          barStyle="dark-content"
        />
 
        <DecorativeCircles />
 
        <Header
          userInfo={userInfo}
          onMenuPress={handleMenuPress}
        />
 
        <View style={styles.content}>
     
          <QuickActions
            actions={quickActions}
            onActionPress={handleActionPress}
          />
 
          <LocationSection
            location={locationInfo.address}
            onCheckOut={handleCheckOut}
          />

     
          <TimeInfo
            checkIn={timeInfo.checkIn}
            checkOut={timeInfo.checkOut}
            workingHours={timeInfo.workingHours}
          />

          <AppSeparator size={30} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.homeScreen.background,
  },

  container: {
    flex: 1,
    backgroundColor: Colors.homeScreen.background,
  },

  content: {
    flex: 1,
    backgroundColor: Colors.homeScreen.contentBackground,
    marginTop: 20,
    borderTopRightRadius: 200,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});