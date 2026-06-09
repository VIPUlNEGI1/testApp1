import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Colors from '@/Theme/Colors';

interface StateMessagesProps {
  loading: boolean;
  error: any;
  isEmpty: boolean;
  rawCount: number;
  onRetry: () => void;
}

const StateMessages: React.FC<StateMessagesProps> = ({
  loading,
  error,
  isEmpty,
  rawCount,
  onRetry,
}) => {
  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.messageText}>Loading companies...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Error: {String(error)}</Text>
        <TouchableOpacity onPress={onRetry} style={styles.retryButton}>
          <Text style={styles.retryText}>Try again</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (isEmpty) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyText}>No companies found.</Text>
        <Text style={styles.emptySubText}>Raw count: {rawCount}</Text>
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  messageText: {
    color: Colors.companiesScreen.text,
    fontSize: 14,
  },

  errorText: {
    color: Colors.companiesScreen.errorText,
    fontSize: 14,
    marginBottom: 12,
  },

  retryButton: {
    marginTop: 8,
  },

  retryText: {
    color: Colors.companiesScreen.errorLinkText,
    fontWeight: '600',
  },

  emptyText: {
    color: Colors.companiesScreen.emptyStateText,
    fontSize: 14,
  },

  emptySubText: {
    fontSize: 12,
    color: Colors.companiesScreen.emptyStateSubText,
    marginTop: 8,
  },
});

export default StateMessages;
