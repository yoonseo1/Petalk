import React, {Component} from 'react';
import {Text,View,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screen/HomeScreen';
import TranslateScreen from './screen/TranslateScreen';
import MemoScreen from './screen/MemoScreen';
import CommunityScreen from './screen/CommunityScreen';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Home'>
      {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
      <Tab.Screen name="Home">
       {(props) => <HomeScreen {...props} />}
      </Tab.Screen>
      <Tab.Screen name="Translate">
       {(props) => <TranslateScreen {...props} />}
      </Tab.Screen>
      <Tab.Screen name="Memo">
       {(props) => <MemoScreen {...props} />}
      </Tab.Screen>
      <Tab.Screen name="Community">
       {(props) => <CommunityScreen {...props} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
