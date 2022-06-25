import { LogBox } from 'react-native';
import AppLoading from 'expo-app-loading';
import { ComicNeue_300Light, ComicNeue_400Regular, ComicNeue_700Bold } from '@expo-google-fonts/comic-neue';
import { Oswald_700Bold, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { Rubik_300Light, Rubik_700Bold } from '@expo-google-fonts/rubik';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';

import { Routes } from './src/routes';
import store from './src/store/index';

LogBox.ignoreLogs(['Setting a timer'])

export default function App() {
  let [fontsLoaded] = useFonts({
    ComicNeue_300Light, 
    ComicNeue_400Regular, 
    ComicNeue_700Bold,
    Oswald_700Bold, 
    Oswald_400Regular,
    Rubik_300Light,
    Rubik_700Bold
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }else {
    return (
      <Provider store={store} >
        <Routes />
      </Provider>
    );
  }
}