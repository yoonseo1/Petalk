import React, {Component} from 'react';
import {Text,View,TouchableOpacity, StyleSheet,Alert } from 'react-native';
import * as ImagePicker from "react-native-image-picker"

export default function TranslateScreen() {
  const [response, setResponse] = React.useState(null);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'white' }}>
      <TouchableOpacity
        style = {styles.button}
        onPress={()=> ImagePicker.launchImageLibrary({mediaType: 'video'}, (response) => {
          setResponse(response);
        })}

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