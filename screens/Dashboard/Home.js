import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Image, Text, View, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationActions } from 'react-navigation';

export default class Main extends React.Component {
  // Define these for TabNavigator screens
  static navigationOptions = {
    header: null,
    tabBarLabel: 'Main',
    tabBarIcon: ({ tintColor }) => {
      return <Ionicons name="ios-home" size={32} color={tintColor} />
    }
  };

  logout = () => {
    // We pass this down as screenProps from Dashboard/index.js, we need access to the parent stack to "logout"
    const { appStack } = this.props.screenProps;
    appStack.goBack();
  };

  render() {
    // See: /screens/LoginOrRegister/index.js, this is the root level StackNavigator
    const { appStack } = this.props.screenProps;

    return (
      <View style={{padding: 20}}>
        <Text>Hi, {appStack.state.params.name}</Text>
        <TouchableHighlight onPress={this.logout}>
          <Text style={{fontSize: 24}}>Logout</Text>
        </TouchableHighlight>
      </View>
    )
  }
}