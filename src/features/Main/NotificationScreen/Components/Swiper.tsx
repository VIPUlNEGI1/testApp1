import React from 'react';

import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';


import Colors from '@/Theme/Colors';
import { scale } from '@/Helpers/Responsive';

interface Props {
  progress: any;
  dragX: any;
  onDelete: () => void;
}

export default function SwipeActions({
  progress,
  dragX,
  onDelete,
}: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.deleteButton}
        onPress={onDelete}
      >
        <Text style={styles.icon}>
          🗑️
        </Text>

        <Text style={styles.deleteText}>
          Delete
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingLeft: scale(12),
  },

  deleteButton: {
    width: scale(82),
    height: '88%',
    borderRadius: scale(22),

    backgroundColor: '#FEE2E2',

    justifyContent: 'center',
    alignItems: 'center',

    borderWidth: 1,
    borderColor: '#FECACA',
  },

  icon: {
    fontSize: scale(24),
    marginBottom: scale(4),
  },

  deleteText: {
    fontSize: scale(12),
    color: Colors.darkGray,
    fontWeight: '700',
  },
});