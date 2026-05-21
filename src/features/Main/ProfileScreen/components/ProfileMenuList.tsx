import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Colors from '@/Theme/Colors';
import Fonts from '@/Theme/Fonts';
import { scale } from '@/Helpers/Responsive';

const menuItems = [
  { title: 'Notifications', subtitle: 'Push notifications for answers' },
  { title: 'Live Classes', subtitle: 'Upcoming & recorded sessions' },
  { title: 'Assignments', subtitle: 'Pending & submitted work' },
  { title: 'Tests & Results', subtitle: 'Quiz history & performance' },
  { title: 'Help & Support', subtitle: 'FAQ, contact, tutorials' },
  { title: 'Settings', subtitle: 'Manage app preferences' },
];

export default function ProfileMenuList() {
  return (
    <View style={styles.container}>
      {menuItems.map(item => (
        <Pressable
          key={item.title}
          style={({ pressed }) => [styles.item, pressed && styles.itemPressed]}
          onPress={() => null}
          android_ripple={{ color: '#00000010' }}
        >
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>
          <Text style={styles.arrow}>›</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: scale(8),
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    borderRadius: scale(24),
    paddingVertical: scale(18),
    paddingHorizontal: scale(18),
    marginBottom: scale(12),
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  itemPressed: {
    opacity: 0.85,
  },
  title: {
    color: Colors.darkGray,
    fontSize: scale(14),
    fontFamily: Fonts.ThemeSemiBold,
  },
  subtitle: {
    marginTop: scale(4),
    color: Colors.textMuted,
    fontSize: scale(12),
    fontFamily: Fonts.ThemeRegular,
  },
  arrow: {
    color: Colors.textMuted,
    fontSize: scale(20),
    fontFamily: Fonts.ThemeBold,
  },
});
