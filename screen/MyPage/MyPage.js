import React, { useState, useEffect}  from 'react';
import {Text,View,Image,StyleSheet,Dimensions,TouchableOpacity,Platform} from 'react-native';
import Header from '../header';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import Icons from 'react-native-vector-icons/MaterialIcons';

const ENTRIES1 = [
    {
        url: require("../../resource/img/kkong2.png"),
        props:{
            name: '꽁이',
            age: '1',
            gender: '여자',
            type: '스코티쉬 스트레이트',
        }
    },
    {
        url: require("../../resource/img/chorang.png"),
        props:{
            name: '초랭이',
            age: '12',
            gender: '남자였음',
            type: '말티즈',
          }
    },
    {
        url: {uri:'https://placekitten.com/200/300'},
        props:{
            name: '냥',
            age: '2',
            gender: '남자',
            type: '코리안 숏헤어',
          }
    },
  ];

const {width: screenWidth} = Dimensions.get('window');

const MyPage=props=> {

    const [entries, setEntries] = useState([]);

    useEffect(() => {
        setEntries(ENTRIES1);
      }, []);
    
    const renderItem = ({item, index}, parallaxProps) => {
    return (
        <View style={styles.profile}>
            <Image source={item.url} style={styles.profileImg} />
            <Text style = {styles.name}>{item.props.name}님</Text>
            <Text style = {styles.info}>Age : {item.props.age}살</Text>
            <Text style = {styles.info}>Gender : {item.props.gender}</Text>
            <Text style = {styles.info}>Type : {item.props.type}</Text>
            <TouchableOpacity style={styles.edit}>
                <Icons name="edit" color={'#304674'} size={25}/>
            </TouchableOpacity>
        </View>
    );
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'white' }}>
      <Header/>
      <View style={styles.carouselContainer}>
      <Carousel
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
        loop={true}
      />
    </View>
    </View>
  );
}

export default MyPage;
const styles = StyleSheet.create({
    profile:{
        width:300,
        height:450,
        borderWidth:1,
        borderRadius:10,
        borderColor: '#AFCFF1',
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F9FDFE', // 배경색이 없으면 그림자가 안보일 수 있음. //IOS
	    shadowColor: Platform.OS === 'ios' ? "#AFCFF1" : "black", //그림자색
        shadowOpacity: 1,//그림자 투명도
        shadowOffset: { width: 0, height: 4 }, //그림자 위치 //ANDROID
        elevation: 1,
        marginLeft:Platform.OS === 'ios' ? 8:30
    },
    profileImg: {
        width: 150,
        height: 150,
        borderRadius: 75,
        margin:30   
    },
    name:{
        fontSize: 20,
        color: 'black', 
        marginBottom:20,
    },
    info:{
        fontSize: 15,
        color: 'black', 
        margin:15,
        alignSelf:'flex-start'
    },
    carouselContainer:{
        width:310,
        height:480,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:30,
    },
    edit:{
        marginLeft:250,
        marginTop:10,
    }
})