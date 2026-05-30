import { useCallback, useMemo, useState } from 'react';

 
import {
  deleteNotification,
  getUnreadCount,
  markAllAsRead,
  markAsRead,
} from './UTILS/notifaction';
import { Notification } from './NotificationTypes';

export const initialNotifications: Notification[] = [
{
  id: '1',
  title: 'Live class starting in 15 min',
  subtitle: 'Calculus — Limits • Batch A',
  time: 'Just now',
  icon: '🎥',
  badgeColor: '#FFEDD5',
  read: false,
  type: 'live_class',
},
{
  id: '2',
  title: 'Test result available',
  subtitle: 'You scored 82% on Algebra Quiz 1',
  time: '2h ago',
  icon: '📄',
  badgeColor: '#FEF3C7',
  read: false,
  type: 'test_result',
},
{
  id: '3',
  title: 'New lesson added',
  subtitle: 'Newton\'s Laws · Lesson 9 is now live',
  time: '5h ago',
  icon: '📘',
  badgeColor: '#DBEAFE',
  read: true,
  type: 'lesson',
},
{
  id: '4',
  title: 'Assignment deadline tomorrow',
  subtitle: 'Newton Laws Assignment · Due May 2',
  time: 'Yesterday',
  icon: '⚠️',
  badgeColor: '#FEE2E2',
  read: true,
  type: 'assignment',
},
{
  id: '5',
  title: '5-day streak!',
  subtitle: 'Keep it up — you\'re on a roll!',
  time: 'Yesterday',
  icon: '🔥',
  badgeColor: '#DCFCE7',
  read: true,
  type: 'streak',
},
{
  id: '6',
  title: 'New announcement',
  subtitle: 'Holiday schedule updated for next week',
  time: '2 days ago',
  icon: '📢',
  badgeColor: '#E0E7FF',
  read: true,
  type: 'announcement',
},
{
  id: '7',
  title: 'Certificate earned',
  subtitle: 'Congratulations! You completed Python Basics',
  time: '3 days ago',
  icon: '🏆',
  badgeColor: '#FEF3C7',
  read: true,
  type: 'test_result',
},
{
  id: '8',
  title: 'Live class reminder',
  subtitle: 'Physics — Thermodynamics • Batch B',
  time: '4 days ago',
  icon: '🎥',
  badgeColor: '#FFEDD5',
  read: true,
  type: 'live_class',
},
];
export const useNotifications = () => {
  const [notifications, setNotifications] =
    useState(initialNotifications);

  const [refreshing, setRefreshing] =
    useState(false);

  const unreadCount = useMemo(() => {
    return getUnreadCount(notifications);
  }, [notifications]);

  const handleMarkAllRead = useCallback(() => {
    setNotifications(prev =>
      markAllAsRead(prev),
    );
  }, []);

  const handleMarkAsRead = useCallback(
    (id: string) => {
      setNotifications(prev =>
        markAsRead(prev, id),
      );
    },
    [],
  );

  const handleDelete = useCallback(
    (id: string) => {
      setNotifications(prev =>
        deleteNotification(prev, id),
      );
    },
    [],
  );

  const handleRefresh = useCallback(() => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  return {
    notifications,
    refreshing,
    unreadCount,

    handleDelete,
    handleRefresh,
    handleMarkAllRead,
    handleMarkAsRead,
  };
};