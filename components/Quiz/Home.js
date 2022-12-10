import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { IconButton} from 'react-native-paper';
import Title from '../Quiz/Title';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
            <Title titleText='Brain-Booster' />
            <IconButton
              icon="keyboard-backspace"
              size={30}
              style={styles.navButton}
              color="#1A759F"
              onPress={() => navigation.goBack()}
            />

      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: 'https://cdni.iconscout.com/illustration/premium/thumb/giving-different-feedback-and-review-in-websites-2112230-1779230.png',
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <View style={{marginBottom:50}}>
      <Text style={styles.text}>You have one of this apps secrect screens! </Text>
      <Text style={styles.text}>You have entered Uniscope Phase-2 </Text>
      <Text style={styles.text}>This screen is part of the the apps hidden program and never to be revealed</Text>
      <Text style={styles.text}>Welcome!Now we will test your knowledge </Text>
      <Text style={styles.text}>This program will help to achieve good result in your exams </Text>
      <Text style={styles.text}>To proceed click on START </Text>



      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Quiz')}
        style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
    marginTop:70
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text:{

    fontSize:16,
    fontWeight:'bold'
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  button: {
    width: '100%',
    backgroundColor: '#1A759F',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  navButton: {
    marginLeft: -10,
    marginTop:-60
  },
});
