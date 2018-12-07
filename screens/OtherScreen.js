import React from 'react';
import {
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';

import ContactThumbnail from "../components/ContactThumbnail";
import DetailListItem from "../components/DetailListItem";
import { fetchRandomContact } from "../constants/api";
import colors from "../constants/Colors";

export default class OtherScreen extends React.Component {
  static navigationOptions = {
    //title: 'Lots of features here',
    header:null
  };

  state = {
    contact: {},
  };
  async componentDidMount() {
    const contact = await fetchRandomContact();
    this.setState({ contact });
  }
  render() {
    const { avatar, name, email, phone, cell } = this.state.contact;
    return (
      <View style={styles.container}>
        <View style={styles.avatarSection}>
          <ContactThumbnail avatar={avatar} name={name} phone={phone} />
        </View>
        <View style={styles.detailsSection}>
          <DetailListItem icon="mail" title="Email" subtitle={email} />
          <DetailListItem icon="phone" title="Công Ty" subtitle={phone} />
          <DetailListItem icon="smartphone" title="Di Động" subtitle={cell} />
          <TouchableOpacity onPress={this._signOutAsync}>
            <DetailListItem icon='exit-to-app' title="Log out" subtitle="đăng xuất" ></DetailListItem>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  avatarSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blue
  },
  detailsSection: {
    flex: 1,
    backgroundColor: "white"
  }
});
