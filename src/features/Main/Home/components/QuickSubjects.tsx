import React, { memo } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SvgFromXml } from 'react-native-svg';
import SVGByteCode from '@/Helpers/SVGByteCode';
import Colors from '@/Theme/Colors';
import AppSeparator from '@/Component/AppSeparator/AppSeparator';

interface Subject {
  name: string;
  icon: string;
}

const QuickSubjects: React.FC = memo(() => {
  const subjects: (Subject & { color: string })[] = [
    { name: 'Maths', icon: SVGByteCode.Target, color: '#EBF5FF' },
    { name: 'Physics', icon: SVGByteCode.Lightning, color: '#FEF3C7' },
    { name: 'Chemistry', icon: SVGByteCode.Flask, color: '#D1FAE5' },
    { name: 'Biology', icon: SVGByteCode.Leaf, color: '#F3E8FF' },
    { name: 'Comp.Sci', icon: SVGByteCode.Chip, color: '#FEE2E2' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Quick Subjects</Text>
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {subjects.map((subject, index) => (
          <View> 
          <TouchableOpacity
            key={index}
            style={[styles.subjectCard, { backgroundColor: subject.color }]}
          >
            <View style={styles.iconContainer}>
              <SvgFromXml xml={subject.icon} width={20} height={20} />
            </View>
          </TouchableOpacity>
          <AppSeparator size={8} />
            <Text style={styles.subjectName}>{subject.name}</Text>
        </View>
        ))}
      </ScrollView>
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
  scrollContent: {
    paddingRight: 20,
  },
  subjectCard: {
    alignItems: 'center',
    backgroundColor: Colors.backgroundSecondary,
    borderRadius: 20,
    padding: 12,
    marginRight: 12,
    minWidth: 20,
  },
  iconContainer: {
    width: 38,
    height: 30,
    borderRadius: 33,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  subjectName: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.darkGray,
    textAlign: 'center',
  },
});

export default QuickSubjects;
