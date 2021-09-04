import React, { useEffect, useState } from 'react';
import {Text,View,TouchableOpacity, StyleSheet, TextInput, Alert,Platform,ScrollView } from 'react-native';
import Header from '../header';

const postMember = (userId,userName,userNickName,userPassword,userEmail)=>{
    let data={
        "email": userEmail,
        "name": userName,
        "nickname": userNickName,
        "password": userPassword,
        "profileUrl": null,
        "userId": userId
    }
    fetch("http://10.0.2.2:8080/api/member/new",{
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

const Join = () => {
    const [userId, setUserId] = React.useState("");
    const [userPassword, setUserPassword] = React.useState("");
    const [userPasswordchk, setUserPasswordchk] = React.useState("");
    const [userName, setUserName] = React.useState("");
    const [userEmail, setUserEmail] = React.useState("");
    const [userNickName, setUserNickName] = React.useState("");
    const [checked, setChecked] = React.useState('first');
    const [text, onChangeText] = React.useState("");
    const [number, onChangeNumber] = React.useState(null);
    
  return (
    <View style={{ backgroundColor:'white' }}>
     <Header/>
     <ScrollView>
        <View style={styles.content}>
            <View style = {styles.question}>
                <Text style = {styles.questiontext}>이름</Text>
            </View>
            <View style = {styles.board}>
            <TextInput
                style={styles.input}
                onChangeText={(userName)=>setUserName(userName)}
                value={userName}
                placeholder = 'username'
            />
            </View>

            <View style = {styles.question}>
                <Text style = {styles.questiontext}>아이디</Text>
            </View>
            <View style = {styles.board}>
                <TextInput
                    style={styles.input}
                    onChangeText={(userId)=>setUserId(userId)}
                    value={userId}
                    placeholder = 'id'
                />
            </View>

            <View style = {styles.question}>
                <Text style = {styles.questiontext}>비밀번호</Text>
            </View>
            <View style = {styles.board}>
                <TextInput
                    style={styles.input}
                    onChangeText={(userPassword)=>setUserPassword(userPassword)}
                    value={userPassword}
                    placeholder = 'password'
                />
            </View>
            
            <View style = {styles.question}>
            <Text style = {styles.questiontext}>비밀번호 확인</Text>
            </View>
            <View style = {styles.board}>
                <TextInput
                    style={styles.input}
                    onChangeText={(userPasswordchk)=>setUserPasswordchk(userPasswordchk)}
                    value={userPasswordchk}
                    placeholder = 'password check'
                />
            </View>
            
            <View style = {styles.question}>
                <Text style = {styles.questiontext}>닉네임</Text>
            </View>
            <View style = {styles.board}>
                <TextInput
                    style={styles.input}
                    onChangeText={(userNickName)=>setUserNickName(userNickName)}
                    value={userNickName}
                    placeholder = 'nickname'
                />
            </View>

            <View style = {styles.question}>
                <Text style = {styles.questiontext}>이메일</Text>
            </View>
            <View style = {styles.board}>
                <TextInput
                    style={styles.input}
                    onChangeText={(userEmail)=>setUserEmail(userEmail)}
                    value={userEmail}
                    placeholder = 'email'
                />
            </View>

            <TouchableOpacity
                style = {styles.button}
                onPress={()=>postMember(userId,userName,userNickName,userPassword,userEmail)}
            >
                <Text style = {styles.font}>회원가입</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    </View>
  );
}
export default Join;

const styles = StyleSheet.create({
    question: {
        width: '95%',
        height: 40,
        justifyContent: 'center',
      
    },
    questiontext: {
        fontSize: 15,
        paddingLeft: 5,
        color: 'black'
    },
    select: {
        flexDirection: 'row',
        
        
    },
    input: {
        fontSize: 13,
        justifyContent:'center'
    },
    board: {
        paddingVertical: 7,
        borderWidth: 1,
        width: '95%',
        height: 50,
        borderColor: '#4C8ADB'
    },
    button: {
        
        borderRadius: 10,
        height: 50,
        width: '95%',
        backgroundColor: '#87A8DA',
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        elevation: 5
    },
    viewstyle: {
        width: '100%',
        marginLeft: 20,
        marginBottom: 20,
        marginTop: 10
    },
    font: {
        fontSize: 15,
        color: 'white'
    },
    content:{
        marginTop:Platform.OS === 'ios' ? 120 : 75,justifyContent: 'center', alignItems: 'center',
    }
   
    
})