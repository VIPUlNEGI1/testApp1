import { useEffect, useMemo, useState, useCallback } from 'react';
import useAttendance, { Attendance } from '@/hooks/useAttendance';

interface CalendarDay {
  date: Date;
  dateString: string;
  day: number;
  isCurrentMonth: boolean;
}

interface UseAttendanceScreenReturn {
  selectedDate: string;
  showModal: boolean;
  currentMonth: Date;
  attendances: Attendance[];
  attendanceMap: Record<string, Attendance>;
  loading: boolean;
  error: string | null;
  calendarDays: CalendarDay[];
  selectedEntry: Attendance | undefined;
  monthLabel: string;
  handleDayPress: (dateString: string) => void;
  handleCloseModal: () => void;
  handleChangeMonth: (offset: number) => void;
}

const DEFAULT_USER_ID = '177';

const getMonthRange = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const firstDay = `${year}-${String(month).padStart(2, '0')}-01`;
  const lastDay = new Date(year, month, 0).getDate();
  return {
    fromDate: firstDay,
    toDate: `${year}-${String(month).padStart(2, '0')}-${String(lastDay).padStart(2, '0')}`,
  };
};

const getMonthLabel = (date: Date) => {
  return date.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });
};

const buildCalendarDays = (date: Date): CalendarDay[] => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const startDay = firstDay.getDay();
  const startDate = new Date(year, month, 1 - startDay);

  return Array.from({ length: 42 }, (_, index) => {
    const current = new Date(startDate);
    current.setDate(startDate.getDate() + index);
    const dateString = `${current.getFullYear()}-${`${current.getMonth() + 1}`.padStart(
      2,
      '0',
    )}-${`${current.getDate()}`.padStart(2, '0')}`;
    return {
      date: current,
      dateString,
      day: current.getDate(),
      isCurrentMonth: current.getMonth() === month,
    };
  });
};

export const useAttendanceScreen = (): UseAttendanceScreenReturn => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [showModal, setShowModal] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 4, 1));

  const monthRange = useMemo(() => getMonthRange(currentMonth), [currentMonth]);

  const { attendances, loading, error } = useAttendance({
    userId: DEFAULT_USER_ID,
    fromDate: monthRange.fromDate,
    toDate: monthRange.toDate,
  });

  const attendanceMap = useMemo(() => {
    return attendances.reduce<Record<string, Attendance>>((acc, item) => {
      if (item.dateKey) {
        acc[item.dateKey] = item;
      }
      return acc;
    }, {});
  }, [attendances]);

  useEffect(() => {
    if (attendances.length === 0 || selectedDate) {
      return;
    }
    setSelectedDate(attendances[0].dateKey);
  }, [attendances, selectedDate]);

  const handleDayPress = useCallback((dateString: string) => {
    setSelectedDate(dateString);
    setShowModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const handleChangeMonth = useCallback((offset: number) => {
    const nextMonth = new Date(currentMonth);
    nextMonth.setMonth(nextMonth.getMonth() + offset);
    nextMonth.setDate(1);
    setCurrentMonth(nextMonth);
  }, [currentMonth]);

  const calendarDays = buildCalendarDays(currentMonth);
  const selectedEntry = attendanceMap[selectedDate];

  return {
    selectedDate,
    showModal,
    currentMonth,
    attendances,
    attendanceMap,
    loading,
    error: typeof error === 'string' ? error : null,
    calendarDays,
    selectedEntry,
    monthLabel: getMonthLabel(currentMonth),
    handleDayPress,
    handleCloseModal,
    handleChangeMonth,
  };
};
