import React from 'react';
import {
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  Platform,
  TextInput,
  KeyboardAvoidingView,
  ImageBackground,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import getImageForWeather from '../constants/getImageForWeather';
import Button from 'react-native-button';
export default class SignInScreen extends React.Component {
  static navigationOptions = {
    header:null
  };

  render() {
    return (
     
        <ImageBackground
          source={getImageForWeather('Travel')}
          style={styles.imageContainer} 
          imageStyle={styles.image}
        >
          <View style={styles.detailsContainer}>
              <View style={styles.containerTextInput}>
                <TextInput style={styles.textInput} placeholder={"Nhập mã hoặc tên tài khoản"}></TextInput>
              </View>
              <View style={styles.containerTextInput}>
                <TextInput style={styles.textInput} placeholder={"Nhập password"} ></TextInput>
              </View>
              <Button
                    style={{
                        fontSize: 18, color: '#157EFB'
                    }}
                    containerStyle={{
                        padding: 8,
                        marginTop:20,
                        marginLeft: 70,
                        marginRight: 70,
                        height: 40,
                        borderRadius: 6,
                        backgroundColor: '#F0F0F7'
                    }}
                    //title="Sign in!" 
                    onPress={this._signInAsync}
                >
                    Sign In
                </Button>
          </View>
        </ImageBackground>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Main');
  };
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageContainer: {
      flex: 1,
      //alignItems: 'center',
      //justifyContent: 'center',
    }, 
    textStyle: {
      textAlign: 'center',
      fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
      color:'white',
    },
    largeText: {
      fontSize: 44,
    },
    smallText: {
      fontSize: 18,
    },
    image: {
      flex: 1,
      width: null, 
      height: null, 
      resizeMode: 'cover',
    },
    detailsContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.2)',
      paddingHorizontal: 20,
    },
    containerTextInput: {
      height: 40,
      marginTop: 20,
      backgroundColor: '#F6F6F6',
      marginHorizontal: 20,
      paddingHorizontal: 10,
      borderRadius: 5,
      width:'80%',
    },
    textInput: {
      flex: 1,
      color: '#404040',
      //width:300
      //...props
    },
  });
  
