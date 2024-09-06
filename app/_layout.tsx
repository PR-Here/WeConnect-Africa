import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(profile)/About"
          options={{ headerShown: true, title: 'About Us', headerBackTitle: 'Back' }}
        />
        <Stack.Screen
          name="(profile)/BalanceTransfer"
          options={{ headerShown: true, title: 'Balance Transfer', headerBackTitle: 'Back' }}
        />
        <Stack.Screen
          name="(profile)/CreditBalance"
          options={{ headerShown: true, title: 'Credit Balance', headerBackTitle: 'Back' }}
        />
        <Stack.Screen
          name="(profile)/Profile"
          options={{ headerShown: true, title: 'Profile', headerBackTitle: 'Back' }}
        />
        <Stack.Screen
          name="(profile)/Report"
          options={{ headerShown: true, title: 'Report', headerBackTitle: 'Back' }}
        />
        <Stack.Screen
          name="(profile)/Setting"
          options={{ headerShown: true, title: 'Settings', headerBackTitle: 'Back' }}
        />
        <Stack.Screen
          name="(profile)/Support"
          options={{ headerShown: true, title: 'Help & Support', headerBackTitle: 'Back' }}
        />
        <Stack.Screen
          name="(profile)/TransferHistory"
          options={{ headerShown: true, title: 'Transfer History', headerBackTitle: 'Back' }}
        />
        <Stack.Screen
          name="(login)/Login"
          options={{ headerShown: true, title: 'Login', headerBackTitle: 'Back' }}
        />
        <Stack.Screen
          name="(login)/OtpVerify"
          options={{ headerShown: true, title: 'OTP Verification', headerBackTitle: 'Back' }}
        />
      </Stack>
    </ThemeProvider>
  );
}
