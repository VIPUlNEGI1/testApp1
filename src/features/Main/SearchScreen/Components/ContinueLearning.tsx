import React, { memo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { SvgFromXml } from 'react-native-svg';

import SVGByteCode from '@/Helpers/SVGByteCode';
import Colors from '@/Theme/Colors';
import { Course } from '../../Home/hooks/useHomeLogic';

const courses: Course[] = [
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

const categoryColors: Record<string, string> = {
  Development: '#ADFDA7',
  Design: '#B2CAFF',
  Business: '#F1FCA2',
  Marketing: '#FFDBDB',
};

const ContinueLearning = () => {
  const renderItem = ({ item }: { item: Course }) => (
    <View
      style={[
        styles.card,
        { backgroundColor: categoryColors[item.category || ''] || '#eee' },
      ]}
    >
      <View style={styles.topRow}>
        <View style={styles.row}>
          <SvgFromXml xml={SVGByteCode.TargetSecondary} width={18} height={18} />
          <Text style={styles.smallText}>{item.instructor}</Text>
        </View>

        <View style={styles.row}>
          <SvgFromXml xml={SVGByteCode.Clock} width={18} height={18} />
          <Text style={styles.smallText}>5 min Read</Text>
        </View>
      </View>

      <Text style={styles.title}>{item.title}</Text>

      <Text style={styles.description}>
        How to solve this network equation question
      </Text>

      <View style={styles.metaRow}>
        <Text style={styles.meta}>{item.level}</Text>
        <Text style={styles.meta}>{item.duration}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Made Just For You</Text>

        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default memo(ContinueLearning);

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

  heading: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.background,
  },

  seeAll: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.brand,
  },

  card: {
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  title: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.background,
    marginBottom: 6,
  },

  description: {
    fontSize: 14,
    color: Colors.darkGray,
    marginBottom: 10,
  },

  smallText: {
    fontSize: 13,
    color: Colors.darkGray,
  },

  metaRow: {
    flexDirection: 'row',
    gap: 14,
  },

  meta: {
    fontSize: 12,
    color: Colors.textMuted,
  },
});