import React, { Component } from 'react'
import { View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import {MaterialCommunityIcons as Icon} from 'react-native-vector-icons'


interface IProps{
  navigation : any
}

interface IState {
 [key:string]:any
}
export default class Gamepage extends Component <IProps,IState>{

  constructor(props){
    super(props)
    this.state={
      player:1,
    }
  }
  currentTile0;
  currentTile1;
  currentTile2;
  currentTile3;
  currentTile4;
  currentTile5;
  currentTile6;
  currentTile7;
  currentTile8;
  

  
  tilePressed = (e:string) =>{
 
    this.setState({
     e : <Icon name="circle-outline" style={styles.tileO}/>
   })
  }
  Array1 = []
  Array2 = []
  handleTile =(e) =>{
    this.setState({
      player:-(this.state.player)
    })
    
    if(e === "0"){

      if(this.state.player === 1){
        this.currentTile0=<Icon name="circle-outline" style={styles.tileO}/>
        this.Array1.push(0)
      }
      else if(this.state.player === -1){
        this.currentTile0=<Icon name="close" style={styles.tileX}/>
        this.Array2.push(0)
      }
    }
    else if(e === "1"){

      if(this.state.player === 1){
        this.currentTile1=<Icon name="circle-outline" style={styles.tileO}/>
        this.Array1.push(1)
      }
      else if(this.state.player === -1){
        this.currentTile1=<Icon name="close" style={styles.tileX}/>
        this.Array2.push(1)
      }
    }
    else if(e === "2"){

      if(this.state.player === 1){
        this.currentTile2=<Icon name="circle-outline" style={styles.tileO}/>
        this.Array1.push(2)
      }
      else if(this.state.player === -1){
        this.currentTile2=<Icon name="close" style={styles.tileX}/>
        this.Array2.push(2)
      }
    }
    else if(e === "3"){

      if(this.state.player === 1){
        this.currentTile3=<Icon name="circle-outline" style={styles.tileO}/>
        this.Array1.push(3)
      }
      else if(this.state.player === -1){
        this.currentTile3=<Icon name="close" style={styles.tileX}/>
        this.Array2.push(3)
      }
    }
    else if(e === "4"){

      if(this.state.player === 1){
        this.currentTile4=<Icon name="circle-outline" style={styles.tileO}/>
        this.Array1.push(4)
      }
      else if(this.state.player === -1){
        this.currentTile4=<Icon name="close" style={styles.tileX}/>
        this.Array2.push(4)
      }
    }
    else if(e === "5"){

      if(this.state.player === 1){
        this.currentTile5=<Icon name="circle-outline" style={styles.tileO}/>
        this.Array1.push(5)
      }
      else if(this.state.player === -1){
        this.currentTile5=<Icon name="close" style={styles.tileX}/>
        this.Array2.push(5)
      }
    }
    else if(e === "6"){

      if(this.state.player === 1){
        this.currentTile6=<Icon name="circle-outline" style={styles.tileO}/>
        this.Array1.push(6)
      }
      else if(this.state.player === -1){
        this.currentTile6=<Icon name="close" style={styles.tileX}/>
        this.Array2.push(6)
      }
    }
    else if(e === "7"){

      if(this.state.player === 1){
        this.currentTile7=<Icon name="circle-outline" style={styles.tileO}/>
        this.Array1.push(7)
      }
      else if(this.state.player === -1){
       this.currentTile7=<Icon name="close" style={styles.tileX}/>
        this.Array2.push(7)
      }
    }
    else if(e === "8"){

      if(this.state.player === 1){
        this.currentTile8=<Icon name="circle-outline" style={styles.tileO}/>
        this.Array1.push(8)
      }
      else if(this.state.player === -1){
        this.currentTile8=<Icon name="close" style={styles.tileX}/>
        this.Array2.push(8)
      }
    }
    
  }

  render() {
    
   console.log(this.state.player)

    if((this.Array1.includes(0)&&this.Array1.includes(1)&&this.Array1.includes(2))||
    ( this.Array1.includes(3)&&this.Array1.includes(4)&&this.Array1.includes(5))||
    ( this.Array1.includes(6)&&this.Array1.includes(7)&&this.Array1.includes(8))||
    ( this.Array1.includes(0)&&this.Array1.includes(4)&&this.Array1.includes(8))||
    ( this.Array1.includes(2)&&this.Array1.includes(4)&&this.Array1.includes(6))||
    (this.Array1.includes(0)&&this.Array1.includes(3)&&this.Array1.includes(6))||
    (this.Array1.includes(1)&&this.Array1.includes(4)&&this.Array1.includes(7))||
    (this.Array1.includes(2)&&this.Array1.includes(5)&&this.Array1.includes(8))
    ){
      alert("player1 wins");
      this.Array1=[]
      this.Array2=[]
      this.currentTile0=null;
      this.currentTile1=null;
      this.currentTile2=null;
      this.currentTile3=null;
      this.currentTile4=null;
      this.currentTile5=null;
      this.currentTile6=null;
      this.currentTile7=null;
      this.currentTile8=null;
      
    
       this.props.navigation.navigate('TicToeSwitch')

    }else

    if((this.Array2.includes(0)&&this.Array2.includes(1)&&this.Array2.includes(2))||
    ( this.Array2.includes(3)&&this.Array2.includes(4)&&this.Array2.includes(5))||
    ( this.Array2.includes(6)&&this.Array2.includes(7)&&this.Array2.includes(8))||
    ( this.Array2.includes(0)&&this.Array2.includes(4)&&this.Array2.includes(8))||
    ( this.Array2.includes(2)&&this.Array2.includes(4)&&this.Array2.includes(6))||
    (this.Array2.includes(0)&&this.Array2.includes(3)&&this.Array2.includes(6))||
    (this.Array2.includes(1)&&this.Array2.includes(4)&&this.Array2.includes(7))||
    (this.Array2.includes(2)&&this.Array2.includes(5)&&this.Array2.includes(8))
    ){
      alert("player2 wins");
      this.Array2=[]
      this.Array1=[]
      this.currentTile0=null;
      this.currentTile1=null;
      this.currentTile2=null;
      this.currentTile3=null;
      this.currentTile4=null;
      this.currentTile5=null;
      this.currentTile6=null;
      this.currentTile7=null;
      this.currentTile8=null;
      this.props.navigation.navigate('TicToeSwitch')
    }else if(this.Array1.length === 5 && this.Array2.length === 4){
      alert("Match Tie")
      this.Array1=[]
      this.Array2=[]
      this.currentTile0=null;
      this.currentTile1=null;
      this.currentTile2=null;
      this.currentTile3=null;
      this.currentTile4=null;
      this.currentTile5=null;
      this.currentTile6=null;
      this.currentTile7=null;
      this.currentTile8=null;
      this.props.navigation.navigate('TicToeSwitch')  
    }

    return (
      <View style={styles.container}>
         <View style ={{paddingTop:50}}>
            <Text style={{fontSize:20,color:'blue'}} >PLAYER 1 - o</Text>
            <Text style={{fontSize:20,color:'red'}}>PLAYER 2  - X</Text>
         </View>
     <View style={styles.container}>
       <View style={{flexDirection:'row'}}>
          <TouchableOpacity onPress={(e)=>this.handleTile("0")} style={[styles.tile,{borderLeftWidth:0,borderTopWidth:0}]}>
             <Text>{this.currentTile0}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={(e)=>this.handleTile("1")} style={[styles.tile,{borderTopWidth:0}]}>
             <Text>{this.currentTile1}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={(e)=>this.handleTile("2")} style={[styles.tile,{borderRightWidth:0,borderTopWidth:0}]}>
             <Text>{this.currentTile2}</Text>
          </TouchableOpacity>
       </View>

       <View style={{flexDirection:'row'}}>
          <TouchableOpacity  onPress={(e)=>this.handleTile("3")}style={[styles.tile,{borderLeftWidth:0}]}>
             <Text>{this.currentTile3}</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={(e)=>this.handleTile("4")} style={styles.tile}>
             <Text>{this.currentTile4}</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={(e)=>this.handleTile("5")} style={[styles.tile,{borderRightWidth:0}]}>
               <Text>{this.currentTile5}</Text>
          </TouchableOpacity>
       </View>

       <View style={{flexDirection:'row'}}>
          <TouchableOpacity  onPress={(e)=>this.handleTile("6")} style={[styles.tile,{borderLeftWidth:0,borderBottomWidth:0}]}>
             <Text>{this.currentTile6}</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={(e)=>this.handleTile("7")} style={[styles.tile,{borderBottomWidth:0}]}>
              <Text>{this.currentTile7}</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={(e)=>this.handleTile("8")} style={[styles.tile,{borderRightWidth:0,borderBottomWidth:0}]}>
              <Text>{this.currentTile8}</Text>
          </TouchableOpacity>
       </View>
     </View>
     </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center", 
    alignItems: "center",
   
  },
  tile:{
   borderWidth:5,
   height:100,
   width:100,
   paddingTop:15,
    paddingLeft:15
      
  },
  tileX:{
    color:'red',
    fontSize:60,
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    paddingTop:15,
    paddingLeft:15
  },
  tileO:{
    color:'blue',
    fontSize:60,
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    paddingTop:15,
    paddingLeft:15

  },
  Players:{
    
    paddingTop:40
  }
  
})
