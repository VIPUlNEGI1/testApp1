import React from "react";

export type TabType = "Courses" | "Questions" | "Saved";

export const useMyLabiry = () => {
  const [activeTab, setActiveTab] = React.useState<TabType>("Courses");

  const animateTabSwitch = (newTab: TabType, onTabSwitch?: () => void) => {
    // Optional animation logic could go here. Call optional callback, then update state.
    if (onTabSwitch) onTabSwitch();
    setActiveTab(newTab);
  };

  return {
    activeTab,
    setActiveTab,
    animateTabSwitch,
  };
};

import { useRef } from 'react';
import { Animated, Easing } from 'react-native';


export const useTabAnimation = () => {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;

  const animateTabSwitch = (newTab: TabType, onTabSwitch?: () => void) => {
    // Fade out and slide up
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: -20,
        duration: 200,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Switch tab
      if (onTabSwitch) {
        onTabSwitch();
      }

      // Fade in and slide down
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          easing: Easing.bezier(0.4, 0, 0.2, 1),
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          easing: Easing.bezier(0.4, 0, 0.2, 1),
          useNativeDriver: true,
        }),
      ]).start();
    });
  };

  const animatedStyle = {
    opacity: fadeAnim,
    transform: [{ translateY: slideAnim }],
  };

  return {
    fadeAnim,
    slideAnim,
    animateTabSwitch,
    animatedStyle,
  };
};
