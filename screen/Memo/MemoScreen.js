import React, {useState} from 'react';
import {FlatList, Text,View,TouchableOpacity,StyleSheet,StatusBar,SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Header from '../header';
import {Dimensions} from 'react-native';

const DATA = [
  {
    id: '1',
    title: '1월',
  },
  {
    id: '2',
    title: '2월',
  },
  {
    id: '3',
    title: '3월',
  },
  {
    id: '4',
    title: '4월',
  },
  {
    id: '5',
    title: '5월',
  },
  {
    id: '6',
    title: '6월',
  },
  {
    id: '7',
    title: '7월',
  },
  {
    id: '8',
    title: '8월',
  },
  {
    id: '9',
    title: '9월',
  },
  {
    id: '10',
    title: '10월',
  },
  {
    id: '11',
    title: '11월',
  },
  {
    id: '12',
    title: '12월',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <TouchableOpacity
        style = {styles.button}
        onPress={()=>null}
      >
        <Icons name="add" color={'black'} size={24} />
      </TouchableOpacity>
  </View>
);
const {width, height} = Dimensions.get('screen');

const MemoScreen = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
   
    <View style={styles.container}>
       <Header/>
        <View style={styles.list}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            
          />
        </View>
    </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 10,
    height: 400,
    borderRadius: 20,
  },
  title: {
    fontSize: 32,
  },
  button: {
        borderRadius: 100,
        height: 50,
        width: 50,
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '85%',
        marginLeft: '85%',
        
  },
  list: {
    height: height-80,
    marginTop: 80
  }
});

export default MemoScreen;

