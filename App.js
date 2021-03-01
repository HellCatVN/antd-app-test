import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Icon, SearchBar, TabBar } from '@ant-design/react-native';
import Main from './Main';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync(
        'antoutline',
        require('@ant-design/icons-react-native/fonts/antoutline.ttf')
      );
      await Font.loadAsync(
        'antfill',
        require('@ant-design/icons-react-native/fonts/antfill.ttf')
      );
      setIsReady(true);
    };
    loadFonts();
  }, []);

  return (
    <View>
      {isReady ? (
        <React.Fragment>
          <Main />
        </React.Fragment>
      ) : (
        <AppLoading />
      )}
    </View>
  );
}
