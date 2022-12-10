import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native';
import { IconButton, Title } from 'react-native-paper';

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
          <Text style={styles.text}>App-Version</Text>
        </View>
        <Text style={styles.text1}>
          Whats New:
        </Text>

        <Text style={styles.text1}>
          We have connected to different exo planets in our Milkey way galaxy 
          
        </Text>

        <Text style={styles.text1}>
          The location of the ISS('international space station') is so accurate 
          
        </Text>

        <Text style={styles.text1}>
          The speed of the meteor is defined by different images           
        </Text>

        <Text style={styles.text1}>
          We will be sending Updated to our app once a week or month          
        </Text>

        

        <View style={{ marginTop: 100, marginLeft: 90 }}>
          <Text>Powered By:</Text>
        </View>

        <TouchableOpacity>
          <Image
            source={require('../../assets/A-2/cyber.png')}
            style={{ height: 20, width: 20, marginLeft: 170, marginTop: -17 }}
          />
        </TouchableOpacity>
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
    marginTop:10
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#939496',
  },

  button: {
    marginTop: 70,
    marginLeft: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 70,
    width: 350,
    justifyContent: 'center',
    //alignContent:'center',
    alignItems: 'center',
  },
  navButton:{
    margin:20
  }
});
