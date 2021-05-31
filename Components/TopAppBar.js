import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const TopAppBar = () => (
  <Appbar.Header style = {styles.item}>
     <Appbar.Content title="Home" />
      <Appbar.Action icon="magnify" onPress={() => {}} />
  </Appbar.Header>
);

export default TopAppBar;

const styles = StyleSheet.create ({
   item: {
      backgroundColor : "teal",
      width: '100%',
   }
})