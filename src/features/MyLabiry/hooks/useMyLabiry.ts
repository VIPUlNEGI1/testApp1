import { TabItem } from "@/Component/TabBar";
import SVGByteCode from "@/Helpers/SVGByteCode";
import React, { useMemo } from "react";

export type TabType = "Courses" | "Questions" | "Saved";

export type LabiryItem = {
  id: string;
  title: string;
  subtitle: string;
  progress?: number;
  color?: string;
  status?: string;
  detail?: string;
  savedDate?: string;
  icon?: string;
  category?: string;
};

const tabItems: TabItem[] = [
  { id: "Courses", name: "Courses" },
  { id: "Questions", name: "Questions" },
  { id: "Saved", name: "Saved" },
];

const courses: LabiryItem[] = [
  {
    id: "1",
    title: "Algebra Fundamentals",
    subtitle: "Mathematics • 14 lessons",
    progress: 65,
    color: "#E8E9C9",
    icon: SVGByteCode.VideoCamera },
  {
    id: "2",
    title: "Newton's Laws of Motion",
    subtitle: "Physics • 8 lessons",
    progress: 30,
    color: "#DDD0EB",
    icon: SVGByteCode.Book 
  },
  {
    id: "3",
    title: "Organic Chemistry Basics",
    subtitle: "Chemistry • 11 lessons",
    progress: 0,
    color: "#D7ECE8",
    icon: SVGByteCode.BlackTarget
  },
  {
    id: "4",
    title: "Calculus — Part I",
    subtitle: "Mathematics • 18 lessons",
    progress: 92,
    color: "#ECECCB",
    icon: SVGByteCode.VideoCamera
  },
];

const questions: LabiryItem[] = [
  {
    id: "q1",
    title: "How to solve quadratic equations?",
    subtitle: "Math • 12m ago",
    category: "Math",
    status: "New",
    detail: "Check factorization and formula steps.",
      icon: SVGByteCode.BlackTarget
      
  },
  {
    id: "q2",
    title: "Why does current change with resistance?",
    subtitle: "Physics • 1h ago",
    category: "Physics",
    status: "Open",
    detail: "Review Ohm's law and circuit examples.",
      icon: SVGByteCode.BlackTarget
  },
  {
    id: "q3",
    title: "Best way to memorize formulas?",
    subtitle: "Study • 3h ago",
    category: "Study",
    status: "Answered",
    detail: "Try spaced repetition with flashcards.",
      icon: SVGByteCode.BlackTarget
  },
];

const savedItems: LabiryItem[] = [
  {
    id: "s1",
    title: "Algebra revision set",
    subtitle: "Saved from course",
    savedDate: "May 10",
  },
  {
    id: "s2",
    title: "Physics practice notes",
    subtitle: "Saved from question",
    savedDate: "May 12",
  },
  {
    id: "s3",
    title: "Chemistry cheat sheet",
    subtitle: "Saved from review",
    savedDate: "May 14",
  },
];

const tabData: Record<TabType, LabiryItem[]> = {
  Courses: courses,
  Questions: questions,
  Saved: savedItems,
};

export const useMyLabiry = () => {
  const [activeTab, setActiveTab] = React.useState<TabType>("Courses");

  const animateTabSwitch = (newTab: TabType, onTabSwitch?: () => void) => {
    if (onTabSwitch) onTabSwitch();
    setActiveTab(newTab);
  };

  const items = useMemo(() => tabData[activeTab], [activeTab]);

  return {
    activeTab,
    setActiveTab,
    animateTabSwitch,
    tabItems,
    items,
  };
};
