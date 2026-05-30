import React, { memo } from 'react';

import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Pressable,
} from 'react-native';

import { FlashList } from '@shopify/flash-list';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SvgFromXml } from 'react-native-svg';

import SVGByteCode from '@/Helpers/SVGByteCode';

import Colors from '@/Theme/Colors';
import Fonts from '@/Theme/Fonts';

import { scale } from '@/Helpers/Responsive';

interface QuizItem {
  id: string;
  title: string;
  questions: number;
  duration: string;
  completed?: boolean;
  score?: string;
}

const QUIZ_DATA: QuizItem[] = [
  {
    id: '1',
    title: 'Algebra Quiz 1',
    questions: 10,
    duration: '30 min',
  },
  {
    id: '2',
    title: 'Physics Chapter Test',
    questions: 15,
    duration: '45 min',
  },
  {
    id: '3',
    title: 'Chemistry Mid-term',
    questions: 20,
    duration: '60 min',
    completed: true,
    score: '82%',
  },
];

const QuizCard = memo(
  ({ item }: { item: QuizItem }) => {
    return (
      <Pressable style={styles.card}>
        {/* Icon */}
        <View
          style={[
            styles.iconBox,
            item.completed &&
              styles.completedIconBox,
          ]}
        >
          <SvgFromXml
            xml={SVGByteCode.Target}
            width={24}
            height={24}
          />
        </View>

        {/* Content */}
        <View style={styles.content}>
          <Text style={styles.title}>
            {item.title}
          </Text>

          <View style={styles.metaRow}>
            <View style={styles.metaItem}>
              <SvgFromXml
                xml={SVGByteCode.Download}
                width={14}
                height={14}
              />

              <Text style={styles.metaText}>
                {item.questions} questions
              </Text>
            </View>

            <View style={styles.metaItem}>
              <SvgFromXml
                xml={SVGByteCode.Clock}
                width={14}
                height={14}
              />

              <Text style={styles.metaText}>
                {item.duration}
              </Text>
            </View>
          </View>

          {item.completed && (
            <Text style={styles.score}>
              Best score: {item.score}
            </Text>
          )}
        </View>

        {/* Button */}
        <View
          style={[
            styles.button,
            item.completed
              ? styles.doneButton
              : styles.startButton,
          ]}
        >
          <Text
            style={[
              styles.buttonText,
              item.completed &&
                styles.doneButtonText,
            ]}
          >
            {item.completed
              ? 'Done'
              : 'Start'}
          </Text>
        </View>
      </Pressable>
    );
  },
);

export default function TestsQuizScreen({
  navigation,
}: any) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#F8FAFC"
        barStyle="dark-content"
      />

      {/* Header */}
      <View
        style={[
          styles.header,
          {
            paddingTop:
              insets.top + scale(10),
          },
        ]}
      >
        <Pressable
          onPress={() =>
            navigation.goBack()
          }
        >
          <SvgFromXml
            xml={SVGByteCode.back}
            width={22}
            height={22}
          />
        </Pressable>

        <Text style={styles.headerText}>
          Profile
        </Text>
      </View>

      {/* Title */}
      <Text style={styles.screenTitle}>
        Tests & Quizzes
      </Text>

      {/* List */}
      <FlashList
        data={QUIZ_DATA}
    
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={
          false
        }
        contentContainerStyle={
          styles.listContent
        }
        renderItem={({ item }) => (
          <QuizCard item={item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    paddingHorizontal: scale(18),
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scale(5),
  },

  headerText: {
    marginLeft: scale(10),
    color: '#64748B',
    fontSize: scale(15),
    fontFamily: Fonts.ThemeMedium,
  },

  screenTitle: {
    color: '#0F172A',
    fontSize: scale(32),
    fontFamily: Fonts.ThemeExtraBold,
    marginBottom: scale(20),
  },

  listContent: {
    paddingBottom: scale(30),
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: Colors.white,

    padding: scale(15),

    borderRadius: scale(26),

    marginBottom: scale(16),

    borderWidth: 1,
    borderColor:Colors.white,
  },

  iconBox: {
    width: scale(56),
    height: scale(56),

    borderRadius: scale(18),

    backgroundColor: '#EFF6FF',

    justifyContent: 'center',
    alignItems: 'center',

    borderWidth: 1,
    borderColor: '#BFDBFE',

    marginRight: scale(15),
  },

  completedIconBox: {
    backgroundColor: '#DCFCE7',
    borderColor: '#86EFAC',
  },

  content: {
    flex: 1,
  },

  title: {
    color: '#0F172A',
    fontSize: scale(15),
    fontFamily: Fonts.ThemeBold,
    marginBottom: scale(6),
    width:800
  },

  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: scale(14),
  },

  metaText: {
    marginLeft: scale(4),

    color: '#94A3B8',
    fontSize: scale(13),
    fontFamily: Fonts.ThemeMedium,
  },

  score: {
    marginTop: scale(6),

    color: '#10B981',
    fontSize: scale(14),
    fontFamily: Fonts.ThemeBold,
  },

  button: {
    paddingHorizontal: scale(16),
    paddingVertical: scale(8),

    borderRadius: scale(999),
  },

  startButton: {
    backgroundColor: '#EFF6FF',
  },

  doneButton: {
    backgroundColor: '#DCFCE7',
  },

  buttonText: {
    color: '#2563EB',
    fontSize: scale(13),
    fontFamily: Fonts.ThemeBold,
  },

  doneButtonText: {
    color: '#16A34A',
  },
});