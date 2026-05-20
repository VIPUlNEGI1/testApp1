import { toast, ToastPosition } from '@backpackapp-io/react-native-toast';
export const showToast = (message: string) => {
  toast(message, {
    duration: 3000,
    position: ToastPosition.TOP,
  });
};
