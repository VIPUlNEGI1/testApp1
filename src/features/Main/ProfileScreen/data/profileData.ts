export interface Profile {
  name: string;
  email: string;
  plan: string;
  initials: string;
}

export interface StatItem {
  label: string;
  value: string;
}

export interface MenuItem {
  title: string;
  subtitle: string;
  route?: string;
}

export interface UpgradeInfo {
  title: string;
  subtitle: string;
  ctaText: string;
}

export const profile: Profile = {
  name: 'Rahul Singh',
  email: 'rahul.singh@email.com',
  plan: 'Free Plan',
  initials: 'RS',
};

export const stats: StatItem[] = [
  { label: 'Questions', value: '12' },
  { label: 'Solved', value: '07' },
  { label: 'Saved', value: '09' },
];

export const menuItems: MenuItem[] = [
  { title: 'Notifications', subtitle: 'Push notifications for answers', route: 'Notifications' },
  { title: 'Live Classes', subtitle: 'Upcoming & recorded sessions', route: 'LiveClasses' },
  { title: 'Assignments', subtitle: 'Pending & submitted work', route: 'Assignments' },
  { title: 'Tests & Results', subtitle: 'Quiz history & performance', route: 'Tests' },
  { title: 'Help & Support', subtitle: 'FAQ, contact, tutorials', route: 'Support' },
  { title: 'Settings', subtitle: 'Manage app preferences', route: 'Settings' },
];

export const upgradeInfo: UpgradeInfo = {
  title: 'Upgrade to Premium',
  subtitle: 'Unlock unlimited courses, live sessions, and premium support.',
  ctaText: 'Upgrade',
};
