import { createStackNavigator, createSwitchNavigator, createAppContainer,  } from 'react-navigation';
import SignInScreen from '../screens/SigninScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import MainTabNavigator from './MainTabNavigator';
import SplashScreen from '../screens/SplashScreen'
const AuthStack = createStackNavigator(
    { 
        SignIn:{
            screen: SignInScreen,      
        },
        Splash: {
            screen: SplashScreen
      }
    },
    {
      initialRouteName: 'Splash',
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
