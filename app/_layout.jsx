import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    inter: require("../assets/fonts/Inter_18pt-Regular.ttf"),
    "inter-bold": require("../assets/fonts/Inter_18pt-Bold.ttf"),
    "inter-semi-bold": require("../assets/fonts/Inter_18pt-SemiBold.ttf"),
    "inter-light": require("../assets/fonts/Inter_18pt-Light.ttf"),
    "inter-medium": require("../assets/fonts/Inter_18pt-Medium.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
