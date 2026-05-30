export type NotificationType =
  | 'live_class'
  | 'test_result'
  | 'lesson'
  | 'assignment'
  | 'streak'
  | 'announcement';

export type NotificationFilter = 'all' | 'read' | 'unread';

export interface Notification {
  id: string;
  title: string;
  subtitle: string;
  time: string;
  icon: string;
  badgeColor: string;
  read: boolean;
  type: NotificationType;
}