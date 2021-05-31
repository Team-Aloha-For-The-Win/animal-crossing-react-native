import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TopAppBar from './Components/TopAppBar';

export default function App() {
  return (
    <View>
        <TopAppBar/>
        <View style={styles.container}>

          <Text>Animal Crossing!</Text>
          <StatusBar style="auto" />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
