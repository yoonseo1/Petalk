import React, {Component} from 'react';
import {Text,View,Image,StyleSheet,TouchableOpacity} from 'react-native';
import Header from '../header';
import { RadioButton } from 'react-native-paper';
import {DrawerActions} from 'react-navigation-drawer';

export default function HomeScreen() {
  const [checked, setChecked] = React.useState('first');
  return (
    <View>
      <Header/>
    </View>
  );
}

const styles = StyleSheet.create({
    header:{
        width:150,
        height:60,

    }
})
