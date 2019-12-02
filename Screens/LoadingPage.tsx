import React, { Component } from 'react';
import { Text,StyleSheet, ActivityIndicator,ImageBackground,Image } from 'react-native';
// import { Spinner } from 'native-base';
// import { bac } from '../assets';
// import { copyFile } from 'fs';

interface IProps{
  navigation:any
}
export default class Home extends Component <IProps>{
 

  componentDidMount(){
    setTimeout(()=>{
    this.props.navigation.navigate('TicToeSwitch')
    },2000)
    
  }

  render() {
    return (
       <ImageBackground source={require('../assets/backgroundc.jpg')} style={styles.container}> 
          <Image source={require('../assets/logotic.jpeg')}/>  
          
          <Text style={styles.text}>Tic Toc Toe 😁 </Text>
          <ActivityIndicator size="large" color="#ede6e9" style={{paddingTop:90}}/>
          <Text style={[styles.text,{paddingTop:0,fontSize:20}]}>Loading...</Text>
       </ImageBackground>
     
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center", 
    alignItems: "center",
  },
  text:{
    fontSize:30,
    fontWeight:'bold',
    paddingTop:60,
    color:'white',
    
  }

})


