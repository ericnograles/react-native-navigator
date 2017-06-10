import React from 'react';
import { Text, View, TouchableHighlight, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class LoginOrRegister extends React.Component {
  navigateToDashboard = () => {
    const { navigation } = this.props;
    navigation.navigate('Dashboard', {name: 'Doc Stanton'}); 
  };

  render() {
    return (
      <View style={{padding: 20}}>
        <Text>LoginOrRegister Screen</Text>
        <TouchableHighlight onPress={this.navigateToDashboard}>
          <Text style={{fontSize: 24}}>Login to Dashboard</Text>
        </TouchableHighlight>
      </View>
    )
  }
}