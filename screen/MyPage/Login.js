import React, {Component} from 'react';
import {Text,View,TouchableOpacity, StyleSheet, TextInput, Alert, Image } from 'react-native';
import Header from '../header';
import Icon from 'react-native-vector-icons/Foundation';

const Login = ({navigation}) => {
    const [checked, setChecked] = React.useState('first');
    const [id, onChangeId] = React.useState("");
    const [password, onChangePw] = React.useState("");
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'white' }}>
     <Header/>
     <View style = {styles.inputBox}>
        <Text style = {styles.id}>ID</Text>
        <TextInput
            style={styles.input}
            onChangeText={onChangeId}
            value={id}
        />
     </View>
     <View style = {styles.inputBox}>
        <Text style = {styles.text}>PW</Text>
        <TextInput
            style={styles.input}
            onChangeText={onChangePw}
            value={password}
        />
     </View>
     
     <TouchableOpacity
        style = {styles.button}
        onPress={()=>Alert.alert('로그인 완료')}
      >
        <Image source={require("../../resource/img/cat.png")} style={styles.catImg} />
        <Text style = {styles.login}>로그인</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=>navigation.navigate('Join')}
      >
        <Text style = {styles.join}>회원가입</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style = {styles.kakao}
        onPress={()=>Alert.alert('카카오로그인')}
      >
        <Image source={require("../../resource/img/kakao.png")} style={styles.kakaoImg} />
        
      </TouchableOpacity>
      <TouchableOpacity
        style = {styles.naver}
        onPress={()=>Alert.alert('네이버로그인')}
      >
        <Image source={require("../../resource/img/naver2.png")} style={styles.naverImg} />
        
      </TouchableOpacity>
    </View>
  );
}
export default Login;

const styles = StyleSheet.create({
    
    id: {
        alignSelf:'center',
        margin:6,
        marginHorizontal:10,
        marginRight:19,
        fontSize: 15,
        color:'#304674',
    },
    text: {
        alignSelf:'center',
        margin:6,
        marginHorizontal:10,
        fontSize: 15,
        color:'#304674',
    },
    input: {
        // backgroundColor:'yellow',
        width:300,
        fontSize:20
    },
    inputBox: {
        // paddingVertical: 7,
        borderWidth: 1,
        width: '95%',
        height:50,
        borderRadius: 10,
        marginTop: 10,
        borderColor: '#4C8ADB',
        flexDirection:'row'
    },
    button: {
        borderRadius: 10,
        width: '95%',
        height:50,
        backgroundColor: '#87A8DA',
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        elevation: 5,
        flexDirection:'row'
    },
    kakao: {
        borderRadius: 10,
        width: '95%',
        height:50,
        backgroundColor: '#ffe812',
        // borderColor: 'black',
        alignItems: 'center',
        // justifyContent: 'center',
        marginTop: 10,
        elevation: 5,
        flexDirection:'row',
        position:'absolute',
        bottom:70
    },
    naver: {
        borderRadius: 5,
        width: '95%',
        height:50,
        backgroundColor: '#03C75A',
        // borderColor: 'black',
        alignItems: 'center',
        // justifyContent: 'center',
        marginTop: 10,
        elevation: 5,
        flexDirection:'row',
        position:'absolute',
        bottom:10
    },
    catImg:{
        height:50,
        width:50,
        marginLeft:-15,
    },
    kakaoImg:{
        height:50,
        resizeMode:'contain'
    },
    naverImg:{
        height:50,
        width:140,
        resizeMode:'cover'
    },
    viewstyle: {
        width: '100%',
        marginLeft: 20,
        marginBottom: 20,
        marginTop: 10
    },
    login: {
        fontSize: 15,
        color: 'white'
    },
    join:{
        margin:10,
        marginLeft:310,
        marginRight:19,
        fontSize: 15,
        color:'#304674',
    }
   
    
})
