import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LabiryItem } from "../hooks/useMyLabiry";
import { SvgFromXml } from "react-native-svg";
import SVGByteCode from "@/Helpers/SVGByteCode";

interface SavedCardProps {
  item: LabiryItem;
}

const SavedCard = React.memo(({ item }: SavedCardProps) => (
  <TouchableOpacity
    activeOpacity={0.85}
    style={[styles.savedCard, { backgroundColor: item.color ?? "#E9EDD0" }]}
  >
    <View style={styles.savedContent}>
      <View style={styles.savedTextWrapper}>
        <Text style={styles.savedTitle}>{item.title}</Text>
        <Text style={styles.savedSubtitle}>{item.subtitle}</Text>
      </View>

      <View style={styles.savedActions}>
        <TouchableOpacity style={styles.savedActionBtn}>
               <SvgFromXml xml={SVGByteCode.Share} width={20} height={20} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.savedActionBtn}>
          <SvgFromXml xml={SVGByteCode.Download} width={20} height={20} />
        </TouchableOpacity>
      </View>
    </View>
    {item.savedDate ? <Text style={styles.savedDate}>{item.savedDate}</Text> : null}
  </TouchableOpacity>
));

const styles = StyleSheet.create({
  savedCard: {
    borderRadius: 24,
    padding: 18,
  },
  savedContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  savedTextWrapper: {
    flex: 1,
    paddingRight: 10,
  },
  savedTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0F172A",
  },
  savedSubtitle: {
    marginTop: 8,
    fontSize: 13,
    color: "#64748B",
  },
  savedDate: {
    marginTop: 14,
    fontSize: 12,
    color: "#94A3B8",
  },
  savedActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  savedActionBtn: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.7)",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  savedActionText: {
    fontSize: 16,
    color: "#475569",
    fontWeight: "700",
  },
});

SavedCard.displayName = "SavedCard";
export default SavedCard;
