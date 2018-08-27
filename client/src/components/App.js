import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SectionList,
} from 'react-native';
import Expo from 'expo';
import axios from 'axios';

const { manifest } = Expo.Constants;

export default class App extends Component {
  constructor () {
    super();
    this.state = {
      books: [],
    }
  }
  componentWillMount () {
    const params = {
      params: {
        "title": "flowers for algernon",
      }
    }
    // console.log(manifest);

    axios.get('http://10.8.65.97:3000/search', params)
      .then((response) => {
        // console.log('then response:', response.data);
        return response.data;
      })
      .then(response =>{
        // console.log(response);
        this.setState({
          books: response,
        })
      })
      .catch((err) => {
        console.log('error response:', err);
      });
  }

  render() {
    console.log(this.state.books);
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.state.books.map((book, i) => (
            <Text key={i}>
              <Image style={{width: 75, height: 100}} source={{uri: book.thumbnail}} />{"\n"}
              <Text>{book.title}</Text>{"\n"}
              <Text>{book.authors}</Text>{"\n"}
              <Text>{book.description}</Text>{"\n"}
              <Text>{book.publishDate}</Text>{"\n"}
              <Text>{book.pageCount}</Text>{"\n"}
            </Text>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
