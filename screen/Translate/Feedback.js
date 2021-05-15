import React, {Component} from 'react';
import {Text,View,TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper';


const Feedback = () => {
    const [checked, setChecked] = React.useState('first');
    const [text, onChangeText] = React.useState("");
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style = {styles.question}>
          <Text style = {styles.questiontext}>ㅇㅇ님의 감정상태는 어떤가요?</Text>
      </View>
       <View>
        <View style = {styles.select}>
            <RadioButton
                value="first"
                status={ checked === 'first' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('first')} 
            />
            <Text style = {styles.text}>골골(행복해!!)</Text> 
        </View>
        <View style = {styles.select}>
            <RadioButton
                value="second"
                status={ checked === 'second' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('second')}
            />
            <Text style = {styles.text}>야옹(배고파! 놀아줘!)</Text>
        </View>
        <View style = {styles.select}>
            <RadioButton
                value="third"
                status={ checked === 'third' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('third')}
            />
            <Text style = {styles.text}>트릴링(반가워!))</Text>
        </View>
        <View style = {styles.select}>
            <RadioButton
                value="fourth"
                status={ checked === 'fourth' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('fourth')}
            />
            <Text style = {styles.text}>채터링(사냥중이야!)</Text>
        </View>
        <View style = {styles.select}>
            <RadioButton
                value="fifth"
                status={ checked === 'fifth' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('fifth')}
            />
            <Text style = {styles.text}>옐링(투덜투덜!)</Text>
        </View>
        <View style = {styles.select}>
            <RadioButton
                value="sixth"
                status={ checked === 'sixth' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('sixth')}
            />
            <Text style = {styles.text}>하악질(경고해ㅡㅡ)</Text>
        </View>
        <View style = {styles.select}>
            <RadioButton
                value="seventh"
                status={ checked === 'seventh' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('seventh')}
            />
            <Text style = {styles.text}>오오옹(건들면 물거야!)</Text>
        </View>
      </View>
     <View style = {styles.question}>
          <Text style = {styles.questiontext}>petalk에게 한마디!</Text>
     </View>
     <View style = {styles.board}>
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
        />
     </View>
     <TouchableOpacity
        style = {styles.button}
        onPress={()=>Alert.alert('피드백 완료')}
      >
        <Text>완료</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Feedback;

const styles = StyleSheet.create({
    question: {
        width: '100%',
        height: 50,
        backgroundColor: '#85C1E9'
    },
    questiontext: {
        fontSize: 25
    },
    select: {
        flexDirection: 'row'
    },
    text: {
        paddingVertical: 7
    },
    input: {
        
    },
    board: {
        paddingVertical: 7,
        borderWidth: 1,
        width: '100%',
        borderRadius: 20,
        marginTop: 10
    },
    button: {
        borderWidth: 1,
        borderRadius: 10,
        height: 50,
        width: 100,
        backgroundColor: 'white',
        borderColor: 'black',
        alignItems: 'center',
        paddingVertical: 15,
        marginTop: 10,
        marginLeft: 270
    }
})
