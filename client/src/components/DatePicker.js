import { Calendar, CalendarList } from 'react-native-calendars'; // 1.5.3
import { View, Alert } from 'react-native';
import React from 'react';

class DatePicker extends React.Component {
  constructor (props) {
    super();

    const { navigation } = props;
    this.pages = navigation.getParam('pages');
    console.log(this.pages);
  }
  render() {
    return (
      <View style={{ paddingTop: 50, flex: 1 }}>
        <CalendarList
          // Initially visible month. Default = Date()
          current={'2018-08-28'}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2012-05-10'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          // maxDate={'2012-05-30'}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={date => {
            console.log('selected day', date);
            this.props.navigation.navigate('Breakdown', {
              date,
              pages: this.pages,
            });
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'MMM yyyy'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={month => {
            console.log('month changed', month);
          }}
          // Hide month navigation arrows. Default = false
          hideArrows={true}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // If hideArrows=false and hideExtraDays=false do not swich month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={true}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
        />
      </View>
    );
  }
}

export default DatePicker;
