import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import Colors from '@/Theme/Colors';

interface FloatingAddButtonProps {
  onPress: () => void;
}

const FloatingAddButton: React.FC<FloatingAddButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.addButton} onPress={onPress}>
      <Text style={styles.addButtonText}>+ Company</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    right: 15,
    bottom: 20,
    backgroundColor: Colors.companiesScreen.addButtonBackground,
    paddingHorizontal: 25,
    paddingVertical: 14,
    borderRadius: 30,
    elevation: 6,
  },

  addButtonText: {
    color: Colors.companiesScreen.addButtonText,
    fontWeight: '600',
    fontSize: 15,
  },
});

export default FloatingAddButton;
