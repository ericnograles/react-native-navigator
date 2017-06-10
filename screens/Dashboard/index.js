import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Home from './Home';
import Cage from './Cage';

const DashboardTabs = TabNavigator({
  Home: {
    screen: Home
  },
  Cage: {
    screen: Cage
  }
});

export default class Dashboard extends React.Component {
  render() {
    const { navigation } = this.props; // Add a reference to the top-level StackNavigator for logout scenarios
    return (
      <DashboardTabs screenProps={{appStack: navigation}} />
    );
  }
}