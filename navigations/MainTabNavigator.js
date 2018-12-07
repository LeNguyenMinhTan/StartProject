import React from 'react';
import { Platform } from 'react-native';
import {createStackNavigator, createAppContainer,createBottomTabNavigator} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import OtherScreen from '../screens/OtherScreen';
import TabBarIcon from '../components/TabBarIcon';
 
const HomeStack = createStackNavigator({
    Home: HomeScreen,
  });
  
  HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={
          Platform.OS === 'ios'
            ? `ios-paper-plane`
            : 'md-paper-plane'
        }
      />
    ),
  };
  
  const OtherStack = createStackNavigator({
    Other: OtherScreen,
  });
  
  OtherStack.navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'}
      />
    ),
  };
  
  export default createBottomTabNavigator({
    HomeStack,
    OtherStack,
  });


