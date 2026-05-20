import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Animated,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/Types/types';
import Colors from '@/Theme/Colors';
import TabBar, { TabItem } from '@/Component/TabBar';
import Button from '@/Component/Button';
import { SvgFromXml } from 'react-native-svg';
import SVGByteCode from '@/Helpers/SVGByteCode';
import { CountryPicker } from 'react-native-country-codes-picker';
import { useLoginLogic, TabType } from './hooks/useLoginLogic';
import { useTabAnimation } from './hooks/useTabAnimation';

export default function LoginScreen({
  navigation,
}: {
  navigation: StackNavigationProp<RootStackParamList>;
}) {
  const insets = useSafeAreaInsets();
  const {
    activeTab,
    email,
    password,
    showPassword,
    phoneNumber,
    otpCode,
    countryCode,
    callingCode,
    showCountryPicker,
    setEmail,
    setPassword,
    setShowPassword,
    setPhoneNumber,
    setOtpCode,
    setCountryCode,
    setCallingCode,
    setShowCountryPicker,
    handleLogin,
    switchTab,
  } = useLoginLogic(navigation);

  const { animateTabSwitch, animatedStyle } = useTabAnimation();

  const tabs: TabItem[] = [
    { id: 'Phone/OTP', name: 'Phone/OTP' },
    { id: 'Email/Password', name: 'Email' },
  ];

  const renderPhoneForm = () => (
    <View style={styles.form}>
      <Text style={styles.label}>Phone Number</Text>
      <View style={styles.phoneInputContainer}>
        <TouchableOpacity style={styles.countryCode} onPress={() => setShowCountryPicker(true)}>
          <Text style={styles.countryCodeText}>{callingCode}</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.phoneInput}
          placeholder="98765 43210"
          placeholderTextColor={Colors.textMuted}
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>

      <Text style={styles.label}>OTP Code</Text>
      <View style={styles.passwordBox}>
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <SvgFromXml xml={SVGByteCode.LockOpen} width={20} height={20} />
          ) : (
            <SvgFromXml xml={SVGByteCode.Lock} width={20} height={20} />
          )}
        </TouchableOpacity>
        <TextInput
          style={{ flex: 1 }}
          placeholder="Enter OTP"
          placeholderTextColor={Colors.textMuted}
          secureTextEntry={!showPassword}
          keyboardType="number-pad"
          value={otpCode}
          onChangeText={setOtpCode}
        />
      </View>

      <TouchableOpacity style={styles.forgot}>
        <Text style={styles.forgotText}>Resend OTP?</Text>
      </TouchableOpacity>

      <Button
        title="Sign In"
        onPress={handleLogin}
        variant="gradient"
        size="large"
        style={styles.button}
      />
    </View>
  );

  const renderEmailForm = () => (
    <View style={styles.form}>
      <Text style={styles.label}>Email ID</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor={Colors.textMuted}
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Password</Text>
      <View style={styles.passwordBox}>
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <SvgFromXml xml={SVGByteCode.LockOpen} width={20} height={20} />
          ) : (
            <SvgFromXml xml={SVGByteCode.Lock} width={20} height={20} />
          )}
        </TouchableOpacity>
        <TextInput
          style={{ flex: 1 }}
          placeholder="Enter password"
          placeholderTextColor={Colors.textMuted}
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={styles.forgot}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      <Button
        title="Sign In"
        onPress={handleLogin}
        variant="gradient"
        size="large"
        style={styles.button}
      />
    </View>
  );

  const renderForm = () => {
    return (
      <Animated.View style={animatedStyle}>
        {activeTab === 'Phone/OTP' ? renderPhoneForm() : renderEmailForm()}
      </Animated.View>
    );
  };

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />

      <LinearGradient
        colors={Colors.primaryGradient}
        style={[styles.header, { paddingTop: insets.top }]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <LinearGradient
          colors={['#60A5FA', '#3B82F6', '#1D4ED8']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.topGlow}
        />

        <View style={styles.iconWrapper}>
          <LinearGradient
            colors={['#60A5FA', '#3B82F6', '#1D4ED8']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.iconBox}
          >
            <SvgFromXml xml={SVGByteCode.Book} width={28} height={28} />
          </LinearGradient>
        </View>

        <Text style={styles.title}>Welcome back</Text>
        <Text style={styles.subtitle}>Sign in to continue learning</Text>
      </LinearGradient>

      <View style={styles.card}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30 }}
        >
          <TabBar
            backgroundColor={Colors.textSecondary}
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={(id) => animateTabSwitch(id as TabType, () => switchTab(id as TabType))}
          />

          {renderForm()}

          <View style={styles.signup}>
            <Text style={styles.signupText}>
              Don’t have an account? <Text style={styles.signupLink}>Sign Up</Text>
            </Text>
          </View>
        </ScrollView>
      </View>

      <CountryPicker
        show={showCountryPicker}
        pickerButtonOnPress={(item: any) => {
          setCountryCode(item.code);
          setCallingCode(item.dial_code);
          setShowCountryPicker(false);
        }}
        onBackdropPress={() => setShowCountryPicker(false)}
        inputPlaceholder="Search country"
        popularCountries={['IN', 'US', 'GB']}
        lang="en"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 200,
    paddingHorizontal: 20,
    backgroundColor: '#0B1C3D',
    overflow: 'hidden',
  },

  topGlow: {
    position: 'absolute',
    top: -80,
    right: -80,
    width: 160,
    height: 160,
    borderRadius: 160,
    opacity: 0.4,
    shadowColor: '#3B82F6',
    shadowOpacity: 1,
    shadowRadius: 120,
    elevation: 60,
  },

  iconWrapper: {
    marginBottom: 5,
  },

  iconBox: {
    width: 50,
    height: 50,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#3B82F6',
    shadowOpacity: 0.8,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    elevation: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#E5E7EB',
  },

  subtitle: {
    fontSize: 16,
    color: '#9CA3AF',
  },
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },

  form: {
    marginTop: 20,
  },

  label: {
    fontSize: 13,
    fontWeight: '800',
    marginBottom: 6,
    color: Colors.mediumGray,
  },

  input: {
    backgroundColor: '#f5f5f5',
    borderRadius: 16,
    borderWidth: 3,
    borderColor: Colors.textSecondary,
    padding: 15,
    marginBottom: 14,
  },

  phoneInputContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 14,
  },

  countryCode: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.mediumGray,
    paddingHorizontal: 15,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 3,
    borderColor: Colors.textSecondary,
  },

  countryCodeText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.mediumGray,
  },

  phoneInput: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 16,
    borderWidth: 3,
    borderColor: Colors.textSecondary,
    padding: 15,
    fontSize: 16,
    color: '#000',
  },

  passwordBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    paddingHorizontal: 14,
    marginBottom: 10,
    gap: 10,
    borderWidth: 3,
    borderColor: Colors.textSecondary,
    paddingVertical: 5,
  },

  forgot: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },

  forgotText: {
    color: Colors.brandLightI,
    fontWeight: '800',
    marginTop: 5,
  },

  button: {
    marginBottom: 20,
  },

  signup: {
    alignItems: 'center',
    marginTop: 20,
  },

  signupText: {
    color: '#777',
  },

  signupLink: {
    color: Colors.brandLightI,
    fontWeight: '700',
  },
});
