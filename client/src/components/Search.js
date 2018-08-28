import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
} from 'react-native';

class Search extends Component {
  constructor (props) {
    super();

    this.state = {
      searchItem: '',
    }
  }

  handleChange (text) {
    console.log(text);
    this.setState({
      searchItem: text,
    });
  }

  render () {
    const { searchItem } = this.state;
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput} value={this.state.searchItem} onChangeText={(text) => this.setState({searchItem: text})} />
        <Button style={styles.button} onPress={() => {
          this.props.navigation.navigate('List', {
            search: searchItem,
          });
          }} title="Search" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 25,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  textInput: {
    height: 40,
    fontFamily: 'Futura',
    fontSize: 40,
    textAlign: "center",
    // borderColor: '#7C7A7A',
    // borderWidth: 0.5,
    // borderRadius: 50,
  },
  button: {
    fontFamily: 'Futura',
    fontSize: 30,
  }
})

export default Search;
