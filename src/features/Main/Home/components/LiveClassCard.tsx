import React, { memo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SvgFromXml } from 'react-native-svg';
import SVGByteCode from '@/Helpers/SVGByteCode';
import Colors from '@/Theme/Colors';

const LiveClassCard: React.FC = memo(() => {
  return (
    <View style={styles.container}>
       
      <View style={styles.header}>
        <View style={styles.titleContainer}>
       <View style={styles.iconContainer}>
          <SvgFromXml xml={SVGByteCode.VideoCamera} width={24} height={24} />
       </View>
          <Text style={styles.title}>Calculus Live Class</Text>
          <View style={styles.liveBadge}>
            <Text style={styles.liveText}>LIVE</Text>
          </View>
        </View>
      <View style={styles.content}>
        <Text style={styles.details}>Today 5:00 PM • 38 joined</Text>
        <TouchableOpacity style={styles.joinButton}>
          <Text style={styles.joinButtonText}>Join</Text>
        </TouchableOpacity>
      </View>
      </View>

    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryGradient[0],
    borderRadius: 16,
    padding: 14,
    marginBottom: 24,
    flexDirection: 'column',
    gap: 12,


  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.red,
    backgroundColor: Colors.redBatch,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginBottom: 12,
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.white,
    marginLeft: 8,
    flex: 1,
  },
  liveBadge: {
    backgroundColor: '#ef444481',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  liveText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  details: {
    fontSize: 14,
    color: Colors.textMuted,
    flex: 1,
  },
  joinButton: {
    backgroundColor: Colors.brand,
    borderRadius: 13,
    paddingHorizontal: 13,
    paddingVertical: 8,
  },
  joinButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default LiveClassCard;
