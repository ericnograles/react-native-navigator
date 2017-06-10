import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Text, View, TouchableHighlight } from 'react-native';
import LoginOrRegister from './screens/LoginOrRegister';
import Dashboard from './screens/Dashboard';

// The AppStack is the toplevel StackNavigator for your app
// Here, you would do things like Authentication, OAuth, etc
const AppStack = StackNavigator({
  Home: {
    screen: LoginOrRegister,
    path: '/',
    header: null
  },
  Dashboard: {
    screen: Dashboard,
    path: '/dashboard/:name',
    header: null
  }
}, {
  headerMode: 'none'
});

export default class App extends React.Component {
  render() {
    return (
      <AppStack />
    );
  }
}