import React, {Component} from 'react';
import {Text,View,Image,StyleSheet} from 'react-native';
import Header from '../header';


export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'white' }}>
      <Header/>
      <Image source={require("../../resource/img/cat.png")} style={styles.catImg} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  catImg: {
    width: 350,
    height: 350,
    marginRight: 15
  }
})