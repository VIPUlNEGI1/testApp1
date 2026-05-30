import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LabiryItem } from "../hooks/useMyLabiry";
import { SvgFromXml } from "react-native-svg";

interface CourseCardProps {
  item: LabiryItem;
}

const CourseCard = React.memo(({ item }: CourseCardProps) => (
  <View style={[styles.courseCard, { backgroundColor: item.color ?? "#E9EDD0" }]}>
    <View style={styles.courseIcon}>
      {item.icon ? (
        <SvgFromXml xml={item.icon} width={24} height={24} />
      ) : (
      null  )}
    </View>

    <View style={styles.courseInfo}>
      <Text style={styles.courseTitle}>{item.title}</Text>
      <Text style={styles.courseSubtitle}>{item.subtitle}</Text>
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: `${item.progress ?? 0}%` }]} />
      </View>
    </View>

    <Text style={styles.progressText}>{item.progress ?? 0}%</Text>
  </View>
));

const styles = StyleSheet.create({
  courseCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 24,
  },
  courseIcon: {
    width: 50,
    height: 50,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.5)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  courseIconText: {
    fontSize: 40,
    fontWeight: "700",
  },
  courseInfo: {
    flex: 1,
  },
  courseTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#0a0a0a",
  },
  courseSubtitle: {
    marginTop: 4,
    marginBottom: 12,
    fontSize: 13,
    color: "#060708",
  },
  progressContainer: {
    width: "100%",
    height: 6,
    borderRadius: 999,
    backgroundColor: "#D7DBE2",
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    borderRadius: 999,
    backgroundColor: "#0D6EFD",
  },
  progressText: {
    marginLeft: 12,
    fontSize: 13,
    fontWeight: "700",
    color: "#0D6EFD",
  },
});

CourseCard.displayName = "CourseCard";
export default CourseCard;
