import AppSeparator from "@/Component/AppSeparator/AppSeparator";
import TabBar from "@/Component/TabBar";
import Colors from "@/Theme/Colors";
import React, { useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useMyLabiry, LabiryItem, TabType } from "./hooks/useMyLabiry";

export default function MyLabiry() {
  const { activeTab, animateTabSwitch, tabItems, items } = useMyLabiry();

  const data = items;

  const renderCourse = useCallback(
    ({ item }: { item: LabiryItem }) => (
      <View style={[styles.courseCard, { backgroundColor: item.color ?? "#F8FAFC" }]}> 
        <View style={styles.courseInfo}>
          <Text style={styles.courseTitle}>{item.title}</Text>
          <Text style={styles.courseSubtitle}>{item.subtitle}</Text>
          <View style={styles.progressContainer}>
            <View style={[styles.progressBar, { width: `${item.progress ?? 0}%` }]} />
          </View>
        </View>
        <Text style={styles.progressText}>{item.progress ?? 0}%</Text>
      </View>
    ),
    [],
  );

  const renderQuestion = useCallback(
    ({ item }: { item: LabiryItem }) => (
      <TouchableOpacity activeOpacity={0.85} style={styles.questionCard}>
        <View style={styles.questionRow}>
          <View style={styles.questionStatusPill}>
            <Text style={styles.questionStatusText}>{item.status}</Text>
          </View>
          <Text style={styles.questionTime}>{item.subtitle}</Text>
        </View>
        <Text style={styles.questionTitle}>{item.title}</Text>
        <Text style={styles.questionDetail}>{item.detail}</Text>
      </TouchableOpacity>
    ),
    [],
  );

  const renderSaved = useCallback(
    ({ item }: { item: LabiryItem }) => (
      <TouchableOpacity activeOpacity={0.85} style={styles.savedCard}>
        <View style={styles.savedRow}>
          <View style={styles.savedDot} />
          <View style={styles.savedTextWrapper}>
            <Text style={styles.savedTitle}>{item.title}</Text>
            <Text style={styles.savedSubtitle}>{item.subtitle}</Text>
          </View>
        </View>
        <Text style={styles.savedDate}>{item.savedDate}</Text>
      </TouchableOpacity>
    ),
    [],
  );
 
  const renderItem = useCallback(
    ({ item }: { item: LabiryItem }) => {
      if (activeTab === "Courses") return renderCourse({ item });
      if (activeTab === "Questions") return renderQuestion({ item });
      return renderSaved({ item });
    },
    [activeTab, renderCourse, renderQuestion, renderSaved],
  );

  const listHeader = (
    <>
      <AppSeparator size={40} />
      <View style={styles.header}>
        <Text style={styles.heading}>My Library</Text>
        <Text style={styles.subHeading}>All your learning in one place</Text>
      </View>
      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statText}>Questions</Text>
        </View>
        <View style={[styles.statCard, { backgroundColor: "#D8F0DD" }]}> 
          <Text style={styles.statNumber}>08</Text>
          <Text style={styles.statText}>Saved</Text>
        </View>
      </View>
      <AppSeparator size={20} />
      <TabBar
        backgroundColor={Colors.textSecondary}
        tabs={tabItems}
        activeTab={activeTab}
        onTabChange={(id) => animateTabSwitch(id as TabType)}
      />
      <AppSeparator size={20} />
    </>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={listHeader}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: 14 }} />}
        initialNumToRender={6}
        removeClippedSubviews
        windowSize={9}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  listContent: {
    paddingBottom: 120,
  },
  header: {
    marginBottom: 18,
  },
  heading: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0F172A",
  },
  subHeading: {
    marginTop: 4,
    fontSize: 14,
    color: "#94A3B8",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
  },
  statCard: {
    width: "48%",
    backgroundColor: "#EEF2FF",
    borderRadius: 18,
    padding: 16,
  },
  statNumber: {
    fontSize: 28,
    fontWeight: "700",
    marginTop: 8,
    color: "#111827",
  },
  statText: {
    fontSize: 13,
    color: "#64748B",
    marginTop: 2,
  },
  courseCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    borderRadius: 22,
    marginBottom: 0,
  },
  courseInfo: {
    flex: 1,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },
  courseSubtitle: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 4,
    marginBottom: 10,
  },
  progressContainer: {
    width: "100%",
    height: 6,
    backgroundColor: "#D1D5DB",
    borderRadius: 10,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: Colors.blue,
    borderRadius: 10,
  },
  progressText: {
    marginLeft: 14,
    fontSize: 13,
    fontWeight: "700",
    color: Colors.blue,
  },
  questionCard: {
    backgroundColor: Colors.white,
    borderRadius: 22,
    padding: 18,
    marginBottom: 0,
    shadowColor: Colors.shadow,
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  questionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  questionStatusPill: {
    backgroundColor: "#EEF2FF",
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  questionStatusText: {
    color: Colors.blue,
    fontWeight: "700",
    fontSize: 12,
  },
  questionTime: {
    fontSize: 12,
    color: "#94A3B8",
  },
  questionTitle: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },
  questionDetail: {
    marginTop: 8,
    fontSize: 13,
    color: "#64748B",
    lineHeight: 20,
  },
  savedCard: {
    backgroundColor: "#F8FAFC",
    borderRadius: 22,
    padding: 18,
    marginBottom: 0,
  },
  savedRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  savedDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.blue,
    marginRight: 12,
  },
  savedTextWrapper: {
    flex: 1,
  },
  savedTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },
  savedSubtitle: {
    marginTop: 4,
    fontSize: 12,
    color: "#64748B",
  },
  savedDate: {
    fontSize: 12,
    color: "#475569",
  },
});