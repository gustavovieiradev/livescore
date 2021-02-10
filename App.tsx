import React from 'react';
import { useFonts } from 'expo-font';
import { Montserrat_500Medium, Montserrat_400Regular, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';

import Splash from './src/pages/Splash';
import Login from './src/pages/Login';

export default function App() {

  const [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_400Regular,
    Montserrat_600SemiBold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Login />
  );
}
