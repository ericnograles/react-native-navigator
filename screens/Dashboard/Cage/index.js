import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Image, Text, View, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Faceoff from './Faceoff';
import Lowrider from './Lowrider';

const CageStack = StackNavigator({
  Lowrider: {
    screen: Lowrider,
    path: '/cage/lowrider'
  },
  Faceoff: {
    screen: Faceoff,
    path: '/cage/faceoff'
  }
}, {
  headerMode: 'none'
});

export default class Cage extends React.Component {
  // Define these for TabNavigator screens
  static navigationOptions = {
    header: null,
    tabBarLabel: 'Cage',
    tabBarIcon: ({ tintColor }) => {
      return <Ionicons name="ios-unlock" size={32} color={tintColor} />
    }
  };

  render() {
    return (
      <CageStack />
    )
  }
}