import React from "react";
import {StyleSheet, Text, View, ImageBackground, StatusBar} from "react-native";
import BasicFlatList from '../components/BasicFlatList';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    //title: "Welcome to the app!"
    header:null
  };

  render() {
    return (
      <ImageBackground
        source={require("../assets/647ae07c9c87aaae8056091cf867201d.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <StatusBar hidden={true} />
        <BasicFlatList />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
