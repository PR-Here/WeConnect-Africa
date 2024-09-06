import { Platform, Share } from "react-native";

export const shareAppLink = async () => {
  try {
    const appLink = Platform.OS === 'android'
      ? 'https://play.google.com/store/apps/details?id=com.yourapp.package'
      : 'https://apps.apple.com/app/idYourAppID';

    const result = await Share.share({
      message: 'Check out our app!',
      url: appLink,
    });

    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        console.log(`Shared via ${result.activityType}`);
      } else {
        console.log('Shared');
      }
    } else if (result.action === Share.dismissedAction) {
      console.log('Dismissed');
    }
  } catch (error) {
    console.error('Error sharing:', error.message);
  }
};


