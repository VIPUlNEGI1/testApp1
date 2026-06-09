import { Config as AppConfig } from 'react-native-config';

// Support either API_BASE_URL or BASE_URL env keys and fallback to the known endpoint.
const Config = {
  BASE_URL:
    AppConfig.API_BASE_URL || AppConfig.BASE_URL || 'https://apex.metricinfo.com',
};

console.log('Config.BASE_URL', Config.BASE_URL);
export default Config;
