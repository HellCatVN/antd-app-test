import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import React from 'react';
import { View, Text } from 'react-native';
import { SearchBar } from '@ant-design/react-native';
import Main from './Main';

export default function Home() {
  const onHorizontalSelectedIndexChange = (index) => {
    /* tslint:disable: no-console */
    console.log('horizontal change to', index);
  };

  return (
    <View style={{ marginTop: 50 }}>
      <SearchBar defaultValue="" placeholder="Tìm Kiếm" cancelText="Hủy" />
      <Text>Home</Text>
    </View>
  );
}
