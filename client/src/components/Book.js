import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

class Book extends Component {
  constructor ({props}) {
    super();

  }

  pressHandler () {
    
  }

  render () {
    const { thumbnail, title, authors, pageCount, description, publishedDate } = this.props.book;
    return (
      <View style={styles.bookContainer}>
        <TouchableHighlight onPress={this.pressHandler}>
          <View>
            <Image style={styles.imageProps} source={{uri: thumbnail}} />
          </View>
        </TouchableHighlight>
        <View>
          <Text>TITLE: {title}</Text>{"\n"}
          <Text>AUTHORS: {authors}</Text>{"\n"}
          <Text>PAGES: {pageCount}</Text>{"\n"}
          <Text>DESCRIPTION: {description}</Text>{"\n"}
          <Text>PUBLISHED DATE: {publishedDate}</Text>{"\n"}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bookContainer: {
    backgroundColor:'#4286f4',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  imageProps: {
    width: 150,
    height: 200,
  },
})

export default Book;
