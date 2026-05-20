import { useNavigation as useNative } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';

import type { AuthStackParamList, RootStackParamList } from '@/Types/types';
type NavigationProps = StackNavigationProp<
  RootStackParamList & AuthStackParamList
>;
export default () => useNative<NavigationProps>();
