import SVGByteCode from '@/Helpers/SVGByteCode';
import { useRef, useEffect, useState } from 'react';
import { Animated } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@/Types/types';

type OnboardingScreenNavigationProp = NavigationProp<RootStackParamList, 'onboardingScreen'>;

export interface OnboardingStep {
  title: string;
  subtitle: string;
  svg: string;
}

export const onboardingSteps: OnboardingStep[] = [
  {
    title: 'Learn Smarter,\nNot Harder',
    subtitle: 'Expert-verified solutions across all subjects, anytime.',
    svg: SVGByteCode.Book,
  },
  {
    title: 'Study Anytime',
    subtitle: 'Flexible learning that adapts to your schedule.',
    svg: SVGByteCode.Video,
  },
  {
    title: 'Track Progress',
    subtitle: 'Stay motivated with insights & achievements.',
    svg: SVGByteCode.Traker,
  },
];

export const useOnboarding = () => {
  const [step, setStep] = useState(0);
  const floatAnim = useRef(new Animated.Value(0)).current;
  const glowAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Floating animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: -12,
          duration: 1800,
          useNativeDriver: true,
        }),
        Animated.timing(floatAnim, {
          toValue: 0,
          duration: 1800,
          useNativeDriver: true,
        }),
      ]),
    ).start();

    // Glow pulse animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnim, {
          toValue: 1,
          duration: 1200,
          useNativeDriver: false,
        }),
        Animated.timing(glowAnim, {
          toValue: 0,
          duration: 1200,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  }, []);

  const animateStepChange = (newStep: number) => {
    // Fade out and slide left
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: -30,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Change step
      setStep(newStep);

      // Fade in and slide right
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    });
  };

  const next = () => {
    if (step < onboardingSteps.length - 1) {
      animateStepChange(step + 1);
    }
  };

  const skip = () => {
    animateStepChange(onboardingSteps.length - 1);
  };
  const handleGetStarted = (navigation: OnboardingScreenNavigationProp) => {
    if (step === onboardingSteps.length - 1) {
      navigation.navigate('loginScreen');
    } else {
      next();
    }
  };
  const currentStepData = onboardingSteps[step];

  return {
    step,
    setStep,
    next,
    skip,
    currentStepData,
    floatAnim,
    glowAnim,
    fadeAnim,
    slideAnim,
    onboardingSteps,
    handleGetStarted,
  };
};
