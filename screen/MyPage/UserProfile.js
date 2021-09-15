import React, {Component} from 'react';
import {Text,View,TouchableOpacity, StyleSheet, TextInput, Alert, Image } from 'react-native';
import Header from '../header';
import Icon from 'react-native-vector-icons/Foundation';

const UserProfile = () => {
    
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'white' }}>
     <Header/>
    
     <Image source={require("../../resource/img/cat.png")} style={styles.catImg} />
     <TouchableOpacity
        style = {styles.button}
        onPress={()=>Alert.alert('비밀번호변경?')}
      >
        <Text style = {styles.changepasswd}>비밀번호 변경</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style = {styles.button}
        onPress={()=>Alert.alert('로그아웃?')}
      >
        <Text style = {styles.changepasswd}>로그아웃</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style = {styles.button}
        onPress={()=>null}
      >
        <Text style = {styles.changepasswd}>개인정보보호정책</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=>Alert.alert('계정삭제?')}
      >
        <Text style = {styles.deleteaccount}>계정삭제</Text>
      </TouchableOpacity>
      
    </View>
  );
}
export default UserProfile;

const styles = StyleSheet.create({
    
    catImg: {
        height:300,
        width:300,
        marginBottom: 10

    },
    button: {
        //borderRadius: 1,
        borderWidth: 0.5,
        width: '95%',
        height:50,
        backgroundColor: 'white',
        borderColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
        //marginTop: 1,
        elevation: 1,
        flexDirection:'row'
    },
    viewstyle: {
        width: '100%',
        marginLeft: 20,
        marginBottom: 20,
        marginTop: 10
    },
    changepasswd: {
        fontSize: 15,
        color: '#304674'
    },
    deleteaccount:{
        margin:10,
        marginLeft:310,
        marginRight:19,
        fontSize: 15,
        color:'#304674',
    }
   
    
})