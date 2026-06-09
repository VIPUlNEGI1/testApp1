import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '@/Theme/Colors';

interface AttendanceHeaderProps {
  loading: boolean;
  attendanceCount: number;
}

const AttendanceHeader: React.FC<AttendanceHeaderProps> = ({
  loading,
  attendanceCount,
}) => {
  return (
    <View>
      <Text style={styles.title}>Attendance</Text>

      <Text style={styles.infoText}>
        {loading
          ? 'Loading attendance...'
          : attendanceCount > 0
          ? `${attendanceCount} attendance records found.`
          : 'No attendance records found for this month.'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.attendanceScreen.title,
    marginBottom: 20,
    paddingBottom: 6,
    borderBottomWidth: 3,
    borderBottomColor: Colors.attendanceScreen.primary,
    alignSelf: 'flex-start',
  },

  infoText: {
    color: Colors.attendanceScreen.infoText,
    marginBottom: 12,
    fontSize: 14,
  },
});

export default AttendanceHeader;
