import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Animated, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useOnboarding } from '@/features/Auth/Onboarding/hooks/useOnboarding';
import Colors from '@/Theme/Colors';
import { SvgFromXml } from 'react-native-svg';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@/Types/types';

import SVGByteCode from '@/Helpers/SVGByteCode';

export default function OnboardingScreen({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList, 'onboardingScreen'>;
}) {
  const insets = useSafeAreaInsets();
  const {
    step,
    next,
    skip,
    handleGetStarted,
    currentStepData,
    floatAnim,
    glowAnim,
    fadeAnim,
    slideAnim,
    onboardingSteps,
  } = useOnboarding();

  return (
    <LinearGradient
      colors={Colors.primaryGradient}
      style={[styles.container, { paddingTop: insets.top }]}
    >
      {/* HEADER */}

      <View style={styles.header}>
        <View style={styles.logoBox}>
          <LinearGradient
            colors={['#60A5FA', '#3B82F6', '#1D4ED8']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.logoGlow}
          >
            <SvgFromXml xml={SVGByteCode.Book} width={25} height={25} />
          </LinearGradient>
        </View>
        <Text style={styles.brand}>NexEduHub</Text>
      </View>

      {/* BACKGROUND GLOW */}
      <View style={styles.topGlow} />
      <View style={styles.bottomGlow} />

      <ScrollView contentContainerStyle={styles.content}>
        {/* FLOATING ICON */}
        <Animated.View
          style={{
            transform: [{ translateY: floatAnim }],
            opacity: fadeAnim,
          }}
        >
          <View style={styles.iconWrapper}>
            <LinearGradient colors={Colors.iconGradient} style={styles.iconInner}>
              <SvgFromXml xml={onboardingSteps[step].svg} width={45} height={45} />
            </LinearGradient>
          </View>
        </Animated.View>

        {/* TEXT */}
        <Animated.View
          style={{
            opacity: fadeAnim,
            transform: [{ translateX: slideAnim }],
          }}
        >
          <Text style={styles.title}>{onboardingSteps[step].title}</Text>

          <Text style={styles.subtitle}>{onboardingSteps[step].subtitle}</Text>
          <View style={styles.stepper}>
            {onboardingSteps.map((_, i) => (
              <View key={i} style={[styles.dot, i === step && styles.activeDot]} />
            ))}
          </View>
        </Animated.View>
      </ScrollView>
      <View style={[styles.footer, { paddingBottom: insets.bottom + 10 }]}>
        <Animated.View
          style={[
            styles.buttonGlow,
            {
              shadowOpacity: glowAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0.4, 1],
              }),
            },
          ]}
        >
          <LinearGradient colors={Colors.buttonGradient} style={{ borderRadius: 30 }}>
            <TouchableOpacity style={styles.button} onPress={() => handleGetStarted(navigation)}>
              <Text style={styles.buttonText}>
                {step === onboardingSteps.length - 1 ? 'Get Started' : 'Continue'}
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </Animated.View>

        <TouchableOpacity onPress={skip}>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },

  logoBox: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: Colors.brand,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,

    shadowColor: Colors.shadow,
    shadowOpacity: 0.9,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 0 },
    elevation: 10,
  },

  logoIcon: {
    fontSize: 20,
  },

  brand: {
    color: Colors.textSecondary,
    fontSize: 20,
    marginLeft: 5,
    fontWeight: '800',

    textShadowColor: Colors.shadow,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },

  content: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },

  topGlow: {
    position: 'absolute',
    width: 350,
    height: 350,
    backgroundColor: Colors.glowTop,
    borderRadius: 350,
    opacity: 0.4,
    top: -120,
    left: -120,
  },

  bottomGlow: {
    position: 'absolute',
    width: 300,
    height: 300,
    backgroundColor: Colors.glowBottom,
    borderRadius: 300,
    opacity: 0.35,
    bottom: -100,
    right: -100,
  },

  iconWrapper: {
    padding: 25,
    borderRadius: 35,
    backgroundColor: 'rgba(66, 64, 72, 0.38)',
    marginBottom: 40,

    shadowColor: Colors.shadow,
    shadowOpacity: 0.9,
    shadowRadius: 25,
    shadowOffset: { width: 0, height: 0 },
    elevation: 15,
  },

  iconInner: {
    width: 90,
    height: 90,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },

  icon: {
    fontSize: 36,
    color: Colors.white,
  },

  title: {
    fontSize: 32,
    fontWeight: '900',
    color: Colors.textPrimary,
    textAlign: 'center',

    textShadowColor: Colors.textShadow,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 19,
  },

  subtitle: {
    fontSize: 16,
    color: Colors.textMuted,
    textAlign: 'center',
    marginTop: 12,
    lineHeight: 22,

    textShadowColor: Colors.brand,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },

  stepper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.mediumGray,
    marginHorizontal: 4,
  },

  activeDot: {
    width: 30,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.brandLightI,

    shadowColor: Colors.shadowBlue,
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    elevation: 6,
  },

  footer: {
    paddingHorizontal: 20,
    rowGap: 15,
    marginBottom: 20,
  },

  buttonGlow: {
    borderRadius: 35,
    padding: 3,
    backgroundColor: 'rgba(37, 99, 235, 0.2)',
    shadowColor: Colors.shadowBlue,
    shadowOpacity: 1,
    shadowRadius: 25,
    shadowOffset: { width: 0, height: 0 },
    elevation: 15,
  },

  button: {
    backgroundColor: Colors.brand,
    paddingVertical: 18,
    borderRadius: 35,
    alignItems: 'center',
  },

  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '700',

    textShadowColor: Colors.brandLight,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 2,
  },

  skip: {
    color: Colors.textMuted,
    textAlign: 'center',
    fontSize: 15,
    marginTop: 14,
  },

  headerGlow: {
    borderRadius: 20,
    padding: 3,
    backgroundColor: 'rgba(37, 99, 235, 0.15)',
    shadowColor: Colors.shadowBlue,
    shadowOpacity: 0.8,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 4 },
    elevation: 12,
    marginHorizontal: 20,
  },

  logoGlow: {
    width: 50,
    height: 50,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.shadowBlue,
    shadowOpacity: 0.6,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 8 },
    elevation: 10,
  },
});
