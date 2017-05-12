import React, { Component } from 'react';
import Router from '../Router';
import { StyleSheet, Text, View } from 'react-native';

class CarSelect extends Component {
  render() {
    return (
      <Text>
        Tetris go!!
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CarSelect;
