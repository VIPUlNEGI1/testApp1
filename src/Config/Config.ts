import { Config as AppConfig } from 'react-native-config';

const Config = {
  BASE_URL: AppConfig.API_BASE_URL,
};
console.log('Config.BASE_URL', Config.BASE_URL);
export default Config;
