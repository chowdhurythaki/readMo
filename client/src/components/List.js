import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';

import Book from './Book';
import testData from '../../../data/testData';

import Expo from 'expo';
import axios from 'axios';

const { manifest } = Expo.Constants;

class List extends Component {
  constructor () {
    super();
    // this.search = this.props.search;

    this.state = {
      books: testData,
    }
  }
  componentWillMount () {
    const { navigation } = this.props;
    const searchItem = navigation.getParam('search');
    // console.log(searchItem);
    const params = {
      params: {
        "title": 'catcher in the rye',
      }
    }

    axios.get('http://10.8.65.97:3000/search', params)
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .then(response =>{
        console.log('setting state');
        this.setState({
          books: response,
        })
      })
      .catch((err) => {
        console.log('error response:', err);
      });
  }

  render() {
    const { books } = this.state;
    // console.log('state', books);
    return (
      <View style={styles.container}>
        <ScrollView>
          {books.map((book, i) => (
            <Book book={book} key={i} navigation={this.props.navigation} />
            ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 25,
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default List;
