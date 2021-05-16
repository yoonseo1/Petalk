import React, {Component} from 'react';
import {Text,View,TouchableOpacity, StyleSheet,Image, Modal } from 'react-native';
import Header from '../header';
import * as ImagePicker from "react-native-image-picker"

export default function TranslateScreen() {

  const [response, setResponse] = React.useState(null);
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'white' }}>
      <Header/>
        {/* <View style={styles.response}>
          <Text>Res: {JSON.stringify(response)}</Text>
        </View> */}

        {response && (
          <View style={styles.image}>
            <Image
              style={{borderRadius:10, width: 300, height: 250}}
              source={{uri: response.uri}}
            />
          </View>
        )}
      <View style={styles.buttons}>
      <TouchableOpacity
        style = {styles.button}
        onPress={()=> setModalVisible(true)}

      >
        {response ? (<Text>재업로드</Text>):(<Text>업로드</Text>)}
      </TouchableOpacity>
      {response ? (<TouchableOpacity
        style = {styles.button}
        onPress={()=> ImagePicker.launchCamera({mediaType: 'video'}, (response) => {
          setResponse(response);
        })}

      >
        <Text>번역하기</Text>
      </TouchableOpacity>)
      :
      null}
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        presentationStyle='overFullScreen'
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          
            <TouchableOpacity
              style={styles.camera}
              onPress={() => 
                ImagePicker.launchCamera({mediaType: 'video'}, (response) => {
                  setResponse(response);
                  setModalVisible(false);
                })
              }
            >
              <Text style={styles.textStyle}>촬영</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.gallery}
              onPress={() => ImagePicker.launchImageLibrary({mediaType: 'video'}, (response) => {
                setResponse(response);
                setModalVisible(false);
              })}
            >
              <Text style={styles.textStyle}>갤러리</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.cancle, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>취소</Text>
            </TouchableOpacity>
        
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons:{
    width:'60%',
    flexDirection:'row',
    justifyContent:'space-around'
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    width: 100,
    backgroundColor: 'white',
    borderColor: 'black',
    alignItems: 'center',
    paddingVertical: 15
  },
  image: {
    marginVertical: 24,
    alignItems: 'center',
  },
  response: {
    marginVertical: 16,
    marginHorizontal: 8,
  },
  modalView: {
    backgroundColor:'white',
    height: 200,
    width:'100%',
    borderWidth:1,
    borderRadius:10,
    position:'absolute',
    bottom:0
  },
  camera:{
    height:60,
    alignItems:'center',
    paddingVertical:20,
  },
  gallery:{
    height:60,
    alignItems:'center',
    paddingVertical:20,
    borderTopWidth:1,
    borderBottomWidth:1,
  },
  cancle:{
    height:60,
    alignItems:'center',
    paddingVertical:20
  },
  textStyle:{
    fontSize:15
  }
})