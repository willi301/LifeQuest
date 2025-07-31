// Profile.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './header';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Header title="Profile" style={{flex: 1 , width: '95%'}}/>
      <Text style={styles.text}>This is your profile or second page!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    paddingTop: 30,
  },
  text: {
    fontSize: 18,
    // marginTop: 20,
  },
  top: {
    paddingTop: 30,
  }
});