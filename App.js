import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FacebookScreen from './screens/fb';
import InstagramScreen from './screens/in';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default class App extends React.Component{
  render(){
    return(
      <View>
        <AppContainer/>
      </View>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  FacebookScreen: {screen: FacebookScreen},
  InstagramScreen: {screen: InstagramScreen}
})

const AppContainer = createAppContainer(TabNavigator);
