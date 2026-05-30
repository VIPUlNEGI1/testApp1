import React from 'react';

import {
  View,
  FlatList,
  StatusBar,
  RefreshControl,
  StyleSheet,
} from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Colors from '@/Theme/Colors';

import { scale } from '@/Helpers/Responsive';

import AppSeparator from '@/Component/AppSeparator/AppSeparator';
import { useNotifications } from './NotificationData';
import NotificationCard from './Components/NotifactionCard';
import NotificationHeader from './Components/NotifactionHeader';

 
export default function NotificationScreen({
  navigation,
}: any) {
  const insets = useSafeAreaInsets();

  const {
    notifications,
    refreshing,
    unreadCount,

    handleDelete,
    handleRefresh,
    handleMarkAllRead,
    handleMarkAsRead,
  } = useNotifications();

  return (
    <View style={styles.page}>
     <AppSeparator size={20} />
      <NotificationHeader
        unreadCount={unreadCount}
        onBack={() => navigation.goBack()}
        onMarkAllRead={handleMarkAllRead}
      />
      <FlatList
        data={notifications}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <NotificationCard
            item={item}
            onRead={handleMarkAsRead}
            onDelete={handleDelete}
          />
        )}
        ItemSeparatorComponent={() => (
          <AppSeparator size={5} />
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            tintColor={Colors.blue}
          />
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop:
            insets.top + scale(5),
          paddingBottom:
            insets.bottom + scale(20),
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: scale(16),
  },
});