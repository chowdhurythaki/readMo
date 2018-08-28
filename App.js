import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from 'react-navigation';
import List from './client/src/components/List';
import Search from './client/src/components/Search';
import DatePicker from './client/src/components/DatePicker';
import Breakdown from './client/src/components/Breakdown';

export default class Entry extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Search: Search,
  List: List,
  DatePicker: DatePicker,
  Breakdown: Breakdown,
})
