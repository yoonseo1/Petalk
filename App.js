import React, {Component} from 'react';
import {Text,View,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screen/Home/HomeScreen';

import MemoScreen from './screen/Memo/MemoScreen';

import MyPage from './screen/MyPage/UserProfile';
import Join from './screen/MyPage/Join';
import Login from './screen/MyPage/Login';

import CommunityScreen from './screen/Community/CommunityScreen';

import MyPetScreen from './screen/MyPet/MyPet';
import Feedback from './screen/MyPet/Feedback';

import Icon from 'react-native-vector-icons/Foundation';
import Icons from 'react-native-vector-icons/MaterialIcons';


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
        name="MyPet"
        options={{
          tabBarLabel: 'Pet',
          tabBarIcon: ({ color, size }) => (
            <Icons name="pets" color={color} size={size} />
          ),
        }}
      >
       {(props) => <MyPetScreen {...props} />}
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
      <Tab.Screen 
        name="MyPage"
        component={MyPageStackScreen}
        options={{
          tabBarLabel: 'MyPage',
          tabBarIcon: ({ color, size }) => (
            <Icons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const MyPageStack = createStackNavigator();

function MyPageStackScreen() {
  return (
    <MyPageStack.Navigator>
      <MyPageStack.Screen name="Join" component={Join} />
      <MyPageStack.Screen name="Login" component={Login} />
    </MyPageStack.Navigator>
  );
} 

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
