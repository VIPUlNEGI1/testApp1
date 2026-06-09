import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Colors from '@/Theme/Colors';
import { Attendance } from '@/hooks/useAttendance';

interface CalendarDay {
  date: Date;
  dateString: string;
  day: number;
  isCurrentMonth: boolean;
}

interface CalendarViewProps {
  monthLabel: string;
  calendarDays: CalendarDay[];
  attendanceMap: Record<string, Attendance>;
  selectedDate: string;
  loading: boolean;
  error: string | null;
  onDayPress: (dateString: string) => void;
  onMonthChange: (offset: number) => void;
}

const CalendarView: React.FC<CalendarViewProps> = ({
  monthLabel,
  calendarDays,
  attendanceMap,
  selectedDate,
  loading,
  error,
  onDayPress,
  onMonthChange,
}) => {
  const renderDayCell = (day: CalendarDay) => {
    const entry = attendanceMap[day.dateString];
    const isSelected = day.dateString === selectedDate;
    const hasEntry = !!entry;
    const isPresent = !!entry?.inTime || !!entry?.outTime;
    const isAbsent = hasEntry && !isPresent;

    return (
      <TouchableOpacity
        key={day.dateString}
        activeOpacity={0.7}
        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        style={[
          styles.dayWrapper,
          day.isCurrentMonth ? null : styles.notCurrentMonth,
          day.isCurrentMonth && isPresent && !isSelected && styles.presentDay,
          day.isCurrentMonth && isAbsent && !isSelected && styles.absentDay,
          isSelected && styles.selectedDay,
        ]}
        onPress={() => onDayPress(day.dateString)}
      >
        <Text
          style={[
            styles.dayText,
            !day.isCurrentMonth && styles.disabledDayText,
            isSelected && styles.selectedDayText,
          ]}
        >
          {day.day}
        </Text>
        {entry ? (
          <View style={styles.dayLabelContainer}>
            <Text
              style={[
                styles.dayLabel,
                isSelected && styles.selectedDayText,
              ]}
            >
              {entry.inTime ? entry.inTime.replace(/\s.*$/, '') : 'A'}
            </Text>
          </View>
        ) : null}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.calendarCard}>
      <View style={styles.monthHeaderCard}>
        <TouchableOpacity
          style={styles.monthButton}
          onPress={() => onMonthChange(-1)}
        >
          <Text style={styles.monthButtonText}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.monthHeaderTitle}>{monthLabel}</Text>

        <TouchableOpacity
          style={styles.monthButton}
          onPress={() => onMonthChange(1)}
        >
          <Text style={styles.monthButtonText}>›</Text>
        </TouchableOpacity>
      </View>


      {(loading || error) && (
        <View style={styles.statusMessage}>
          {loading ? (
            <>
              <ActivityIndicator
                size="small"
                color={Colors.attendanceScreen.primary}
              />
              <Text style={styles.statusTextLabel}>Loading attendance...</Text>
            </>
          ) : (
            <Text style={styles.errorText}>{error}</Text>
          )}
        </View>
      )}

  
      <View style={styles.weekdaysRow}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
          <View
            key={day}
            style={[
              styles.weekdayItem,
              index === 0 && styles.weekdaySundayItem,
            ]}
          >
            <Text
              style={[
                styles.weekdayText,
                index === 0 && styles.weekdaySundayText,
              ]}
            >
              {day}
            </Text>
          </View>
        ))}
      </View>
 
      <View style={styles.calendarGrid}>
        {calendarDays.map((day) => renderDayCell(day))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  calendarCard: {
    backgroundColor: Colors.attendanceScreen.cardBackground,
    borderRadius: 24,
    padding: 16,
  },

  monthHeaderCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.attendanceScreen.calendarHeaderBackground,
    borderRadius: 18,
    padding: 12,
    marginBottom: 14,
  },

  monthButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: Colors.attendanceScreen.monthButtonBackground,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.attendanceScreen.shadowColor,
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },

  monthButtonText: {
    fontSize: 20,
    color: Colors.attendanceScreen.monthButtonText,
  },

  monthHeaderTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.attendanceScreen.monthHeaderTitle,
  },

  statusMessage: {
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  statusTextLabel: {
    marginLeft: 8,
    color: Colors.attendanceScreen.textSecondary,
  },

  errorText: {
    color: Colors.attendanceScreen.errorText,
    fontWeight: '600',
  },

  weekdaysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  weekdayItem: {
    width: '13.5%',
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: Colors.attendanceScreen.weekdayBackground,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 1,
  },

  weekdaySundayItem: {
    backgroundColor: Colors.attendanceScreen.sundayBackground,
  },

  weekdayText: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.attendanceScreen.weekdayText,
  },

  weekdaySundayText: {
    color: Colors.attendanceScreen.sundayText,
  },

  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  dayWrapper: {
    width: '14.28%',
    minHeight: 62,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginBottom: 10,
    marginHorizontal: 2,
    backgroundColor: Colors.attendanceScreen.cardBackground,
  },

  notCurrentMonth: {
    opacity: 0.25,
  },

  selectedDay: {
    backgroundColor: Colors.attendanceScreen.daySelectedBackground,
  },

  presentDay: {
    backgroundColor: Colors.attendanceScreen.dayPresentBackground,
  },

  absentDay: {
    backgroundColor: Colors.attendanceScreen.dayAbsentBackground,
  },

  dayText: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.attendanceScreen.dayText,
  },

  selectedDayText: {
    color: Colors.attendanceScreen.daySelectedText,
  },

  dayLabelContainer: {
    marginTop: 4,
    borderRadius: 8,
    minHeight: 16,
  },

  dayLabel: {
    marginTop: 4,
    fontSize: 10,
    fontWeight: '700',
    color: Colors.attendanceScreen.dayText,
    textAlign: 'center',
  },

  disabledDayText: {
    color: Colors.attendanceScreen.dayDisabledText,
  },
});

export default CalendarView;
