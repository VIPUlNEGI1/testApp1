import React from 'react';
import { StyleSheet, View, ScrollView, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import crashlytics from '@react-native-firebase/crashlytics';
import Colors from '@/Theme/Colors';
import { useHomeLogic } from './hooks/useHomeLogic';
import HomeHeader from './components/HomeHeader';
import SummaryCards from './components/SummaryCards';
import QuickSubjects from './components/QuickSubjects';
import LiveClassCard from './components/LiveClassCard';
import ContinueLearning from './components/ContinueLearning';
import AppSeparator from '@/Component/AppSeparator/AppSeparator';
import Button from '@/Component/Button';
import { HomeSkeleton } from '@/skeleton';

export default function HomeScreen() {
  
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<any>();
  const { searchQuery, loading, handleSearch, handleSearchPress, handleCoursePress } = useHomeLogic();

const crashApp = () => {
  console.log("🔥 Crash Button Clicked");

  crashlytics().log('Crash button pressed');

  crashlytics().crash();
};
  if (loading) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={Colors.background} />
        <HomeSkeleton />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
      <HomeHeader
        userName="John Doe"
        greeting="Hello"
        searchQuery={searchQuery}
        onSearchChange={handleSearch}
        onSearchPress={handleSearchPress}
        onNotificationPress={() => navigation.navigate('NotificationScreen')}
        onProfilePress={() => navigation.navigate('Profile')}
        paddingTop={insets.top}
      />
       <View style={styles.container1}> 
       <AppSeparator size={20} />
        <SummaryCards />
        <QuickSubjects />
        <LiveClassCard />
        <AppSeparator size={16} />
        <ContinueLearning />
        <AppSeparator size={24} />
        <Button
          title="Crash Test"
          onPress={crashApp}
          variant="outline"
          color={Colors.error}
          textColor={Colors.error}
          style={styles.crashButton}
        />
        <AppSeparator size={40} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  content: {
    flex: 1,
    // paddingHorizontal: 20,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  errorText: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: 8,
  },
  errorSubtext: {
    fontSize: 14,
    color: Colors.textMuted,
    textAlign: 'center',
  },
  crashButton: {
    marginTop: 8,
    borderColor: Colors.error,
  },
});
