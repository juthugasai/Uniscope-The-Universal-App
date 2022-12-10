import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import { IconButton, Title } from 'react-native-paper';
import DarkMode from '../components/Settings/DarkMode';
import firebase from 'firebase';
import db from '../config';

export default class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <IconButton
          icon="keyboard-backspace"
          size={30}
          style={styles.navButton}
          color="#5b3a70"
          onPress={() => this.props.navigation.goBack()}
        />
        <View style={styles.header}>
          <Text style={styles.text}>Settings</Text>
        </View>

        <TouchableOpacity
          style={styles.ver}
          onPress={() => {
            this.props.navigation.navigate('version');
          }}>
          <Text style={styles.T}>App-Version: 1.0</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.soft}
          onPress={() => {
            this.props.navigation.navigate('Build');
          }}>
          <Text style={styles.T}>Software:C-OS</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.ver1}
          onPress={() => {
            this.props.navigation.navigate('Info');
          }}>
          <Text style={styles.T}>Your Info</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.ver1}
          onPress={() => {
            this.props.navigation.navigate('More');
          }}>
          <Text style={styles.T}>More Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ver1}
          onPress={() => {
            this.props.navigation.navigate('Login');
            firebase.auth().signOut();
          }}>
          <Text style={styles.T}>Logout</Text>
        </TouchableOpacity>

        <View style={{ marginTop: 100, marginLeft: 90 }}>
          <Text>Powered By:</Text>
        </View>

        <View>
          <Image
            source={require('../assets/cyber.png')}
            style={{ height: 20, width: 20, marginLeft: 170, marginTop: -17 }}
          />
        </View>
        <View style={{ marginTop: -20, marginLeft: 195 }}>
          <Text>Cyber-Tech</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffg',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  header: {
    alignItems: 'center',
  },

  text: {
    //flex: 0.5,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#939496',
    margin: 60,
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  text1: {
    //flex: 0.5,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#939496',
    marginTop: 10,
    //margin:60,
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  text2: {
    //flex: 0.5,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
    //margin:60,
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  button: {
    //flex: 0.25,
    //marginTop: 50,
    //marginLeft: 50,
    //marginRight: 50,
    alignItems: 'center',
    justifyContent: 'center',
    //height:70,
    borderRadius: 30,
    backgroundColor: 'purple',
  },

  ver: {
    //flex:1,
    marginTop: 70,
    marginLeft: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 70,
    width: 170,
    justifyContent: 'center',
    //alignContent:'center',
    alignItems: 'center',
  },

  ver1: {
    //flex:1,
    marginTop: 10,
    marginLeft: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 70,
    width: 350,
    justifyContent: 'center',
    //alignContent:'center',
    alignItems: 'center',
  },

  soft: {
    //flex:1,
    marginTop: -70,
    marginLeft: 185,
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 70,
    width: 170,
    justifyContent: 'center',
    //alignContent:'center',
    alignItems: 'center',
  },
  T: {
    //flex: 0.5,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#939496',

    //alignItems: 'center',
    //justifyContent: 'center',
  },

  navButton: {
    margin: 20,
  },
});
