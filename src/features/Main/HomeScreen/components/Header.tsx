import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '@/Theme/Colors';

interface HeaderProps {
  userInfo: {
    name: string;
    isOnDuty: boolean;
    profileImage: string;
    officeImage: string;
  };
  onMenuPress: () => void;
}

const Header: React.FC<HeaderProps> = ({ userInfo, onMenuPress }) => {

  return (
    <View style={styles.header}>
   
      <View style={styles.topRow}>
        <MaskedView
          maskElement={
            <Text style={styles.logo}>MetricInfo</Text>
          }
        >
          <LinearGradient
            colors={[
              Colors.homeScreen.primaryGradient1,
              Colors.homeScreen.primaryGradient2,
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={[styles.logo, { opacity: 0 }]}>
              MetricInfo
            </Text>
          </LinearGradient>
        </MaskedView>
        <TouchableOpacity onPress={onMenuPress}>
          <Text style={styles.menu}>⋮</Text>
        </TouchableOpacity>
      </View>
 
      <View style={styles.profileSection}>
        <View>
          <Image
            source={{
              uri: userInfo.profileImage,
            }}
            style={styles.profile}
          />

          <Text style={styles.greeting}>{userInfo.name}</Text>

          <Text style={styles.duty}>
            {userInfo.isOnDuty ? 'You are on duty...' : 'You are off duty'}
          </Text>
        </View>

        <Image
          source={{
            uri: userInfo.officeImage,
          }}
          style={styles.officeImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logo: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.homeScreen.logo,
  },

  menu: {
    fontSize: 30,
    fontWeight: '700',
    color: Colors.homeScreen.menu,
  },

  profileSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },

  profile: {
    width: 90,
    height: 90,
    zIndex: 1,
    borderRadius: 45,
  },

  officeImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },

  greeting: {
    marginTop: 12,
    fontSize: 19,
    zIndex: 1,
    fontWeight: '700',
    color: Colors.homeScreen.text,
  },

  duty: {
    color: Colors.homeScreen.dutyStatusSuccess,
    marginTop: 4,
    fontSize: 16,
    zIndex: 1,
  },
});

export default Header;
