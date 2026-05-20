import React, { memo, useState } from "react"
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native"

import { Chip } from "react-native-paper"
import LinearGradient from "react-native-linear-gradient"
import { SvgFromXml } from "react-native-svg"

import SVGByteCode from "@/Helpers/SVGByteCode"
import Colors from "@/Theme/Colors"

const FILTERS = ["All", "Node", "Mongo", "Featured", "React"]

const SearchBarHeader = () => {
  const [selectedFilter, setSelectedFilter] = useState("All")

  return (
    <View style={styles.container}>
      {/* ================= HEADER ================= */}
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.subtitle}>Your AI buddy</Text>

          <View style={styles.titleRow}>
            <Text style={styles.title}>Search </Text>
            <Text style={styles.highlightTitle}>Solution</Text>
          </View>
        </View>

        <View style={styles.starContainer}>
          <SvgFromXml
            xml={SVGByteCode.BlueStar}
            width={30}
            height={30}
          />
        </View>
      </View>

      {/* ================= SEARCH BOX = ================ */}
      <View style={styles.searchContainer}>
        <TouchableOpacity activeOpacity={0.7}>
          <SvgFromXml xml= {SVGByteCode.SecoundaryMic} width={27} height={27} />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7}>
          <SvgFromXml xml={SVGByteCode.camera} width={25} height={25} />
        </TouchableOpacity>

        <TextInput
          placeholder="Search for courses, subjects..."
          placeholderTextColor="#9CA3AF"
          style={styles.input}
        />

        <TouchableOpacity activeOpacity={0.8}>
          <LinearGradient
            colors={["#1D4ED8", "#2563EB", "#3B82F6"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.sendButton}
          >
            <SvgFromXml
              xml={SVGByteCode.Flight}
              width={18}
              height={18}
            />
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* ================= FILTER CHIPS ================= */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.chipContainer}
      >
        {FILTERS.map((item) => {
          const isSelected = selectedFilter === item

          return (
            <Chip
              key={item}
              selected={isSelected}
              onPress={() => setSelectedFilter(item)}
              mode="flat"
              style={[
                styles.chip,
                isSelected && styles.activeChip,
              ]}
              textStyle={[
                styles.chipText,
                isSelected && styles.activeChipText,
              ]}
            >
              {item}
            </Chip>
          )
        })}
      </ScrollView>
    </View>
  )
}

export default memo(SearchBarHeader)

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 10,
  },

  /* ================= HEADER ================= */

  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 18,
  },

  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    color: Colors.lightGray || "#94A3B8",
    marginBottom: 2,
  },

  titleRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#111827",
  },

  highlightTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: Colors.blue || "#2563EB",
  },

  starContainer: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.blueBatch,
  },

  /* ================= SEARCH ================= */

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 10,
    gap: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.06,
    shadowRadius: 8,

    elevation: 3,
  },

  input: {
    flex: 1,
    fontSize: 20,
    paddingTop:3,
    color: "#444547",
    paddingVertical: 2,
  },

  sendButton: { 
    width: 42,
    height: 42,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  /* ================= CHIPS ================= */

  chipContainer: {
    paddingTop: 16,
    gap: 10,
  },

  chip: {
     padding: 3,
    backgroundColor: "#E5E7EB",
    borderRadius: 30,
  },

  activeChip: {
    padding: 3,
    backgroundColor: Colors.blue,
  },

  chipText: {
    color: "#111827",
    fontWeight: "600",
  },

  activeChipText: {
    color: "#FFFFFF",
  },
})