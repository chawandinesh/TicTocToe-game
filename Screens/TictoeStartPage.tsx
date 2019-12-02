import React, { Component } from 'react'
import { View,Text,StyleSheet,ImageBackground,Button} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { AppLoading } from "expo";
import * as Font from "expo-font";

interface IProps{
  navigation : any
}
export default class Tictoe extends Component <IProps>{
  state={
    player1:'',
    player2:''
  }

  player1 =(e) =>{
    this.setState({
      player1:e
    })
  }
  player2 =(e) =>{
    this.setState({
      player2:e
    })
  }
  render() {
    return (
        <ImageBackground style={styles.container}>
          <Text style={styles.text}> Welcome to tic toc toe 🙏</Text>
          {/* <View  style={{backGroundColor:'white',width:60}}>
           <TextInput  placeholder="Enter Player1 Name" title='player1' editable onChangeText={(e)=>this.player1(e)}/>
          </View >
          <TextInput  style={{backGroundColor:'white',width:60}}title='player2' placeholder="Enter Player2 Name" onChangeText={(e)=>this.player2(e)}/> */}
         <View style={{paddingTop:40,fontSize:50,width:100,borderRadious:10}}>
            <Button
            title="START"
            onPress={()=>this.props.navigation.navigate('GameSwitch')}
            />
         </View>
        </ImageBackground>  
    )
  }
}

const styles = StyleSheet.create({
  container:{
    justifyContent: "center", 
    alignItems: "center",
    paddingTop:100
   
  },
  text:{
    fontSize:30,
    fontWeight:'bold',
    paddingTop:60,
      
  },
  
})


