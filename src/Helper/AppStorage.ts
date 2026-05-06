import {createMMKV} from 'react-native-mmkv'


const storage = createMMKV({id: 'NexEduHub'})

/* ---------------- ZUSTAND STORAGE ---------------- */

export const zustandStorage = {
  setItem: (key: string, value: string) => storage.set(key, value),
  getItem: (key: string) => storage.getString(key) ?? null,
  removeItem: (key: string) => storage.remove(key)
}

/* ---------------- STORAGE KEYS ---------------- */

export const AppStorageKeys = {
  TOKEN: '@token',
  USER_ID: '@user_id',
  PHONE: '@phone',
  KYC_STATUS: '@kyc_status',
  FCM_TOKEN: '@fcm_token',
  LOCATION_PERMISSION: '@location_permission',
  
}

/* ---------------- TYPES ---------------- */

export type AddressData = {
  type: 'Point';
  coordinates: [number, number];
  city: string;
  address: string;
}

 
export default storage
