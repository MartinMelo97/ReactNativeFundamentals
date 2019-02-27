import React from 'react';
import { Home } from './app/views/Home';
import { Contact } from './app/views/Contact'
import { createStackNavigator, createAppContainer } from 'react-navigation'

const AppNavigator = createStackNavigator({
  HomeRT: {
    screen: Home
  },
  ContactRT: {
    screen: Contact
  },
},
  {
    initialRouteName: 'HomeRT'
  }
)

export default createAppContainer(AppNavigator)



