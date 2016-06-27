import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class jepulis extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Jepulis!
        </Text>
        <Text style={styles.instructions}>
          Pimpeli pom!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#00FF00',
  },
  instructions: {
    textAlign: 'center',
    color: '#00FF00',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('jepulis', () => jepulis);
