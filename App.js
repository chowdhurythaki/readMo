import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import App from './client/src/components/App';

export default class Entry extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <App />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
