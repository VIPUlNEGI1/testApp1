import { useEffect, useState } from 'react';
import useNavigation from '@/Helpers/UseNavagation';
import getHomeData from '@/services/HomeService';

export interface Course {
  id: string;
  title: string;
  instructor: string;
  level: string;
  duration: string;
  progress: number;
  rating: number;
  students: number;
  category?: string;
  image?: string;
  age?: number;
  university?: string;
}

export const useHomeLogic = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    loadHomeData();
  }, []);

  const loadHomeData = async () => {
    try {
      setLoading(true);

      const data = await getHomeData();

      console.log(data);
    } catch (error) {
      console.log('Home API Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleSearchPress = () => {
    navigation.navigate({ name: 'SearchScreen', params: {} });
  };

  const handleCoursePress = (courseId: string) => {
    navigation.navigate({ name: 'SearchScreen', params: { courseId } });
  };
 

  return {
    searchQuery,
    loading,
    handleSearch,
    handleSearchPress,
    handleCoursePress,
  
  };
};