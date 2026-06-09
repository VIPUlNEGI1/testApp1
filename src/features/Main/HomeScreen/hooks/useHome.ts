import { useState, useEffect } from 'react';

interface TimeInfo {
  checkIn: string;
  checkOut: string;
  workingHours: string;
}

interface UserInfo {
  name: string;
  isOnDuty: boolean;
  profileImage: string;
  officeImage: string;
}

interface LocationInfo {
  address: string;
}

export const useHome = () => {
  const [timeInfo, setTimeInfo] = useState<TimeInfo>({
    checkIn: '11:12 AM',
    checkOut: '--:--',
    workingHours: '04:43',
  });

  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: 'Jagadishgouda Mudigoudra',
    isOnDuty: true,
    profileImage: 'https://i.pravatar.cc/150?img=12',
    officeImage:
      'https://cdn-icons-png.flaticon.com/512/1534/1534959.png',
  });

  const [locationInfo, setLocationInfo] = useState<LocationInfo>({
    address:
      'XHJG+GJV, Racecourse, Gandhi Nagar, Bengaluru, Karnataka 560001, India',
  });

  const quickActions = [
    { id: 1, label: 'My Visit', icon: 'person' },
    { id: 2, label: 'Direct', icon: 'location' },
    { id: 3, label: 'Schedule', icon: 'calendar' },
  ];

  const handleCheckOut = () => {
    console.log('Check out tapped');
   
  };

  const handleMenuPress = () => {
    console.log('Menu pressed');
 
  };

  const handleActionPress = (actionId: number) => {
    console.log(`Action ${actionId} pressed`);
 
  };

  return {
    timeInfo,
    userInfo,
    locationInfo,
    quickActions,
    handleCheckOut,
    handleMenuPress,
    handleActionPress,
  };
};
