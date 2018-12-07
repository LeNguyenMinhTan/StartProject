import React, { Component } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Alert,
  Dimensions,
  Platform,
  ScrollView
} from "react-native";
import flatListData from "../data/flatListData";
import Modal from "react-native-modalbox";
import Button from "react-native-button";
//import { ScrollView } from "react-native-gesture-handler";

var screen = Dimensions.get("window");
export default class DetailModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodName: "",
      foodDescription: ""
    };
  }
  showDetailModal = (editingFood, flatlistItem) => {
    this.setState({
      key: editingFood.key,
      foodName: editingFood.name,
      foodDescription: editingFood.foodDescription,
      flatlistItem: flatlistItem
    });
    this.refs.myModal.open();
  };
  generateKey = numberOfCharacters => {
    return require("random-string")({ length: numberOfCharacters });
  };
  render() {
    return (
      <Modal
        ref={"myModal"}
        style={{
          justifyContent: "center",
          borderRadius: Platform.OS === "ios" ? 30 : 0,
          shadowRadius: 10,
          width: screen.width - 25,
          height: screen.height - 260,
          backgroundColor: "rgba(204,219,248,0.93)"
        }}
        position="center"
        backdrop={true}
        onClosed={() => {
          //alert("Modal closed")
        }}
      >
        <ScrollView>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              textAlign: "center",
              marginTop: 20
            }}
          >
            Detail modal
          </Text>
          <TextInput
            style={{
              height: 40,
              borderBottomColor: "gray",
              marginLeft: 30,
              marginRight: 30,
              marginTop: 20,
              marginBottom: 10,
              fontSize: 20,
              borderBottomWidth: 1
            }}
            onChangeText={text => {
              this.setState({ foodName: text });
            }}
            placeholder="Nhập tên biểu mẫu cần sữa"
            underlineColorAndroid="transparent"
            value={this.state.foodName}
            editable={false}
          />
          <TextInput
            style={{
              height: 40,
              borderBottomColor: "gray",
              marginLeft: 30,
              marginRight: 30,
              marginTop: 20,
              marginBottom: 10,
              fontSize: 20,
              borderBottomWidth: 1
            }}
            onChangeText={text => this.setState({ foodDescription: text })}
            placeholder="Nhập mô tả biểu mẫu cần sửa"
            underlineColorAndroid="transparent"
            value={this.state.foodDescription}
            editable={false}
          />
          <TextInput
            style={{
              height: 40,
              borderBottomColor: "gray",
              marginLeft: 30,
              marginRight: 30,
              marginTop: 20,
              marginBottom: 10,
              fontSize: 20,
              borderBottomWidth: 1
            }}
            onChangeText={text => this.setState({ foodDescription: text })}
            placeholder="Nhập mô tả biểu mẫu cần sửa"
            underlineColorAndroid="transparent"
            value={this.state.foodDescription}
            editable={false}
          />
          <TextInput
            style={{
              height: 40,
              borderBottomColor: "gray",
              marginLeft: 30,
              marginRight: 30,
              marginTop: 20,
              marginBottom: 10,
              fontSize: 20,
              borderBottomWidth: 1
            }}
            onChangeText={text => this.setState({ foodDescription: text })}
            placeholder="Nhập mô tả biểu mẫu cần sửa"
            underlineColorAndroid="transparent"
            value={this.state.foodDescription}
            editable={false}
          />
          <TextInput
            style={{
              height: 40,
              borderBottomColor: "gray",
              marginLeft: 30,
              marginRight: 30,
              marginTop: 20,
              marginBottom: 10,
              fontSize: 20,
              borderBottomWidth: 1
            }}
            onChangeText={text => this.setState({ foodDescription: text })}
            placeholder="Nhập mô tả biểu mẫu cần sửa"
            underlineColorAndroid="transparent"
            value={this.state.foodDescription}
            editable={false}
          />
        </ScrollView>
      </Modal>
    );
  }
}
