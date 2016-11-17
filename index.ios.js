import React, { Component } from 'react';
import {
     AppRegistry,
     StyleSheet,
     Text,
     View
} from 'react-native';
import App from './src/App.js'
export default class auth extends Component {
     render() {
          return (
               <App />
          );
     }
}


AppRegistry.registerComponent('auth', () => auth);
