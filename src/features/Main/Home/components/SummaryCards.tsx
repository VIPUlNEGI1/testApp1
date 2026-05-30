import React, { memo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SvgFromXml } from 'react-native-svg';
import useNavigation from '@/Helpers/UseNavagation';
import SVGByteCode from '@/Helpers/SVGByteCode';
import Colors from '@/Theme/Colors';

interface SummaryCardProps {
  title: string;
  value: string | number;
  icon: string;
  color: string;
  onPress?: () => void;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, icon, color, onPress }) => (
  <TouchableOpacity
    style={[styles.card, { backgroundColor: color }]}
    activeOpacity={0.8}
    onPress={onPress}
    disabled={!onPress}
  >
    <SvgFromXml xml={icon} width={24} height={24} />
    <Text style={styles.value}>{value}</Text>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

const SummaryCards: React.FC = memo(() => {
  const navigation = useNavigation();

  const handleEnrolledPress = () => {
    navigation.navigate('MyLabiry');
  };
  const handleStreakPress = () => {
    navigation.navigate('Profile');
  };
 

  return (
    <View style={styles.container}>
      <SummaryCard
        title="Enrolled"
        value="4"
        icon={SVGByteCode.Book}
        color="#e6eef5"
        onPress={handleEnrolledPress}
      />
      <SummaryCard title="Streak" value="5d" icon={SVGByteCode.Lightning} color="#FEF3C7" onPress={handleStreakPress} />
      <SummaryCard title="Tests Done" value="3" icon={SVGByteCode.Video} color="#D1FAE5" onPress={handleStreakPress} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  card: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.white,
    backgroundColor: '#F3F4F6',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.backgroundSecondary,
    // marginVertical: 8,
  },
  title: {
    fontSize: 12,
    color: Colors.lightGray,
    textAlign: 'center',
  },
});

export default SummaryCards;
