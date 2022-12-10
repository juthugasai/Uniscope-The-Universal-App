import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Navigate from './navigation/AppStackNavigator';

export default function App() {
  return <Navigate />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
