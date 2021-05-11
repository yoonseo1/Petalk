import React, {Component} from 'react';
import {Text,View,TouchableOpacity, StyleSheet,Alert } from 'react-native';

export default function TranslateScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        style = {styles.button}
        onPress={()=>Alert.alert('업로드 하시겠습니까?')}
      >
        <Text>업로드</Text>
      </TouchableOpacity>
      <Text>Translate!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    width: 100,
    backgroundColor: 'white',
    borderColor: 'black',
    alignItems: 'center',
    paddingVertical: 15
  }
})
