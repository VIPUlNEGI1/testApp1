import HomeScreen from '@/features/Main/Home/HomeScreen';
import SearchScreen from '@/features/Main/SearchScreen/Searchscreen';
import MyLabiry from '@/features/MyLabiry/MyLabiry';
import SVGByteCode from '@/Helpers/SVGByteCode';

export type TabName = 'Home' | 'Search' | 'Saved' | 'CreateJob' | 'Profile';
export type SVGIconName = keyof typeof SVGByteCode;

export interface TabConfig {
  name: TabName;
  component: React.ComponentType<any>;
  label: string;
  activeIcon: SVGIconName;
  inactiveIcon: SVGIconName;
  isSpecial?: boolean;
}

export const BOTTOM_TABS: TabConfig[] = [
  {
    name: 'Home',
    component: HomeScreen,
    label: 'Home',
    activeIcon: 'active_home',
    inactiveIcon: 'home',
  },
  {
    name: 'Search',
    component: SearchScreen,
    label: 'Search',
    activeIcon: 'ActiveSearch',
    inactiveIcon: 'Search',
  },
  {
    name: 'CreateJob',
    component: MyLabiry,
    label: 'Create Job',
    activeIcon: 'BlueStar',
    inactiveIcon: 'Star',
    isSpecial: true,
  },
  {
    name: 'Saved',
    component: MyLabiry,
    label: 'Saved',
    activeIcon: 'active_Save',
    inactiveIcon: 'Save',
  },
  {
    name: 'Profile',
    component: MyLabiry,
    label: 'Profile',
    activeIcon: 'active_profile',
    inactiveIcon: 'Profile',
  },
];
