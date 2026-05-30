import React, { useCallback } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useMyLabiry, LabiryItem, TabType } from "./hooks/useMyLabiry";
import CourseCard from "./components/CourseCard";
import QuestionCard from "./components/QuestionCard";
import SavedCard from "./components/SavedCard";
import LibraryHeader from "./components/LibraryHeader";

const renderCardByType = (activeTab: TabType, item: LabiryItem) => {
  if (activeTab === "Courses") return <CourseCard item={item} />;
  if (activeTab === "Questions") return <QuestionCard item={item} />;
  return <SavedCard item={item} />;
};

export default function MyLabiry() {
  const { activeTab, animateTabSwitch, tabItems, items } = useMyLabiry();

  const renderItem = useCallback(
    ({ item }: { item: LabiryItem }) => renderCardByType(activeTab, item),
    [activeTab],
  );

  const ListHeaderComponent = useCallback(
    () => (
      <LibraryHeader
        activeTab={activeTab}
        tabItems={tabItems}
        onTabChange={(id) => animateTabSwitch(id as TabType)}
      />
    ),
    [activeTab, tabItems, animateTabSwitch],
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={<ListHeaderComponent />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#F8FAFC",
  },
  listContent: {
    paddingBottom: 130,
  },
  itemSeparator: {
    height: 16,
  },
});
