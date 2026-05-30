import React, { useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";
import AppSeparator from "@/Component/AppSeparator/AppSeparator";
import TabBar from "@/Component/TabBar";
import { TabType } from "../hooks/useMyLabiry";

interface LibraryHeaderProps {
  activeTab: TabType;
  tabItems: Array<{ id: string; name: string }>;
  onTabChange: (tabId: TabType) => void;
}

const LibraryHeader = React.memo(({ activeTab, tabItems, onTabChange }: LibraryHeaderProps) => {
  const headerContent = useMemo(
    () => (
      <>
        <AppSeparator size={40} />

        <View style={styles.header}>
          <Text style={styles.heading}>My Library</Text>
          <Text style={styles.subHeading}>All your learning in one place</Text>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statIcon}>📄</Text>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statText}>Questions</Text>
          </View>

          <View style={[styles.statCard, styles.statCardAlt]}>
            <Text style={styles.statIcon}>🔖</Text>
            <Text style={styles.statNumber}>08</Text>
            <Text style={styles.statText}>Saved</Text>
          </View>
        </View>

        <AppSeparator size={18} />

        <TabBar
          backgroundColor="#EEF2F7"
          tabs={tabItems}
          activeTab={activeTab}
          onTabChange={(id) => onTabChange(id as TabType)}
        />

        <AppSeparator size={20} />
      </>
    ),
    [activeTab, tabItems, onTabChange],
  );

  return headerContent;
});

const styles = StyleSheet.create({
  header: {
    marginBottom: 18,
  },
  heading: {
    fontSize: 38,
    fontWeight: "800",
    color: "#0F172A",
    letterSpacing: -1,
  },
  subHeading: {
    marginTop: 4,
    fontSize: 15,
    color: "#94A3B8",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statCard: {
    width: "48%",
    backgroundColor: "#EEF3FB",
    borderRadius: 20,
    padding: 18,
  },
  statCardAlt: {
    backgroundColor: "#D8F0DD",
  },
  statIcon: {
    fontSize: 18,
  },
  statNumber: {
    marginTop: 10,
    fontSize: 34,
    fontWeight: "800",
    color: "#0F172A",
  },
  statText: {
    marginTop: 4,
    fontSize: 14,
    color: "#64748B",
  },
});

LibraryHeader.displayName = "LibraryHeader";
export default LibraryHeader;
