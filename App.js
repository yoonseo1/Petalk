import React, {Component} from 'react';
import {Text,View,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screen/Home/HomeScreen';
import TranslateScreen from './screen/Translate/TranslateScreen';
import MemoScreen from './screen/Memo/MemoScreen';
import CommunityScreen from './screen/Community/CommunityScreen';

import Feedback from './screen/Translate/Feedback';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Home'>
      {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
      <Tab.Screen name="Home">
       {(props) => <HomeScreen {...props} />}
      </Tab.Screen>
      <Tab.Screen name="Translate">
       {(props) => <Feedback {...props} />}
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
