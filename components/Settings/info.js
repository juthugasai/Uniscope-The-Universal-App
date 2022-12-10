import React, { Component } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';
import { Avatar } from 'react-native-elements';
import { auth, db } from '../../config';
import * as ImagePicker from 'expo-image-picker';

import firebase from 'firebase';

export default class SettingScreen extends Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      image: '#',
      name: '',
      docId: '',
      emailId:''
    };
  }

  selectPicture = async () => {
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!cancelled) {
      this.uploadImage(uri, this.state.userId);
    }
  };

  uploadImage = async (uri, imageName) => {
    var response = await fetch(uri);
    var blob = await response.blob();

    var ref = firebase
      .storage()
      .ref()
      .child('user_profiles/' + imageName);

    return ref.put(blob).then((response) => {
      this.fetchImage(imageName);
    });
  };

  fetchImage = (imageName) => {
    var storageRef = firebase
      .storage()
      .ref()
      .child('user_profiles/' + imageName);

    // Get the download URL
    storageRef
      .getDownloadURL()
      .then((url) => {
        this.setState({ image: url });
      })
      .catch((error) => {
        this.setState({ image: '#' });
      });
  };

  getUserProfile() {
    db.collection('users')
      .where('email_id', '==', this.state.userId)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.setState({
            name: doc.data().first_name + ' ' + doc.data().last_name,
            docId: doc.id,
            image: doc.data().image,
          });
        });
      });
  }

  componentDidMount() {
    this.fetchImage(this.state.userId);
    this.getUserProfile();
  }

  render() {
    return (
      <View style={styles.info}>
       <Image
      source={require('../../assets/space.jpeg')}
                  style={styles.bg}
/>
      <View style={styles.infoCard}>
      
              <View style={styles.infoChild}>
             

        <Avatar
          rounded
          source={{ uri: auth?.currentUser?.photoURL }}
          size="large"
          showEditButton
          onPress={() => this.selectPicture()}
          containerStyle={styles.imageContainer}
          
        /></View>

        
        
        
        
        
        </View>
        <View>
        
        </View>
         
        
      </View>
    );
  }
}

var styles = StyleSheet.create({
  info:{
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '60%',
    zIndex: 99,
    backgroundColor: '#3E3963',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    
  },

  infoChild:{
    //position: 'absolute',
    left: -70,
    right: 0,
    top: -230,
    alignItems: 'center',
  },
  infoCard:{

    backgroundColor: '#434273',
    height: 130,
    position: 'absolute',
    top: -50,
    left: 20,
    right: 20,
    borderRadius: 10,
    boxShadow: '5px 5px 5px 0px rgba(0,0,0,0.2)',
  },
  imageContainer: {
    //flex: 1,
    //width: 150,
    //height: 150,


    marginLeft: 130,
    marginTop: 190,
    borderRadius: 200,
  },
  bg:{
    width:370,
    height:340,
    marginTop:-320
  }
  
});
