import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import theme from './CustomProperties/Themes';

// import { NativeRouter, BackButton, Route, Switch } from "react-router-native";


// import components
import TopBar from './Components/TopBar';
import BottomBar from './Components/BottomBar';

// import views
import Splash from './views/Splash';
import Home from './views/Home';
import Search from './views/Search';




export default function App() {
  return (
    <View>
         <TopBar style={styles.header}/>
                  
                  <ScrollView contentContainerStyle={styles.scrollView} contentContainerStyle={{ flexGrow: 1 }}>

                        {/* <Switch>

                          <Route exact path="/" component={Splash} />
                          <Route path="/home" component={Home} />
                

                        </Switch> */}

                        <Home/>

                  </ScrollView>

              <BottomBar style={styles.footer}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#0d4077',
  },
  header: {
    flex: .15,
    flexGrow: 1,
    elevation: 0,
  },
  scrollView: {
    flexDirection: 'column',
    flex: .7,
    alignSelf: 'stretch',
    backgroundColor: 'pink',
  },
  footer: {
    flex: .15,
  }
});

