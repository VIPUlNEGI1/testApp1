import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  interpolate,
} from 'react-native-reanimated';

import Colors from '@/Theme/Colors';
import Fonts from '@/Theme/Fonts';
import { scale } from '@/Helpers/Responsive';

interface ProfileHeaderProps {
  name: string;
  email: string;
  plan: string;
  initials: string;
}

const stats = [
  { value: '12', label: 'Questions' },
  { value: '07', label: 'Solved' },
  { value: '09', label: 'Saved' },
];

export default function ProfileHeader({
  name,
  email,
  plan,
  initials,
}: ProfileHeaderProps) {
 
  useEffect(() => {
   
  }, []);
 
 

  return (
    <LinearGradient
      colors={['#050816', '#08152F', '#0D234D']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      {/* Glow Circle */}
      <View style={styles.glowTop} />
      <View style={styles.glowBottom} />

      {/* Profile Card */}
      <Animated.View style={[styles.profileCard, ]}>
        <LinearGradient
          colors={['rgba(255,255,255,0.08)', 'rgba(255,255,255,0.03)']}
          style={styles.cardOverlay}
        >
          <View style={styles.avatar}>
            <LinearGradient
              colors={['#1A7BFF', '#0057FF']}
              style={styles.avatarGradient}
            >
              <Text style={styles.initials}>
                {initials}
              </Text>
            </LinearGradient>

            <View style={styles.onlineDot} />
          </View>

          <View style={styles.body}>
           <View style={styles.row}> 
            <Text numberOfLines={1} style={styles.name}>
              {name}
            </Text>
               <View style={styles.planBadge}>
                <Text style={styles.planText}>
                  {plan}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
            <Text numberOfLines={1} style={styles.email}>
              {email}
            </Text>
                
              <Text style={styles.streak}>
                🔥 5 day streak
              </Text>

            </View>
          </View>
        </LinearGradient>
      {/* Stats */}
      <Animated.View style={[styles.statsContainer,]}>
        {stats.map((item, index) => (
          <View key={item.label} style={styles.statCard}>
            <Text style={styles.value}>
              {item.value}
            </Text>

            <Text style={styles.label}>
              {item.label}
            </Text>
          </View>
        ))}
      </Animated.View>
      </Animated.View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: scale(30),
    paddingBottom: scale(20),
    paddingHorizontal: scale(10),
    overflow: 'hidden',
  },

  glowTop: {
    position: 'absolute',
    width: 180,
    height: 180,
    borderRadius: 220,
    backgroundColor: 'rgba(0, 123, 255, 0.11)',
    top: -80,
    right: -60,
  },

  glowBottom: {
    position: 'absolute',
    width: 180,
    height: 180,
    borderRadius: 180,
    backgroundColor: 'rgba(0,255,255,0.08)',
    bottom: -70,
    left: -50,
  },

  profileCard: {
    borderRadius: scale(20),
    overflow: 'hidden',
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.28)',
  },

  cardOverlay: {
    flexDirection: 'row',
    padding: scale(10),
  },

  avatar: {
    marginRight: scale(18),
  },

  avatarGradient: {
    width: scale(68),
    height: scale(68),
    borderRadius: scale(20),
    alignItems: 'center',
    justifyContent: 'center',
  },

  onlineDot: {
    width: scale(18),
    height: scale(18),
    borderRadius: 20,
    backgroundColor: '#00D26A',
    position: 'absolute',
    right: 2,
    bottom: 2,
    borderWidth: 3,
    borderColor: '#0B1833',
  },

  initials: {
    color: '#fff',
    fontSize: scale(20),
    fontWeight: '900',
  },

  body: {
    flex: 1,
    justifyContent: 'center',
  },

  greeting: {
    color: 'rgba(255,255,255,0.65)',
    fontSize: scale(12),
    fontFamily: Fonts.ThemeMedium,
  },

  name: {
    color: '#fff',
    fontSize: scale(20),
    fontFamily: Fonts.ThemeBold,
    marginTop: scale(4),
  },

  email: {
    color: 'rgba(255,255,255,0.45)',
    fontSize: scale(13),
    marginTop: scale(4),
    fontFamily: Fonts.ThemeRegular,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(5),
    justifyContent: 'space-between',
  },

  planBadge: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingHorizontal: scale(14),
    paddingVertical: scale(7),
    borderRadius: scale(18),
  },

  planText: {
    color: '#fff',
    fontSize: scale(11),
    fontWeight: '900',
  },

  streak: {
    color: '#FFB020',
    fontSize: scale(13),
    fontFamily: Fonts.ThemeBold,
  },

  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: scale(10),
    marginBottom: scale(10),
  },

  statCard: {
    width: scale(100),
    height: scale(70),
    borderRadius: scale(13),
    backgroundColor: 'rgba(255,255,255,0.08)',
    paddingVertical: scale(10),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },

  value: {
    color: '#fff',
    fontSize: scale(25),
    fontWeight: '900',
  },

  label: {
    marginTop: scale(4),
    color: 'rgba(255,255,255,0.6)',
    fontSize: scale(13),
    fontFamily: Fonts.ThemeMedium,
  },
});