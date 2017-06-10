import React from 'react';
import { Image, Text, View, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class Lowrider extends React.Component {
  navigateTo = (cageScreenName) => {
    const { navigation } = this.props;
    navigation.navigate(cageScreenName);
  };
  render() {
    return (
      <View style={{flex: 1, padding: 20}}>
        <Image source={{uri: 'http://i.imgur.com/TE9Vqvx.gif'}} resizeMode="contain" style={{height: 300, width: 300}} />
        <TouchableHighlight onPress={this.navigateTo.bind(null, 'Faceoff')}>
          <Text style={{fontSize: 24}}>Face...off.</Text>
        </TouchableHighlight>
      </View>
    );
  }
}