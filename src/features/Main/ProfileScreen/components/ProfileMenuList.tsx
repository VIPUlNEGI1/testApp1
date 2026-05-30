import React from 'react';
import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Fonts from '@/Theme/Fonts';
import { scale } from '@/Helpers/Responsive';
import AppSeparator from '@/Component/AppSeparator/AppSeparator';

const menuItems = [
  {
    title: 'Notifications',
    subtitle: 'Push Notifications For Answers',
    icon: '🔔',
  },
  {
    title: 'Live Classes',
    subtitle: 'Upcoming & recorded sessions',
    icon: '📅',
  },
  {
    title: 'Assignments',
    subtitle: 'Pending & submitted work',
    icon: '📄',
  },
  {
    title: 'Tests & Results',
    subtitle: 'Quiz history & performance',
    icon: '🖥',
  },
  {
    title: 'Help & Support',
    subtitle: 'FAQ, Contact, Tutorials',
    icon: '❔',
  },
  {
    title: 'Settings',
    subtitle: 'App Preferences & Privacy',
    icon: '⚙',
  },
];
 

export default function RenderProfileMenuList() {
  const navigation = useNavigation<any>();

  const handleMenuPress = (item: typeof menuItems[0]) => {
    if (item.title === 'Notifications') {
      navigation.navigate('NotificationScreen');
    }
  };

  const renderMenuItem = (item: typeof menuItems[0], index: number) => {
    return (
      <Pressable key={index} style={styles.item} onPress={() => handleMenuPress(item)}>
        <View style={styles.leftSection}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>{item.icon}</Text>
          </View>

          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>
        </View>

        <Text style={styles.arrow}>›</Text>
      </Pressable>
    );
  };

  return (
    <View  >
      <View style={styles.container}>
       <FlatList
        data={menuItems}
        renderItem={({ item, index }) => renderMenuItem(item, index)}
        keyExtractor={(_, index) => index.toString()}
        scrollEnabled={false}
      />
      </View>
      <AppSeparator size={20} />
      <Pressable  style={styles.item1}>
        <View style={styles.leftSection}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>🚪</Text>
          </View>

          <View>
            <Text style={styles.title}>Log out</Text>
            <Text style={styles.subtitle}>Sign out of your account</Text>
          </View>
        </View>

        <Text style={styles.arrow}>›</Text>
      </Pressable>
      <AppSeparator size={20} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: scale(6),
    borderRadius: scale(18),
    backgroundColor: '#fff'
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',


    paddingVertical: scale(20),
    paddingHorizontal: scale(18),

    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
  },

  item1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: scale(20),
    paddingHorizontal: scale(18),
    borderRadius: scale(18),
    backgroundColor: '#fff'
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconContainer: {
    width: scale(44),
    height: scale(44),
    borderRadius: scale(14),

    backgroundColor: '#F3F4F8',

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: scale(14),
  },

  icon: {
    fontSize: scale(18),
  },

  title: {
    color: '#1B1E28',
    fontSize: scale(17),
    fontFamily: Fonts.ThemeBold,
  },

  subtitle: {
    marginTop: scale(4),
    color: '#9AA3B2',
    fontSize: scale(13),
    fontFamily: Fonts.ThemeRegular,
  },

  arrow: {
    fontSize: scale(26),
    color: '#D1D5DB',
  },
});