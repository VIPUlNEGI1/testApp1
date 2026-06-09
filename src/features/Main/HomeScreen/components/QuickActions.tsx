import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Colors from '@/Theme/Colors';

interface QuickAction {
  id: number;
  label: string;
  icon: string;
}

interface QuickActionsProps {
  actions: QuickAction[];
  onActionPress: (actionId: number) => void;
}

const getIcon = (iconName: string) => {
  const iconProps = {
    width: 28,
    height: 28,
    fill: Colors.homeScreen.primary,
  };

  switch (iconName) {
    case 'person':
      return (
        <Svg {...iconProps} viewBox="0 0 24 24">
          <Path
            fill={Colors.homeScreen.primary}
            d="M12 12a5 5 0 1 0-5-5a5 5 0 0 0 5 5m0 2c-3.33 0-10 1.67-10 5v1h20v-1c0-3.33-6.67-5-10-5"
          />
        </Svg>
      );
    case 'location':
      return (
        <Svg {...iconProps} viewBox="0 0 24 24">
          <Path
            fill={Colors.homeScreen.primary}
            d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7m0 9.5A2.5 2.5 0 1 1 14.5 9A2.5 2.5 0 0 1 12 11.5"
          />
        </Svg>
      );
    case 'calendar':
      return (
        <Svg {...iconProps} viewBox="0 0 24 24">
          <Path
            fill={Colors.homeScreen.primary}
            d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H5V8h14z"
          />
        </Svg>
      );
    default:
      return null;
  }
};

const QuickActions: React.FC<QuickActionsProps> = ({
  actions,
  onActionPress,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quick Actions</Text>

      <View style={styles.actionRow}>
        {actions.map((action) => (
          <TouchableOpacity
            key={action.id}
            style={styles.actionCard}
            onPress={() => onActionPress(action.id)}
          >
            {getIcon(action.icon)}
            <Text style={styles.cardText}>{action.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },

  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '700',
    color: Colors.homeScreen.cardTitle,
  },

  actionRow: {
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 10,
    marginTop: 25,
  },

  actionCard: {
    width: 90,
    height: 90,
    backgroundColor: Colors.homeScreen.cardBackground,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardText: {
    marginTop: 8,
    fontSize: 13,
    color: Colors.homeScreen.cardText,
  },
});

export default QuickActions;
