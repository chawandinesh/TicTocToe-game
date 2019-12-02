import React, { Component } from 'react'
import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import LoadingPage from './Screens/LoadingPage'
import TicToeStart from './Screens/TictoeStartPage'
import GamePage from './Screens/Gamepage'

const HomeNavigator = createStackNavigator({
      HomeRoute: {
        screen : LoadingPage 
      }
    },
    {
      headerMode: 'none',
      // cardStyle: { backgroundColor: '#e3955d' },
   }
)

const TicToeNavigator = createStackNavigator({
      TicToeRoute: {
        screen:TicToeStart
      }
    },
    {
      headerMode: 'none',
      cardStyle: { backgroundColor: '#b5c79d' },
   }
)

const GameNavigator = createStackNavigator({
      GameRoute: {
        screen:GamePage
      }
    },
    {
      headerMode: 'none',
      cardStyle: { backgroundColor: '#b5c79d' },
   }
)

const AppSwitch = createSwitchNavigator({
  HomeSwitch : HomeNavigator,
  TicToeSwitch : TicToeNavigator,
  GameSwitch : GameNavigator
}
)

const AppContainer = createAppContainer(AppSwitch)

export default class App extends Component {
  render() {
    return (
     <AppContainer/>
    )
  }
}



