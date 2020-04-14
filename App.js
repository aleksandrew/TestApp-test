import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Navbar from './src/Navbar';


export default function App() {
  return (
    <View style={styles.container}>
      <Navbar title={'Unsplash gallery'} />
      <Text style={styles.text}>Hello react native!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
