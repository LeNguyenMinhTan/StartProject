import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View,TextInput , Image , Alert,Dimensions, Platform } from 'react-native';
import flatListData from '../data/flatListData';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';

var screen = Dimensions.get('window');
export default class AddModal extends Component{
    constructor(props){
        super(props);
        this.state ={
            newFoodName: '',
            newFoodDescription:''
        }
    }
    showAddModal = () => {
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
                        marginTop: 20,
                        color:'#3A5B2F'
                    }}
                >Thêm Biểu Mẫu</Text>
                <TextInput
                    style={{
                        height:40,
                        borderBottomColor:'#3A5B2F',
                        marginLeft:30,
                        marginRight: 30,
                        marginTop: 20,
                        marginBottom: 10,
                        fontSize: 20,
                        borderBottomWidth: 1,
                        color:'#3A5B2F'
                    }}
                    onChangeText={(text)=>{this.setState({newFoodName:text})}}
                    placeholder="Nhập tên biểu mẫu mới"
                    underlineColorAndroid="transparent"
                    value ={this.state.newFoodName}
                >

                </TextInput>
                <TextInput
                    style={{
                        height:40,
                        borderBottomColor:'#3A5B2F',
                        marginLeft:30,
                        marginRight: 30,
                        marginTop: 20,
                        marginBottom: 10,
                        fontSize: 20,
                        borderBottomWidth: 1,
                        color:'#3A5B2F'
                    }}
                    onChangeText={(text)=>this.setState({newFoodDescription:text})}
                    placeholder="Nhập mô tả biểu mẫu"
                    underlineColorAndroid="transparent"
                    value ={this.state.newFoodDescription}
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
                            if(this.state.newFoodName.length == 0 || this.state.newFoodDescription.length ==9){
                                alert("Bạn phải nhập tên và mô tả ");
                                return;
                            }
                            const newKey = this.generateKey(24);
                            const newFood = {
                                key: newKey,
                                name: this.state.newFoodName,
                                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/64/Foods_%28cropped%29.jpg",
                                foodDescription: this.state.newFoodDescription
                            };    
                            flatListData.push(newFood);    
                            this.props.parentFlatList.refreshFlatList(newKey);                                
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