import React, {Component} from 'react';
import {Text,View,TouchableOpacity, StyleSheet,Image, Modal } from 'react-native';
import Header from '../header';
import * as ImagePicker from "react-native-image-picker"
import Icons from 'react-native-vector-icons/MaterialIcons';

const postVideo = (duration,fileName,fileUri,memberId,size)=>{

  let data={
    "duration": duration,
    "fileName": fileName,
    "fileUri": fileUri,
    "memberId": 1,
    "size": size
  }
  console.log("data",data);
  fetch("http://10.0.2.2:8080/api/video/upload",{
                  method : "POST",
                  body : JSON.stringify(data),
                  headers:{
                      'Content-Type': 'application/json'
                  }
              })
              .then(res => res.json())
              .then(res => console.log(res))
              .catch((error)=>{
                  console.log("Api call error");
                  console.log(error.message);
              });
}
export default function TranslateScreen() {

  const [response, setResponse] = React.useState(null);
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'white' }}>
      <Header/>
         <View style={styles.response}>
          <Text>Res: {JSON.stringify(response)}</Text>
        </View> 
        {response ? null:(<Image source={require("../../resource/img/cat.png")} style={styles.catImg} />)}
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
        {response ? (<Icons name="refresh"  size={30} />):(<Text>업로드</Text>)}
      </TouchableOpacity>
      {response ? (<TouchableOpacity
        style = {styles.button}
        onPress={()=> ImagePicker.launchCamera({mediaType: 'video'}, (response) => {
          setResponse(response);
        })}

      >
        <Icons name="done"  size={30} />
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
                  console.log(response);
                  postVideo(response.duration,response.fileName,response.uri,1,response.fileSize);
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
  catImg: {
    width: 350,
    height: 350,
  },
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
    paddingVertical: 10
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