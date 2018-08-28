import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableHighlight,
} from 'react-native';

class Search extends Component {
  constructor () {
    super();

    this.state = {
      searchItem: 'search by title',
    }
  }

  searchForBook () {
    return this.props.navigation.navigate('List');
  }

  handleChange (text) {
    console.log(text);
    this.setState({
      searchItem: text,
    });
  }

  render () {
    return (
      <View>
        <TextInput value={this.state.searchItem} onChangeText={(text) => this.setState({searchItem: text})} />
        <Button onPress={() => {
          this.props.navigation.navigate('List', {
            search: this.state.searchItem,
          });
          }} title="Go to List Screen" />
      </View>
    )
  }
}

export default Search;
