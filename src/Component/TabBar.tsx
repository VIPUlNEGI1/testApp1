import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import Colors from '@/Theme/Colors';

export interface TabItem {
  id: string;
  name: string;
  component?: React.ReactNode;
}

export interface TabBarProps {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  containerStyle?: any;
  tabStyle?: any;
  activeTabStyle?: any;
  tabTextStyle?: any;
  activeTabTextStyle?: any;
  backgroundColor?: string;
  activeBackgroundColor?: string;
}

export default function TabBar({
  tabs,
  activeTab,
  onTabChange,
  containerStyle,
  tabStyle,
  activeTabStyle,
  tabTextStyle,
  activeTabTextStyle,
  backgroundColor = 'rgba(255, 255, 255, 0.1)',
  activeBackgroundColor = Colors.white,
}: TabBarProps) {
  return (
    <View style={[styles.tabContainer, { backgroundColor }, containerStyle]}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.id}
          style={[
            styles.tab,
            tabStyle,
            activeTab === tab.id && [
              styles.activeTab,
              { backgroundColor: activeBackgroundColor },
              activeTabStyle,
            ],
          ]}
          onPress={() => onTabChange(tab.id)}
        >
          <Text
            style={[
              styles.tabText,
              tabTextStyle,
              activeTab === tab.id && [styles.activeTabText, activeTabTextStyle],
            ]}
          >
            {tab.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    borderRadius: 15,
    padding: 4,
    shadowColor: Colors.brand,
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 12,
  },
  activeTab: {
    shadowColor: Colors.brand,
    shadowOpacity: 0.4,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textMuted,
  },
  activeTabText: {
    color: Colors.brand,
    fontWeight: '800',
  },
});
