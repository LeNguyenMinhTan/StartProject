import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View,TextInput , Image , Alert,Dimensions, Platform } from 'react-native';
import flatListData from '../data/flatListData';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';

var screen = Dimensions.get('window');
export default class EditModal extends Component{
    constructor(props){
        super(props);
        this.state ={
            foodName: '',
            foodDescription:''
        }
    }
    showEditModal = (editingFood, flatlistItem) => {         
        this.setState({
            key: editingFood.key,
            foodName: editingFood.name,
            foodDescription: editingFood.foodDescription,
            flatlistItem: flatlistItem
        });
        this.refs.myModal.open();
    } 
    generateKey = (numberOfCharacters) => {
        return require('random-string')({length: numberOfCharacters});        
    }
    render(){
        return(
            <Modal
                ref={"myModal"}
                style={{
                    justifyContent:'center',
                    borderRadius: Platform.OS === 'ios'?30:0,
                    shadowRadius:10,
                    width: screen.width -25,
                    height:300,
                    backgroundColor:"rgba(204,219,248,0.93)"
                }}
                position= 'center'
                backdrop={true}
                onClosed={()=>{
                    //alert("Modal closed")
                }}
            >
                <Text
                    style={{
                        fontSize: 25,
                        fontWeight: 'bold',
                        textAlign:'center',
                        marginTop: 20
                    }}
                >Chỉnh Sửa Biểu Mẫu</Text>
                <TextInput
                    style={{
                        height:40,
                        borderBottomColor:'gray',
                        marginLeft:30,
                        marginRight: 30,
                        marginTop: 20,
                        marginBottom: 10,
                        fontSize: 20,
                        borderBottomWidth: 1
                    }}
                    onChangeText={(text)=>{this.setState({foodName:text})}}
                    placeholder="Nhập tên biểu mẫu cần sữa"
                    underlineColorAndroid="transparent"
                    value ={this.state.foodName}
                >

                </TextInput>
                <TextInput
                    style={{
                        height:40,
                        borderBottomColor:'gray',
                        marginLeft:30,
                        marginRight: 30,
                        marginTop: 20,
                        marginBottom: 10,
                        fontSize: 20,
                        borderBottomWidth: 1
                    }}
                    onChangeText={(text)=>this.setState({foodDescription:text})}
                    placeholder="Nhập mô tả biểu mẫu cần sửa"
                    underlineColorAndroid="transparent"
                    value ={this.state.foodDescription}
                >
                </TextInput>
                <Button
                    style={{
                        fontSize: 18, color: 'white'
                    }}
                    containerStyle={{
                        padding: 8,
                        marginLeft: 70,
                        marginRight: 70,
                        height: 40,
                        borderRadius: 6,
                        backgroundColor: 'tomato'
                    }}
                    onPress={
                        ()=>{
                            if(this.state.foodName.length == 0 || this.state.foodDescription.length == 9){
                                alert("Bạn phải nhập tên và mô tả");
                                return;
                            }
                            
                            var foundIndex = flatListData.findIndex(item => this.state.key == item.key);
                            if (foundIndex < 0) {
                                return; 
                            }
                            flatListData[foundIndex].name = this.state.foodName;
                            flatListData[foundIndex].foodDescription = this.state.foodDescription;

                            this.state.flatlistItem.refreshFlatListItem();
                            this.refs.myModal.close();                                                                                                                                 
                        }
                    }
                >
                    Save
                </Button>
            </Modal>
        );
    }
}