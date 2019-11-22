import React from 'react'

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const App = ()=>  {
    return (
      <View style={styles.container}>
        <Text style={styles.activity}>This is React Native Activity</Text>
        <Text style={styles.pb}>patrickbattisti</Text>
      </View>
    )
    }

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    backgroundColor: '#7159c1'
  },
  activity: {
    color: '#fff'
  },
  pb: {
    color: '#fff',
    marginTop: 120
  },
});


export default App;
