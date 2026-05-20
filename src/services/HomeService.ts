import APICall from '@/Network/APICall';
import EndPoints from '@/Network/EndPoints';
import Config from '@/Config/Config';

const getHomeData = async () => {
  const url = `${Config.BASE_URL}${EndPoints.home}`;
  console.log('🔍 Making API call to:', url);

  try {
    const response = await APICall('get', {}, EndPoints.home);
    console.log('✅ API Success:', response);
    return response.data;
  } catch (error) {
    console.error('❌ API Error:', error);
    throw error;
  }
};

export default getHomeData;
