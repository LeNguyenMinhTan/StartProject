import React from 'react';
import { Platform } from 'react-native';
import {createStackNavigator, createAppContainer,createBottomTabNavigator} from 'react-navigation';
//import Ionicons from 'react-native-vector-icons';
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
            ? `ios-information-circle${focused ? '' : '-outline'}`
            : 'md-information-circle'
        }
      />
    ),
  };
  
  const OtherStack = createStackNavigator({
    Other: OtherScreen,
  });
  
  OtherStack.navigationOptions = {
    tabBarLabel: 'Other',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
      />
    ),
  };
  
  export default createBottomTabNavigator({
    HomeStack,
    OtherStack,
  });


