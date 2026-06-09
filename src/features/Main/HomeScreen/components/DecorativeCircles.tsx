import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import Colors from '@/Theme/Colors';

const DecorativeCircles: React.FC = () => {
  return (
    <>
      <View style={[
        styles.circle,
        styles.circle1,
        { backgroundColor: Colors.homeScreen.backgroundCircle1 }
      ]} />
      <View style={[
        styles.circle,
        styles.circle2,
        { backgroundColor: Colors.homeScreen.backgroundCircle2 }
      ]} />
      <View style={[
        styles.circle,
        styles.circle3,
        { backgroundColor: Colors.homeScreen.backgroundCircle3 }
      ]} />
      <View style={[
        styles.circle,
        styles.circle4,
        { backgroundColor: Colors.homeScreen.backgroundCircle4 }
      ]} />
    </>
  );
};

const styles = StyleSheet.create({
  circle: {
    position: 'absolute',
    zIndex: 0,
  },

  circle1: {
    top: 130,
    left: -60,
    width: 250,
    height: 300,
    borderTopLeftRadius: 5,
    borderRadius: 100,
  },

  circle2: {
    top: 135,
    left: -20,
    width: 250,
    height: 550,
    borderRadius: 100,
    borderTopRightRadius: 70,
  },

  circle3: {
    top: 160,
    left: 60,
    width: 250,
    height: 250,
    borderRadius: 100,
  },

  circle4: {
    top: 200,
    left: 100,
    width: 250,
    height: 250,
    borderRadius: 90,
  },
});

export default DecorativeCircles;
