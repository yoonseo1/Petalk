import React, { useState, useEffect}  from 'react';
import {Text,View,Image,StyleSheet,Dimensions,TouchableOpacity,Platform,Modal,Pressable,TextInput} from 'react-native';
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


const MyPage=()=> {

    const [entries, setEntries] = useState([]);
    const [modal, setModal] = useState(false);
    const [edit, setEdit] = useState(false);
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [gender, setGender] = useState();
    const [type, setType] = useState();
    const [info, setInfo] = useState();
    console.log(info)
    const clickEdit=(item)=>{
        console.log(name)
        setEdit(true)
        setName(item.props.name)
        console.log(name)
        setAge(item.props.age)
    }
    useEffect(() => {
        setEntries(ENTRIES1);
      }, []);
      
    const renderItem = ({item, index}, parallaxProps) => {
    return (
        
        <View style={styles.profile}>
            <Image source={item.url} style={styles.profileImg} />
            {edit ? 
            (<View>
                <View style={styles.editInput}>
                    <Text style = {styles.info}>Name : </Text>
                    <TextInput
                        style={styles.nameInput}
                        onChangeText={(value)=>{
                            setName(value)
                            // setInfo()
                            console.log(name)
                        }}
                        value={name}
                    />
                </View>
                <View style={styles.editInput}>
                    <Text style = {styles.info}>Age : </Text>
                    <TextInput
                        style={styles.nameInput}
                        onChangeText={(value)=>{
                            setAge(value)
                            console.log(age)
                        }}
                        value={age}
                    />
                </View>
                <View style={styles.editInput}>
                    <Text style = {styles.info}>Gender : </Text>
                    <TextInput
                        style={styles.nameInput}
                        onChangeText={(value)=>{
                            setGender(value)
                            console.log(gender)
                        }}
                        value={gender}
                    />
                </View>
                <View style={styles.editInput}>
                    <Text style = {styles.info}>Type : </Text>
                    <TextInput
                        style={styles.nameInput}
                        onChangeText={(value)=>{
                            setType(value)
                            console.log(type)
                        }}
                        value={type}
                    />
                </View>
            </View>)
            :
            (<View>
                <Text style = {styles.name}>{item.props.name}님</Text>
                <Text style = {styles.info}>Age : {item.props.age}살</Text>
                <Text style = {styles.info}>Gender : {item.props.gender}</Text>
                <Text style = {styles.info}>Type : {item.props.type}</Text>
            </View>)
            }
            {edit?
            (<TouchableOpacity style={styles.edit} onPress={()=>{
                setEdit(false)
                setEntries({
                    url: {uri:'https://placekitten.com/200/300'},
                    props:{
                        name: name,
                        age: age,
                        gender: gender,
                        type: type,
                    }})
            }}
            >
                <Icons name="done" color={'#304674'} size={25}/>
            </TouchableOpacity>)
            :
            (<TouchableOpacity 
                style={styles.edit} 
                onPress={()=>{
                    setName(item.props.name)
                    setAge(item.props.age)
                    setGender(item.props.gender)
                    setType(item.props.type)
                    setEdit(true)  
                }}
            >
                <Icons name="edit" color={'#304674'} size={25}/>
            </TouchableOpacity>)}
            
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
        <TouchableOpacity 
                style={styles.plus} 
                onPress={()=>{
                    setModal(true)  
                }}
            >
            <Icons name="add" color={'#304674'} size={25}/>
        </TouchableOpacity>
        <Modal
                style={styles.centeredView}
                visible={modal}
            >
                <View style={styles.plusModal}>
                <View style={styles.editProfile}>
                <Image source={{uri:'https://placekitten.com/200/300'}} style={styles.profileImg} />
                <View style={styles.editInput}>
                    <Text style = {styles.info}>Name : </Text>
                    <TextInput
                        style={styles.nameInput}
                        onChangeText={(value)=>{
                            setName(value)
                            // setInfo()
                            console.log(name)
                        }}
                        value={name}
                    />
                </View>
                <View style={styles.editInput}>
                    <Text style = {styles.info}>Age : </Text>
                    <TextInput
                        style={styles.nameInput}
                        onChangeText={(value)=>{
                            setAge(value)
                            console.log(age)
                        }}
                        value={age}
                    />
                </View>
                <View style={styles.editInput}>
                    <Text style = {styles.info}>Gender : </Text>
                    <TextInput
                        style={styles.nameInput}
                        onChangeText={(value)=>{
                            setGender(value)
                            console.log(gender)
                        }}
                        value={gender}
                    />
                </View>
                <View style={styles.editInput}>
                    <Text style = {styles.info}>Type : </Text>
                    <TextInput
                        style={styles.nameInput}
                        onChangeText={(value)=>{
                            setType(value)
                            console.log(type)
                        }}
                        value={type}
                    />
                </View>
                </View>
                <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModal(!modal)}
                >
                <Text style={styles.textStyle}>추가</Text>
                </Pressable>
                </View>
            </Modal>
    </View>
  );
}

export default MyPage;
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
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
    editProfile:{
        width:300,
        height:450,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    profileImg: {
        width: 150,
        height: 150,
        borderRadius: 75,
        margin:20   
    },
    editInput:{
        flexDirection:'row'
    },
    name:{
        fontSize: 20,
        color: 'black', 
        marginBottom:20,
        alignSelf:'center'
    },
    nameInput:{
        fontSize: 15,
        color: 'black', 
        marginBottom:Platform.OS === 'ios' ? 15:5,
        borderBottomWidth:1,
        width:150,
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
    },
    plusModal:{
        margin: 20,
        marginTop:Platform.OS === 'ios' ? 100:50,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    plus:{
        borderWidth:1,
        borderRadius:13,
    }
})