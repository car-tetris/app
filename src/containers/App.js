import React, { Component } from 'react';
import Expo from 'expo';
import {
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';
import Router from '../Router';

import { StyleSheet, Text, View } from 'react-native';

class App extends Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute="carSelect" />
      </NavigationProvider>
    );
  }
}

Expo.registerRootComponent(App);
