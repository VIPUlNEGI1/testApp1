import { createMMKV } from 'react-native-mmkv';

export const storage = createMMKV({
  id: 'NexEduHub',
});

export const STORAGE_KEYS = {
  TOKEN: '@token',
  USER_ID: '@user_id',
  KYC_STATUS: '@kyc_status',
  FCM_TOKEN: '@fcm_token',
  LOCATION_PERMISSION: '@location_permission',
} as const;
//    how to get the value of token from storage
// const token = storage.getString(STORAGE_KEYS.TOKEN);