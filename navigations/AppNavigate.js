import { createStackNavigator, createSwitchNavigator, createAppContainer,  } from 'react-navigation';
import SignInScreen from '../screens/SigninScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import MainTabNavigator from './MainTabNavigator';

const AuthStack = createStackNavigator(
    { 
        SignIn:{
            screen: SignInScreen,      
        } 
    }
);


export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Main: MainTabNavigator,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
