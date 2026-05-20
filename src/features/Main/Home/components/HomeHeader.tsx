import React, { memo, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Platform,
  Animated,
  Easing,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '@/Theme/Colors';
import { SvgFromXml } from 'react-native-svg';
import SVGByteCode from '@/Helpers/SVGByteCode';

export interface HomeHeaderProps {
  userName: string;
  greeting: string;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSearchPress?: () => void;
  onNotificationPress: () => void;
  onProfilePress?: () => void;
  paddingTop: number;
}

const HomeHeader: React.FC<HomeHeaderProps> = memo(
  ({
    userName,
    greeting,
    searchQuery,
    onSearchChange,
    onSearchPress,
    onNotificationPress,
    onProfilePress,
    paddingTop,
  }) => {
    const floatingAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(floatingAnim, {
            toValue: -8,
            duration: 1800,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),

          Animated.timing(floatingAnim, {
            toValue: 0,
            duration: 1800,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
        ]),
      ).start();
    }, [floatingAnim]);

    return (
      <LinearGradient
        colors={['#071226', '#08152F', '#0A1B3F']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.container, { paddingTop }]}
      >
        {/* Header */}
        <View style={styles.headerRow}>
          <View style={styles.userInfo}>
            <Text style={styles.greeting}>{greeting}</Text>

            <Text numberOfLines={1} style={styles.userName}>
              {userName}
            </Text>
          </View>

          <View style={styles.headerActions}>
            {/* Notification */}
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.actionButton}
              onPress={onNotificationPress}
            >
              <LinearGradient
                colors={['rgba(255,255,255,0.12)', 'rgba(255,255,255,0.06)']}
                style={styles.actionGradient}
              >
                <Text style={styles.actionIcon}>🔔</Text>

                <View style={styles.notificationDot} />
              </LinearGradient>
            </TouchableOpacity>

            {/* Profile */}
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.actionButton}
              onPress={onProfilePress}
            >
              <LinearGradient
                colors={['rgba(255,255,255,0.12)', 'rgba(255,255,255,0.06)']}
                style={styles.actionGradient}
              >
                <Text style={styles.actionIcon}>👤</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>

        {/* AI Card */}
        <LinearGradient
          colors={['rgba(255,255,255,0.10)', 'rgba(255,255,255,0.05)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.aiCard}
        >
          <View style={styles.aiTopRow}>
            <View style={styles.aiLeft}>
              <View style={styles.botIconContainer}>
                <LinearGradient
                  colors={['rgba(255,255,255,0.10)', 'rgba(255,255,255,0.05)']}
                  style={styles.botIconGradient}
                >
                  <SvgFromXml xml={SVGByteCode.Robot} width={28} height={28} />
                </LinearGradient>
              </View>
              <View style={styles.aiTextContainer}>
                <Text style={styles.aiSubtitle}>Your A.I buddy</Text>

                <Text style={styles.aiTitle}>
                  Start With <Text style={styles.aiBrandText}>NexEdu</Text>
                </Text>
              </View>
            </View>
            <Animated.View
              style={{
                transform: [{ translateY: floatingAnim }],
              }}
            >
              <TouchableOpacity activeOpacity={0.85}>
                <View style={styles.starButton}>
                  <SvgFromXml xml={SVGByteCode.Star} width={28} height={28} />
                </View>
              </TouchableOpacity>
            </Animated.View>
          </View>
          <View style={styles.searchWrapper}>
            <View style={styles.leftIcons}>
              <TouchableOpacity activeOpacity={0.7}>
                <SvgFromXml xml={SVGByteCode.camera} width={25} height={25} />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7}>
                <SvgFromXml xml={SVGByteCode.Mic} width={25} height={25} />
              </TouchableOpacity>
            </View>

            <TextInput
              value={searchQuery}
              onChangeText={onSearchChange}
              onFocus={onSearchPress}
              placeholder="Ask an expert..."
              placeholderTextColor="rgba(255,255,255,0.35)"
              style={styles.searchInput}
              selectionColor={Colors.white}
            />
            <TouchableOpacity activeOpacity={0.8} onPress={onSearchPress}>
              <LinearGradient colors={['#1D4ED8', '#2563EB', '#3B82F6']} style={styles.sendButton}>
                <SvgFromXml xml={SVGByteCode.Flight} width={20} height={20} />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </LinearGradient>
    );
  },
);

export default memo(HomeHeader);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    overflow: 'hidden',
  },

  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },

  userInfo: {
    flex: 1,
  },

  greeting: {
    color: Colors.textMuted,
    fontSize: 16,
    fontWeight: '500',
  },

  userName: {
    color: Colors.white,
    fontSize: 25,
    fontWeight: '800',
  },

  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  actionButton: {
    marginLeft: 12,
  },

  actionGradient: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.iconGradient[0],
    backgroundColor: 'rgba(187, 184, 184, 0.06)',
  },

  actionIcon: {
    fontSize: 14,
  },

  notificationDot: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 8,
    height: 8,
    borderRadius: 4,
  },

  aiCard: {
    borderRadius: 32,
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    backgroundColor: 'rgba(255,255,255,0.06)',
    marginBottom: 16,
  },

  aiTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  aiLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  botIconContainer: {
    marginRight: 10,
  },

  botIconGradient: {
    width: 45,
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },

  aiTextContainer: {
    flex: 1,
  },

  aiSubtitle: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },

  aiTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
  },

  aiBrandText: {
    color: '#7EA6FF',
  },
  starButton: {
    width: 50,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    shadowColor: Colors.brandLightI,
    shadowOpacity: 0.6,
    shadowRadius: 18,
    shadowOffset: {
      width: 0,
      height: 8,
    },

    elevation: 12,
  },

  starIcon: {
    fontSize: 20,
  },

  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 52,

    paddingLeft: 18,
    paddingRight: 14,

    borderRadius: 16,

    backgroundColor: 'rgba(255,255,255,0.08)',

    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  },

  leftIcons: {
    marginRight: 14,
    flexDirection: 'row',
    gap: 10,
  },

  searchInput: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',

    paddingVertical: Platform.OS === 'ios' ? 18 : 12,
  },

  sendButton: {
    width: 42,
    height: 42,
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: Colors.brandLightI,
    shadowOpacity: 0.6,
    shadowRadius: 18,
    shadowOffset: {
      width: 0,
      height: 6,
    },

    elevation: 12,
  },
});
