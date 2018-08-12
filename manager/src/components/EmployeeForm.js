import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';
import { CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';

class EmployeeForm extends Component{
  render() {
    return(
    <View>
      <CardSection>
        <Input
          label="Name"
          placeholder="enter full name"
          value={this.props.name}
          onChangeText={ value => this.props.employeeUpdate({prop:'name', value })}
        />
      </CardSection>

      <CardSection>
        <Input
          label="Phone"
          placeholder="enter your cell no"
          value={this.props.phone}
          onChangeText={ value => this.props.employeeUpdate({prop:'phone', value })}
        />
      </CardSection>

      <CardSection>
      <Text style={styles.pickerTextStyle}> Shift </Text>

      <Picker style={{ flex:1 }}
        selectedValue={this.props.shift}
        onValueChange={value => this.props.employeeUpdate({ prop: 'shift' , value }) }
      >
        <Picker.Item label="SUNDAY" value="SUNDAY" />
        <Picker.Item label="MONDAY" value="MONDAY" />
        <Picker.Item label="TUESDAY" value="TUESDAY" />
        <Picker.Item label="WEDNESDAY" value="WEDNESDAY" />
        <Picker.Item label="THURSDAY" value="THURSDAY" />
        <Picker.Item label="FRIDAY" value="FRIDAY" />
        <Picker.Item label="SATURDAY" value="SATURDAY" />
      </Picker>
      </CardSection>

    </View>
    );
  }
}

const styles = {
 pickerTextStyle: {
   fontSize: 18,
   paddingLeft: 20
 }
};

const mapStateToProps=(state) => {
  const {name, phone, shift} = state.employeeForm;

  return { name, phone, shift };
};


export default connect(mapStateToProps, { employeeUpdate }) (EmployeeForm);
