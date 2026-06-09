import type { ComponentType } from 'react';
import SVGByteCode from '@/Helpers/SVGByteCode';
import HomeScreen from '@/features/Main/HomeScreen/HomeScreen';
import AttendanceScreen from '@/features/Main/AttendanceScreen/AttendanceScreen';
import CompaniesScreen from '@/features/Main/CompaniesScreen/CompaniesScreen';
import ClaimsScreen from '@/features/Main/ClaimsScreen/ClaimsScreen';
import SettingsScreen from '@/features/Main/SettingsScreen/SettingsScreen';

export type TabName = 'Home' | 'Visits' | 'Companies' | 'Claims' | 'Settings';

export interface TabConfig {
  name: TabName;
  component: ComponentType<any>;
  label: string;
  activeIcon: keyof typeof SVGByteCode;
  inactiveIcon: keyof typeof SVGByteCode;
  params?: any;
}

export const BOTTOM_TABS: TabConfig[] = [
  {
    name: 'Home',
    component: HomeScreen,
    label: 'Home',
    activeIcon: 'home_active',
    inactiveIcon: 'home',
  },
  {
    name: 'Visits',
    component: AttendanceScreen,
    label: 'Visits',
    activeIcon: 'visits_active',
    inactiveIcon: 'visits',
  },
  {
    name: 'Companies',
    component: CompaniesScreen,
    label: 'Companies',
    activeIcon: 'companies_active',
    inactiveIcon: 'companies',
  },
  {
    name: 'Claims',
    component: ClaimsScreen,
    label: 'Claims',
    activeIcon: 'claims_active',
    inactiveIcon: 'claims',
  },
  {
    name: 'Settings',
    component: SettingsScreen,
    label: 'Settings',
    activeIcon: 'settings_active',
    inactiveIcon: 'settings',
  },
];
