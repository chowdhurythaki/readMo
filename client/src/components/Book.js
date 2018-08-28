import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

class Book extends Component {
  constructor (props) {
    super();
  }

  pressHandler (pages) {
    this.props.navigation.navigate('Calendar', {
      pages: this.props.book.pageCount,
    });
  }

  render () {
    const { thumbnail, title, authors, pageCount, description, publishedDate } = this.props.book;
    return (
      <View style={styles.bookContainer}>
        <TouchableHighlight onPress={() => {
          this.props.navigation.navigate('DatePicker', {
            pages: this.props.book.pageCount,
          });
          }} >
          <View style={styles.imageContainer}>
            <Image style={styles.imageProps} source={{uri: thumbnail}} />
          </View>
        </TouchableHighlight>
        <View>
          <Text style={styles.field}>TITLE: {title}</Text>{"\n"}
          <Text style={styles.field}>AUTHORS: {authors}</Text>{"\n"}
          <Text style={styles.field}>PAGES: {pageCount}</Text>{"\n"}
          <Text style={styles.field}>DESCRIPTION: {description}</Text>{"\n"}
          <Text style={styles.field}>PUBLISHED DATE: {publishedDate}</Text>{"\n"}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bookContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 15,
  },
  imageProps: {
    width: 150,
    height: 250,
    marginBottom: 10,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  field: {
    marginBottom: 10,
    fontFamily: 'Futura-Medium',
    fontSize: 20,
  }
})

export default Book;
