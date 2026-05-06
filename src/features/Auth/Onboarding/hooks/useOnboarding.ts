import SVGByteCode from '@/Helper/SVGByteCode'
import { useRef, useEffect, useState } from 'react'
import { Animated } from 'react-native'
import { SvgUri } from 'react-native-svg'

export interface OnboardingStep {
  title: string
  subtitle: string
  svg: string
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
]

export const useOnboarding = () => {
  const [step, setStep] = useState(0)
  const floatAnim = useRef(new Animated.Value(0)).current
  const glowAnim = useRef(new Animated.Value(0)).current

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
      ])
    ).start()

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
      ])
    ).start()
  }, [])

  const next = () => {
    if (step < onboardingSteps.length - 1) {
      setStep(step + 1)
    }
  }

  const skip = () => {
    setStep(onboardingSteps.length - 1)
  }

  const currentStepData = onboardingSteps[step]

  return {
    step,
    setStep,
    next,
    skip,
    currentStepData,
    floatAnim,
    glowAnim,
    onboardingSteps,
  }
}
