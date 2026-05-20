import React, { memo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { SvgFromXml } from 'react-native-svg';
import SVGByteCode from '@/Helpers/SVGByteCode';
import Colors from '@/Theme/Colors';
import type { Course } from '../hooks/useHomeLogic';

const DUMMY_COURSES: Course[] = [
  {
    id: '1',
    title: 'UI Design Essentials',
    instructor: 'Ava Martin',
    level: 'Beginner',
    duration: '3 hours',
    progress: 60,
    rating: 4.8,
    students: 238,
    category: 'Design',
  },
  {
    id: '2',
    title: 'Algebra Practice',
    instructor: 'Noah Kim',
    level: 'Intermediate',
    duration: '5 hours',
    progress: 45,
    rating: 4.5,
    students: 380,
    category: 'Development',
  },
  {
    id: '3',
    title: 'English Grammar',
    instructor: 'Zara Lee',
    level: 'Advanced',
    duration: '2.5 hours',
    progress: 82,
    rating: 4.9,
    students: 512,
    category: 'Business',
  },
];

const getCourseColor = (course: Course): string => {
  const categoryColors: Record<string, string> = {
    Development: '#adfda7',
    Design: '#b2caff',
    Business: '#f1fca2',
    Marketing: '#ffdbdb',
  };
  return categoryColors[course.category || ''] || '#0F172A';
};

const ContinueLearning: React.FC = memo(() => {
  const continueLearningCourses = DUMMY_COURSES.filter((course) => course.progress > 0).slice(0, 3);

  const renderCourseCard = ({ item }: { item: Course }) => (
    <View style={[styles.courseCard, { backgroundColor: getCourseColor(item) }]}>
     
      <View style={styles.courseContent}>
          <Text style={styles.instructorName}>{item.instructor}</Text>
        <Text style={styles.courseTitle}>{item.title}</Text>
        <View style={styles.instructorInfo}>
          {item.age && <Text style={styles.ageText}>Age: {item.age}</Text>}
        </View>

        <View style={styles.courseMeta}>
          <Text style={styles.lessons}>{item.level}</Text>
          <Text style={styles.duration}>{item.duration}</Text>
        </View>

        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${item.progress}%` }]} />
          </View>
          <Text style={styles.progressText}>{item.progress}%</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.playButton}>
        <SvgFromXml xml={SVGByteCode.Play} width={24} height={24} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Continue Learning</Text>
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={continueLearningCourses}
        renderItem={renderCourseCard}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.background,
  },
  seeAllButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  seeAllText: {
    fontSize: 14,
    color: Colors.brand,
    fontWeight: '600',
  },
  courseCard: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
   
  userImage: {
    width: 56,
    height: 56,
    borderRadius: 12,
  },
  avatarPlaceholder: {
    width: 56,
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.white,
  },
  courseContent: {
    flex: 1,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.background,
    marginBottom: 4,
  },
  instructorInfo: {
    marginBottom: 8,
  },
  instructorName: {
    fontSize: 14,
    color: Colors.darkGray,
    marginBottom: 2,
  },
  ageText: {
    fontSize: 12,
    color: Colors.textMuted,
  },
  courseSubject: {
    fontSize: 14,
    color: Colors.darkGray,
    marginBottom: 8,
  },
  courseMeta: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  lessons: {
    fontSize: 12,
    color: Colors.textMuted,
    marginRight: 16,
  },
  duration: {
    fontSize: 12,
    color: Colors.textMuted,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    flex: 1,
    height: 4,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 2,
    marginRight: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: Colors.brand,
    borderRadius: 2,
  },
  progressText: {
    fontSize: 12,
    color: Colors.textMuted,
    fontWeight: '600',
  },
  playButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.brand,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
});

export default ContinueLearning;
