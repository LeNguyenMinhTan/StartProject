import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image , Alert, TouchableOpacity, ImageBackground, Platform } from 'react-native';
import flatListData from '../data/flatListData';
import Swipeout from 'react-native-swipeout';
import AddModal from './AddModal';
import EditModal from './EditModal';

class FlatListItem extends Component {
    constructor(props){
        super(props);
        this.state={
            activeRowKey: null
        };
    }
    refreshFlatListItem = () => {
        this.setState((prevState) => {
            return {
                numberOfRefresh: prevState.numberOfRefresh + 1
            };
        });        
    }
    render() {
        const swipeSettings ={
            autoClose: true,
            onClose:(secId, rowId, direction)=>{
                if(this.state.activeRowKey != null){
                    this.setState({ activeRowKey: null });
                }
            },
            onOpen:(secId, rowId, direction)=>{
                this.setState({ activeRowKey: this.props.item.key });
            },
            right:[
                {
                    component: (
                        <View 
                            style={{
                              flex: 1,
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexDirection: 'row',
                              backgroundColor:'rgba(44, 246, 145, 1)',
                              marginTop:10,
                              marginRight:3,
                              borderTopLeftRadius:10,
                              borderBottomLeftRadius:10
                              //width:"90%"
                              //padding:20
                            }}
                        >
                          <Image style={{height:25,width: 25}} source={require('../assets/icons8-edit-file-100.png')} />
                          <Text style={{
                              color:'white',
                              fontSize:15,
                              fontWeight: 'bold', 
                              fontFamily: 'Optima-Bold'
                              }}>Edit
                          </Text>
                        </View>
                      ),
                      backgroundColor: "rgba(0, 0, 0, 0)",
                    
                      

                    onPress:()=>{
                       
                        this.props.parentFlatList.refs.editModal.showEditModal(flatListData[this.props.index], this); 
                    },
                    //text: 'Delete', type:'delete'
                },                
                {
                    component: (
                        <View 
                            style={{
                              flex: 1,
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexDirection: 'row',
                              backgroundColor:'rgba(215, 8, 8, 1)',
                              marginTop:10,
                              marginRight:3,
                              borderTopRightRadius:10,
                              borderBottomRightRadius:10
                            }}
                        >
                           <Image style={{height:25,width: 25}} source={require('../assets/icons8-waste-100.png')} />
                           <Text style={{
                              color:'white', 
                              fontSize:15, 
                              fontWeight: 'bold', 
                              fontFamily: 'Optima-Bold' }}>
                                Delete
                            </Text>
                        </View>
                      ),
                      backgroundColor: "rgba(0, 0, 0, 0)",
                    onPress:()=>{
                        const deletingRow = this.state.activeRowKey;          
                        Alert.alert(
                            'Thông báo',
                            'Bạn có muốn xoá biểu mẫu này?',
                            [                              
                              {text: 'Có', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                              {text: 'Không', onPress: () => {        
                                flatListData.splice(this.props.index, 1); 
                                this.props.parentFlatList.refreshFlatList(deletingRow);
                              }},
                            ],
                            { cancelable: true }
                          ); 
                    },
                }

            ],
            rowId: this.props.index,
            sectionId:1,
        
            
        }          
        return (       
            <Swipeout  backgroundColor="transparent" {...swipeSettings} style={{
            }}>
                <View style={{
                    flex: 1,
                    flexDirection:'column', 
                                                
                }}>            
                
                <View style={{
                        flex: 1,
                        flexDirection:'row',
                        backgroundColor: '#CCCCCC',           
                        marginRight:10,
                        marginLeft:10,
                        marginTop:10,
                        borderRadius:15,
                        shadowRadius:5,   
                }}>            

                    <View style={{
                            flex: 1,
                            flexDirection:'column',   
                            height: 100                 
                        }}>            
                            <Text style={styles.flatListItemTitle}>{this.props.item.name}</Text>
                            <Text style={styles.flatListItem}>{this.props.item.foodDescription}</Text>
                    </View>              
                </View>
                </View>
            </Swipeout> 
        );
    }
}
const styles = StyleSheet.create({
    flatListItem: {
        color: '#4C4C4C',
        padding: 7,
        fontWeight: 'bold', 
        fontSize: 13,  
        fontFamily: 'Arial'
    },
    flatListItemTitle: {
        color: '#4C4C4C',
        paddingLeft: 5,
        paddingTop:5,
        fontSize: 20,
        fontWeight: 'bold', 
        fontFamily: 'Times New Roman' 
    },
    addButton: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 5,
        right:10,
        shadowOffset: {
          height: 1,
          width: 0
        }
      }
});

export default class BasicFlatList extends Component {
    constructor(props) {
        super(props);     
        this.state = ({
            deletedRowKey: null,            
        });
        this._onAdd=this._onAdd.bind(this);
    }
    refreshFlatList = (activeKey) => {
        this.setState((prevState) => {
            return {
                deletedRowKey: activeKey
            };
        });
        this.refs.flatList.scrollToEnd();
    }
    _onAdd=()=>{
        this.refs.addModal.showAddModal()
    }
    render() {
      return (
        <View style={{flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0}}>
            <FlatList 
                ref={"flatList"}
                data={flatListData}
                renderItem={({item, index})=>{
                    //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                    return (
                    <FlatListItem item={item} index={index} parentFlatList={this}>

                    </FlatListItem>
                    );
                }}
                >

            </FlatList>
            <View>
                    <TouchableOpacity  style={styles.addButton}
                         onPress={this._onAdd}
                    >
                        <Image 
                            style ={{width:60, height: 60}}
                            source={require('../assets/icons8-add-100-2.png')}
                        ></Image>
                    </TouchableOpacity>
            </View>
            <AddModal ref={'addModal'} parentFlatList={this} >

            </AddModal>
            <EditModal ref={'editModal'} parentFlatList={this}>

            </EditModal>
        </View>
      );
    }
}