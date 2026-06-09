import React from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';
import Colors from '@/Theme/Colors';
import { useAttendanceScreen } from './hooks/useAttendanceScreen';
import {
  AttendanceHeader,
  CalendarView,
  CalendarLegend,
  AttendanceModal,
} from './components';

export default function AttendanceScreen() {
  const {
    selectedDate,
    showModal,
    currentMonth,
    attendances,
    attendanceMap,
    loading,
    error,
    calendarDays,
    selectedEntry,
    monthLabel,
    handleDayPress,
    handleCloseModal,
    handleChangeMonth,
  } = useAttendanceScreen();

  return (
    <>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <AttendanceHeader
          loading={loading}
          attendanceCount={attendances.length}
        />
 
        <CalendarView
          monthLabel={monthLabel}
          calendarDays={calendarDays}
          attendanceMap={attendanceMap}
          selectedDate={selectedDate}
          loading={loading}
          error={error}
          onDayPress={handleDayPress}
          onMonthChange={handleChangeMonth}
        />
 
        <CalendarLegend />
      </ScrollView>
 
      <AttendanceModal
        visible={showModal}
        selectedDate={selectedDate}
        selectedEntry={selectedEntry}
        onClose={handleCloseModal}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.attendanceScreen.background,
    padding: 16,
  },
});