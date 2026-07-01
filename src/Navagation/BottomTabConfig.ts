import type { ComponentType } from 'react';
import SVGByteCode from '@/Helpers/SVGByteCode';
import HomeScreen from '@/features/Main/HomeScreen/HomeScreen';

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
];
