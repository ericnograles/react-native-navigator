import React from 'react';
import { Image, Text, View, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationActions } from 'react-navigation';

export default class Faceoff extends React.Component {
  backToLowrider = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  render() {
    return (
      <View style={{flex: 1, padding: 20}}>
        <Image source={{uri: 'http://i.imgur.com/yHTbKyf.gif'}} resizeMode="contain" style={{height: 300, width: 300}} />
        <TouchableHighlight onPress={this.backToLowrider}>
          <Text style={{fontSize: 24}}>....let's ride</Text>
        </TouchableHighlight>
      </View>
    );
  }
}