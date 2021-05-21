import React, {Component} from 'react';
import {Text,View,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screen/Home/HomeScreen';
import TranslateScreen from './screen/Translate/TranslateScreen';
import MemoScreen from './screen/Memo/MemoScreen';
import CommunityScreen from './screen/Community/CommunityScreen';

import Icon from 'react-native-vector-icons/Foundation';
import Icons from 'react-native-vector-icons/MaterialIcons';

import Feedback from './screen/Translate/Feedback';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator 
      initialRouteName='Home' 
      tabBarOptions={{
        activeTintColor: '#304674',
      }}
    >
      {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
      <Tab.Screen 
        name="Home" 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}>
       {(props) => <HomeScreen {...props} />}
      </Tab.Screen>
      <Tab.Screen 
        name="Translate"
        options={{
          tabBarLabel: 'Translate',
          tabBarIcon: ({ color, size }) => (
            <Icons name="pets" color={color} size={size} />
          ),
        }}
      >
       {(props) => <TranslateScreen {...props} />}
      </Tab.Screen>
      <Tab.Screen 
        name="Memo"
        options={{
          tabBarLabel: 'Memo',
          tabBarIcon: ({ color, size }) => (
            <Icon name="pencil" color={color} size={size} />
          ),
        }}
      >
       {(props) => <MemoScreen {...props} />}
      </Tab.Screen>
      <Tab.Screen 
        name="Community"
        options={{
          tabBarLabel: 'Community',
          tabBarIcon: ({ color, size }) => (
            <Icon name="comment" color={color} size={size} />
          ),
        }}
      >
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
