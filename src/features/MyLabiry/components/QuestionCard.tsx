import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "@/Theme/Colors";
import { LabiryItem } from "../hooks/useMyLabiry";
import { SvgFromXml } from "react-native-svg";

interface QuestionCardProps {
  item: LabiryItem;
}

const QuestionCard = React.memo(({ item }: QuestionCardProps) => {
  const statusColor =
    item.status === "Answered"
      ? Colors.success
      : item.status === "Pending"
      ? "#C27A00"
      : Colors.blue;

  const statusBg =
    item.status === "Answered"
      ? "#c5ffcf"
      : item.status === "Pending"
      ? "#FFE6A7"
      : "#EEF2FF";

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={[styles.questionCard, { backgroundColor: item.color ?? "#E9EDD0" }]}
    >
      <View style={styles.questionTopRow}>
        <View style={styles.questionCategoryRow}>
           {item.icon ? (
                <SvgFromXml
                
                xml={item.icon} width={15} height={15} />
              ) : (
              null  )}
        <Text style={styles.questionCategory}>{item.category}</Text>
          
        </View>
        <View style={[styles.questionStatusPill, { backgroundColor: statusBg }]}>
          <Text style={[styles.questionStatusText, { color: statusColor }]}>
            {item.status}
          </Text>
        </View>
      </View>

      <Text style={styles.questionTitle}>{item.title}</Text>
      <Text style={styles.questionTime}>{item.subtitle}</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  questionCategoryRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  questionCard: {
    borderRadius: 24,
    padding: 18,
  },
  questionTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  questionCategory: {
    fontSize: 14,
    fontWeight: "600",
    color: "#334155",
  },
  questionStatusPill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },
  questionStatusText: {
    fontSize: 11,
    fontWeight: "700",
  },
  questionTitle: {
    marginTop: 14,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "700",
    color: "#0F172A",
  },
  questionTime: {
    marginTop: 12,
    fontSize: 13,
    color: "#64748B",
  },
});

QuestionCard.displayName = "QuestionCard";
export default QuestionCard;
