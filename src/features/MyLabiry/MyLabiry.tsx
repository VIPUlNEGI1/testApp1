import AppSeparator from "@/Component/AppSeparator/AppSeparator";
import TabBar, { TabItem } from "@/Component/TabBar";
import Colors from "@/Theme/Colors";
 
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useMyLabiry, TabType } from "./hooks/useMyLabiry";

const courses = [
  {
    id: 1,
    title: "Algebra Fundamentals",
    subtitle: "Mathematics • 14 lessons",
    progress: 65,
    color: "#E8E9C9",
    icon: "radio-button-on-outline",
  },
  {
    id: 2,
    title: "Newton's Laws of Motion",
    subtitle: "Physics • 8 lessons",
    progress: 30,
    color: "#DDD0EB",
    icon: "flash-outline",
  },
  {
    id: 3,
    title: "Organic Chemistry Basics",
    subtitle: "Chemistry • 11 lessons",
    progress: 0,
    color: "#D7ECE8",
    icon: "flask-outline",
  },
  {
    id: 4,
    title: "Calculus — Part I",
    subtitle: "Mathematics • 18 lessons",
    progress: 92,
    color: "#ECECCB",
    icon: "radio-button-on-outline",
  },
];
  const tabs: TabItem[] = [
    { id: 'Courses', name: 'Courses' },
    { id: 'Questions', name: 'Questions' },
    { id: 'Saved', name: 'Saved' },
  ];
export default function MyLabiry() {
  const { activeTab, animateTabSwitch } = useMyLabiry();

  return (
    <ScrollView style={styles.container}>
  <AppSeparator size={40}/>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.heading}>My Library</Text>
          <Text style={styles.subHeading}>
            All your learning in one place
          </Text>
        </View>

        {/* Stats */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            {/* <Ionicons name="document-text-outline" size={20} color="#2563EB" /> */}
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statText}>Questions</Text>
          </View>

          <View style={[styles.statCard, { backgroundColor: "#D8F0DD" }]}>
            {/* <Ionicons name="bookmark-outline" size={20} color="#16A34A" /> */}
            <Text style={styles.statNumber}>08</Text>
            <Text style={styles.statText}>Saved</Text>
          </View>
        </View>
  <AppSeparator size={20}/>
        {/* Tabs */}
        <TabBar
              backgroundColor={Colors.textSecondary}
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={(id) => animateTabSwitch(id as TabType )}
            /> 
  
  <AppSeparator size={20}/>
        {/* Course List */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 120 }}
        >
          {courses.map((item) => (
            <View
              key={item.id}
              style={[styles.courseCard, { backgroundColor: item.color }]}
            >
              <View style={styles.iconContainer}>
                {/* <Ionicons name={item.icon} size={22} color="#1F2937" /> */}
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.courseTitle}>{item.title}</Text>

                <Text style={styles.courseSubtitle}>{item.subtitle}</Text>

                <View style={styles.progressContainer}>
                  <View
                    style={[
                      styles.progressBar,
                      { width: `${item.progress}%` },
                    ]}
                  />
                </View>
              </View>

              <Text style={styles.progressText}>{item.progress}%</Text>
            </View>
          ))}
        </ScrollView>

  
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
 paddingHorizontal: 20,
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

  tabsContainer: {
    flexDirection: "row",
    backgroundColor: "#F1F5F9",
    borderRadius: 16,
    padding: 4,
    marginBottom: 18,
  },

  activeTab: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: "center",
  },

  activeTabText: {
    color: "#2563EB",
    fontWeight: "600",
  },

  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  tabText: {
    color: "#94A3B8",
    fontWeight: "500",
  },

  courseCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 22,
    marginBottom: 14,
  },

  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.7)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  courseTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },

  courseSubtitle: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 3,
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
    backgroundColor: "#2563EB",
    borderRadius: 10,
  },

  progressText: {
    marginLeft: 10,
    fontSize: 13,
    fontWeight: "700",
    color: "#2563EB",
  },

  bottomBar: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    height: 70,
    backgroundColor: "#F8FAFC",
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    elevation: 8,
  },

  centerButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -25,
  },
});