import { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/Types/types';

export type TabType = 'Phone/OTP' | 'Email/Password';

export const useLoginLogic = (navigation?: StackNavigationProp<RootStackParamList>) => {
  const [activeTab, setActiveTab] = useState<TabType>('Phone/OTP');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [countryCode, setCountryCode] = useState<string>('IN');
  const [callingCode, setCallingCode] = useState('+91');
  const [showCountryPicker, setShowCountryPicker] = useState(false);

  const handleLogin = () => {
    console.log('Login:', { activeTab, email, password });
    // Navigate to Home screen after successful login
    if (navigation) {
      navigation.navigate('Home');
    }
  };

  const switchTab = (tab: TabType) => {
    setActiveTab(tab);
  };

  return {
    // State
    activeTab,
    email,
    password,
    showPassword,
    phoneNumber,
    otpCode,
    countryCode,
    callingCode,
    showCountryPicker,

    // Setters
    setEmail,
    setPassword,
    setShowPassword,
    setPhoneNumber,
    setOtpCode,
    setCountryCode,
    setCallingCode,
    setShowCountryPicker,

    // Actions
    handleLogin,
    switchTab,
  };
};
