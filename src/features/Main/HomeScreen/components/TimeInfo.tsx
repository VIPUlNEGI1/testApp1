import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Colors from '@/Theme/Colors';

interface TimeInfoProps {
  checkIn: string;
  checkOut: string;
  workingHours: string;
}

const TimeInfo: React.FC<TimeInfoProps> = ({
  checkIn,
  checkOut,
  workingHours,
}) => {
  return (
    <View style={styles.timeContainer}>
 
      <View style={styles.timeBox}>
        <Svg width={20} height={20} viewBox="0 0 16 16">
          <Path
            fill={Colors.homeScreen.checkInIcon}
            d="M9.72 1.22v1.45a5.6 5.6 0 0 1 3.82 4.63H12v1.4h1.55a5.6 5.6 0 0 1-4.85 4.85V12H7.3v1.55A5.6 5.6 0 0 1 2.45 8.7H4V7.3H2.45a5.6 5.6 0 0 1 4.87-4.85V8h1.4V0H1v1.4h4.68a7 7 0 1 0 4-.18Z"
          />
        </Svg>
        <Text style={styles.timeText}>{checkIn}</Text>
      </View>
 
      <View style={styles.timeBox}>
        <Svg width={20} height={20} viewBox="0 0 15 15">
          <Path
            d="m13.5 7.5-3 3.25m3-3.25-3-3m3 3H4m4 6H1.5v-12H8"
            stroke={Colors.homeScreen.checkOutIcon}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
        <Text style={[styles.timeText, { color: Colors.homeScreen.checkOutIcon }]}>
          {checkOut}
        </Text>
      </View>
 
      <View style={styles.timeBox}>
        <Svg width={20} height={20} viewBox="0 0 52 52">
          <Path
            fill={Colors.homeScreen.workingHoursIcon}
            d="M21 48.5v-3c0-.8-.7-1.5-1.5-1.5h-10c-.8 0-1.5-.7-1.5-1.5v-33C8 8.7 8.7 8 9.5 8h10c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5H6C3.8 2 2 3.8 2 6v40c0 2.2 1.8 4 4 4h13.5c.8 0 1.5-.7 1.5-1.5"
          />
          <Path
            fill={Colors.homeScreen.workingHoursIcon}
            d="M49.6 27c.6-.6.6-1.5 0-2.1L36.1 11.4c-.6-.6-1.5-.6-2.1 0l-2.1 2.1c-.6.6-.6 1.5 0 2.1l5.6 5.6c.6.6.2 1.7-.7 1.7H15.5c-.8 0-1.5.6-1.5 1.4v3c0 .8.7 1.6 1.5 1.6h21.2c.9 0 1.3 1.1.7 1.7l-5.6 5.6c-.6.6-.6 1.5 0 2.1l2.1 2.1c.6.6 1.5.6 2.1 0z"
          />
        </Svg>
        <Text style={styles.timeText}>{workingHours}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 35,
    paddingHorizontal: 20,
  },

  timeBox: {
    alignItems: 'center',
  },

  timeText: {
    marginTop: 8,
    fontWeight: '600',
    color: Colors.homeScreen.timeLabel,
    fontSize: 14,
  },
});

export default TimeInfo;
