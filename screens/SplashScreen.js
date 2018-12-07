import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Dimensions,
  ImageBackground
} from "react-native";
import getImageForWeather from "../constants/getImageForWeather";

// import {
//     COLOR_PINK, COLOR_PINK_LIGHT,
//     COLOR_FACEBOOK, COLOR_PINK_MEDIUM}
// from '../constants/myColors'
var { height, width } = Dimensions.get("window");
export default class Splash extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    logoOpacity: new Animated.Value(0),
    titleMarginTop: new Animated.Value(height / 2)
  };
  async componentDidMount() {
    //Add animations here
    Animated.sequence([
      //animations by sequence
      Animated.timing(this.state.logoOpacity, {
        toValue: 1,
        duration: 1500
      }),
      //Animate Text ?
      Animated.timing(this.state.titleMarginTop, {
        toValue: 10,
        duration: 1000 //1000 miliseconds = 1 second
      })
    ]).start(() => {
      //End of animations
      //How to navigate to Login ? => Use StackNavigation
      this.props.navigation.navigate("SignIn");
    });
  }
  render() {
    return (
      <ImageBackground
        source={getImageForWeather('Clear')}
        style={styles.imageContainer} 
        imageStyle={styles.image}
      >
        <View style={styles.detailsContainer}>
        <Animated.Image
          source={require("../assets/logo.png")}
          style={{ ...styles.logo, opacity: this.state.logoOpacity }}
        />
        <Animated.Text
          style={{ ...styles.title, marginTop: this.state.titleMarginTop }}
        >
          Booking Hutech App
        </Animated.Text>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
   // backgroundColor: ""
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  logo: {
    width: 330,
    height: 330,
    borderRadius: 130 / 2
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.22)',
    paddingHorizontal: 20,
  },
  title: {
    color: '#fff',
    marginTop: 10,
    textAlign: "center",
    width: 400,
    fontSize: 21
  }
});
