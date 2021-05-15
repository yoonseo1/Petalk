import React, {Component} from 'react';
import {Text,View,} from 'react-native';
import Header from '../header';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'white' }}>
      <Header/>
      <Text>Home!</Text>
    </View>
  );
}

