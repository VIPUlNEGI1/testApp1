import { Notification } from "../NotificationTypes";

 
export const getUnreadCount = (
  notifications: Notification[],
): number => {
  return notifications.filter(n => !n.read).length;
};

export const markAllAsRead = (
  notifications: Notification[],
): Notification[] => {
  return notifications.map(n => ({
    ...n,
    read: true,
  }));
};

export const markAsRead = (
  notifications: Notification[],
  id: string,
): Notification[] => {
  return notifications.map(n =>
    n.id === id
      ? { ...n, read: true }
      : n,
  );
};

export const deleteNotification = (
  notifications: Notification[],
  id: string,
): Notification[] => {
  return notifications.filter(n => n.id !== id);
};