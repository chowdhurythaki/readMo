import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Breakdown extends Component {
  constructor (props) {
    super();
    
    const daysInMonths = [31, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    const { navigation } = props;
    const date = navigation.getParam('date');
    const pages = navigation.getParam('pages');

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    let timeDiff = 0;
    for (let i = currentMonth; i < date.month; i += 1) {
      const daysInMonth = daysInMonths[i];
      if (i === currentMonth) {
        timeDiff += daysInMonth - currentDay;
      } else if (i === date.month - 1) {
        timeDiff += date.day;
      } else {
        timeDiff += daysInMonth;
      }
    }
    console.log(timeDiff);

    this.state = {
      numberOfDays: timeDiff,
      pagesPerDay: Math.ceil(pages / timeDiff),
    }
  }

  render () {

    return (
      <View style={styles.breakdownContainer}>
        <View>
          <Text style={styles.textContainer}>
            Reading Goal!
          </Text>
        </View>
        <View>
        <Text style={styles.textContainer}>
          Daily Pages: {this.state.pagesPerDay}
        </Text>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    fontFamily: 'Futura',
    fontSize: 40,
    margin: 25,
  },
  breakdownContainer: {
    margin: 25,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  }
})

export default Breakdown;
