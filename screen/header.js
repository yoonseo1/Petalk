import React, {Component} from 'react';
import {Text,View,Image,StyleSheet,TouchableOpacity} from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// function Feed() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Feed Screen</Text>
//     </View>
//   );
// }

// function Article() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Article Screen</Text>
//     </View>
//   );
// }
// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Feed" component={Feed} />
//       <Drawer.Screen name="Article" component={Article} />
//     </Drawer.Navigator>
//   );
// }
function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      </View>
    );
  }
  
  function NotificationsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }
  
const Header = ({navigation,route})=> {

  return (
    <View style={styles.header}>
        <TouchableOpacity
            onPress={()=>null}
        >
            <Image source={require('../resource/img/petalk.png')} style={styles.headerImg}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text>。。。</Text>
        </TouchableOpacity>
        {/* <NavigationContainer>
            <MyDrawer />
        </NavigationContainer> */}
      
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:60,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
        backgroundColor:'white',
        position:'absolute',
        top:50
    },
    headerImg:{
        width:150,
        height:60,

    }
})
