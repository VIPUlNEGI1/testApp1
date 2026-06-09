import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '@/Theme/Colors';

const CalendarLegend: React.FC = () => {
  return (
    <View style={styles.legendRow}>
      <View style={styles.legendItem}>
        <View style={[styles.legendDot, { backgroundColor: Colors.attendanceScreen.legendPresentDot }]} />
        <Text style={styles.legendText}>Present</Text>
      </View>

      <View style={styles.legendItem}>
        <View style={[styles.legendDot, { backgroundColor: Colors.attendanceScreen.legendAbsentDot }]} />
        <Text style={styles.legendText}>Absent</Text>
      </View>

      <View style={styles.legendItem}>
        <View style={[styles.legendDot, { backgroundColor: Colors.attendanceScreen.legendSelectedDot }]} />
        <Text style={styles.legendText}>Selected</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  legendRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },

  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },

  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 5,
  },

  legendText: {
    color: Colors.attendanceScreen.text,
    fontSize: 13,
  },
});

export default CalendarLegend;
