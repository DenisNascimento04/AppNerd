import { useEffect, useState } from 'react';
import { Dimensions, LogBox, View } from 'react-native';
import AppLoading from 'expo-app-loading';
// import AsyncStorage from '@react-native-community/async-storage';
import { ComicNeue_300Light, ComicNeue_400Regular, ComicNeue_700Bold } from '@expo-google-fonts/comic-neue';
import { Oswald_700Bold, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { Roboto_400Regular, Roboto_700Bold, Roboto_100Thin_Italic, Roboto_500Medium_Italic, Roboto_700Bold_Italic } from '@expo-google-fonts/roboto';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';

import { Routes } from './src/routes';
import store from './src/store/index';
import { StatusBar } from 'expo-status-bar';
import { theme } from './src/themes';

LogBox.ignoreLogs(['Setting a timer']);
LogBox.ignoreLogs(['AsyncStorage has been']);

const { height } = Dimensions.get('window');

export default function App() {
  let [fontsLoaded] = useFonts({
    ComicNeue_300Light, 
    ComicNeue_400Regular, 
    ComicNeue_700Bold,
    Oswald_700Bold, 
    Oswald_400Regular,
    Roboto_400Regular, 
    Roboto_700Bold,
    Roboto_100Thin_Italic,
    Roboto_500Medium_Italic,
    Roboto_700Bold_Italic
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }else {
    return (
      <Provider store={store} >
        <StatusBar style='light' backgroundColor={theme.colors.fundo} />
        <Routes />
      </Provider>
      // <Testes />
    );
  }
}