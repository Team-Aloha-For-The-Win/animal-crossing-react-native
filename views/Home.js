import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';

// import components




const Home = () => {


  return (
    <ScrollView style={styles.scrollView}>

      <View style={styles.topView}>
        <ImageBackground resizeMode= 'cover' source={require('../assets/tomNook.png')} style={styles.backgroundContainer}>
          <Text style={styles.text}>Welcome</Text>
        </ImageBackground>
      </View>

      <View style={styles.bottomView}>
        <Text> Crossing</Text>
      </View>

    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'red',   
    flexDirection: 'column',
    alignSelf: 'stretch',
    height: null,
    flex: 1,
  },
  topView: {
    flex: 1,
    alignSelf: 'stretch',
  },
  bottomView: {
    flex: 1, 
    alignSelf: 'stretch',
  },
  backgroundContainer: {
    backgroundColor: 'dodgerblue',
  },
  text: {
    fontSize: 40,
    color: 'white',
    alignSelf: 'center',
    paddingTop: 200,
    paddingBottom: 200,
    fontWeight: 'bold',
  },
});