import React, { memo } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Skeleton } from './Components/Skeleton';
import { SkeletonCard } from './Components/SkeletonCard';

const HomeSkeletonComponent = () => {
  return (
    <View style={styles.container}>
      {/* Header Skeleton */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.greetingContainer}>
            <Skeleton width={140} height={28} radius={8} />
            <Skeleton width={100} height={18} radius={6} style={styles.subtitle} />
          </View>
          <View style={styles.headerActions}>
            <Skeleton width={44} height={44} radius={22} />
            <Skeleton width={44} height={44} radius={22} style={styles.notification} />
          </View>
        </View>
        <View style={styles.searchContainer}>
          <Skeleton width="100%" height={48} radius={12} />
        </View>
      </View>

      {/* Progress Cards Skeleton */}
      <View style={styles.progressSection}>
        <Skeleton width="40%" height={24} radius={6} style={styles.sectionTitle} />
        <View style={styles.progressGrid}>
          <View style={styles.progressCard}>
            <Skeleton width={40} height={40} radius={20} />
            <Skeleton width={60} height={16} radius={4} style={styles.progressLabel} />
            <Skeleton width={40} height={20} radius={4} style={styles.progressValue} />
          </View>
          <View style={styles.progressCard}>
            <Skeleton width={40} height={40} radius={20} />
            <Skeleton width={60} height={16} radius={4} style={styles.progressLabel} />
            <Skeleton width={40} height={20} radius={4} style={styles.progressValue} />
          </View>
          <View style={styles.progressCard}>
            <Skeleton width={40} height={40} radius={20} />
            <Skeleton width={60} height={16} radius={4} style={styles.progressLabel} />
            <Skeleton width={40} height={20} radius={4} style={styles.progressValue} />
          </View>
        </View>
      </View>

      {/* Quick Categories Skeleton */}
      <View style={styles.categoriesSection}>
        <Skeleton width="45%" height={24} radius={6} style={styles.sectionTitle} />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesScroll}
        >
          <View style={styles.categories}>
            {Array.from({ length: 4 }).map((_, index) => (
              <View key={index} style={styles.categoryItem}>
                <Skeleton width={56} height={56} radius={28} />
                <Skeleton width={50} height={14} radius={4} style={styles.categoryText} />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      {/* Live Classes Skeleton */}
      <View style={styles.liveSection}>
        <Skeleton width="35%" height={24} radius={6} style={styles.sectionTitle} />
        <View style={styles.liveCard}>
          <Skeleton width="100%" height={120} radius={12} />
          <View style={styles.liveContent}>
            <Skeleton width="80%" height={20} radius={6} />
            <Skeleton width="60%" height={16} radius={4} style={styles.liveSubtitle} />
            <View style={styles.liveMeta}>
              <Skeleton width={40} height={14} radius={7} />
              <Skeleton width={60} height={24} radius={12} />
            </View>
          </View>
        </View>
      </View>

      {/* Continue Learning Skeleton */}
      <View style={styles.learningSection}>
        <Skeleton width="50%" height={24} radius={6} style={styles.sectionTitle} />
        <View style={styles.coursesList}>
          {Array.from({ length: 3 }).map((_, index) => (
            <SkeletonCard
              key={index}
              animated={true}
              showAvatar={true}
              lines={2}
              height={90}
              style={styles.courseCard}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export const HomeSkeleton = HomeSkeletonComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
  },

  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  greetingContainer: {
    flex: 1,
  },

  subtitle: {
    marginTop: 4,
  },

  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  notification: {
    marginLeft: 12,
  },

  searchContainer: {
    marginTop: 8,
  },

  progressSection: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
    marginTop: 8,
  },

  progressGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },

  progressCard: {
    alignItems: 'center',
    flex: 1,
  },

  progressLabel: {
    marginTop: 8,
    marginBottom: 4,
  },

  progressValue: {
    alignSelf: 'center',
  },

  categoriesSection: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
    marginTop: 8,
  },

  categoriesScroll: {
    marginTop: 16,
  },

  categories: {
    flexDirection: 'row',
    paddingHorizontal: 4,
  },

  categoryItem: {
    alignItems: 'center',
    marginRight: 20,
  },

  categoryText: {
    marginTop: 8,
  },

  liveSection: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
    marginTop: 8,
  },

  liveCard: {
    marginTop: 16,
  },

  liveContent: {
    marginTop: 12,
  },

  liveSubtitle: {
    marginTop: 6,
  },

  liveMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },

  learningSection: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 8,
  },

  coursesList: {
    marginTop: 16,
  },

  courseCard: {
    marginBottom: 12,
  },

  sectionTitle: {
    marginBottom: 16,
  },
});
