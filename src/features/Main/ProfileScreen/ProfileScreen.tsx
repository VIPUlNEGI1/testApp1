import React from 'react';
import { View, ScrollView, StatusBar, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Colors from '@/Theme/Colors';
import { scale } from '@/Helpers/Responsive';
import AppSeparator from '@/Component/AppSeparator/AppSeparator';
import ProfileHeader from './components/ProfileHeader';
// import ProfileStats from './components/ProfileStats';
import UpgradeBanner from './components/UpgradeBanner';
import ProfileMenuList from './components/ProfileMenuList';

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.page}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
       <ProfileHeader
  name="Vipul Negi"
  email="vipul@gmail.com"
  plan="Premium Member"
  initials="VN"
/>
      <View  style={[styles.container, { paddingTop: insets.top + scale(18) }]}> 
        <AppSeparator size={20} />

        {/* <ProfileStats /> */}

        <AppSeparator size={20} />

        <UpgradeBanner />

        <AppSeparator size={20} />

        <ProfileMenuList />
    </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    // backgroundColor: Colors.background,
  },
  container: {
    paddingHorizontal: scale(10),
    paddingBottom: scale(30),
  },
});
