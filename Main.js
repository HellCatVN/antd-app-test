import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Icon, TabBar } from '@ant-design/react-native';
import { FontAwesome } from '@expo/vector-icons';
import Home from './Home';
export default function Main() {
  const [selectedTab, setSelectedTab] = useState('redTab');

  const renderContent = (pageText) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
        <Text style={{ margin: 50 }}>{pageText}</Text>
      </View>
    );
  };

  const onChangeTab = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <TabBar
      unselectedTintColor="#949494"
      tintColor="#33A3F4"
      barTintColor="#f5f5f5"
    >
      <TabBar.Item
        icon={<FontAwesome name="home" size={22} />}
        selected={selectedTab === 'home'}
        onPress={() => onChangeTab('home')}
      >
        <Home />
      </TabBar.Item>
      <TabBar.Item
        icon={<FontAwesome name="commenting" size={22} />}
        selected={selectedTab === 'message'}
        onPress={() => onChangeTab('message')}
      >
        {renderContent('Message Tab')}
      </TabBar.Item>
      <TabBar.Item
        icon={<FontAwesome name="th" size={22} />}
        badge={99}
        selected={selectedTab === 'search'}
        onPress={() => onChangeTab('search')}
      >
        {renderContent('Search Tab')}
      </TabBar.Item>
      <TabBar.Item
        icon={<FontAwesome name="bell" size={22} />}
        selected={selectedTab === 'notification'}
        onPress={() => onChangeTab('notification')}
      >
        {renderContent('Notification Tab')}
      </TabBar.Item>
      <TabBar.Item
        icon={<FontAwesome name="user-circle" size={22} />}
        selected={selectedTab === 'user'}
        onPress={() => onChangeTab('user')}
      >
        {renderContent('User')}
      </TabBar.Item>
      <TabBar.Item
        icon={<FontAwesome name="ellipsis-h" size={22} />}
        selected={selectedTab === 'more'}
        onPress={() => onChangeTab('more')}
      >
        {renderContent('More')}
      </TabBar.Item>
    </TabBar>
  );
}
