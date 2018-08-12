import _ from 'lodash';
import Communications from 'react-native-communications';
import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Button, Confirm } from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import EmployeeForm from './EmployeeForm';



class EmployeeEdit extends Component {
  state = { showModal: false }

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
        this.props.employeeUpdate({ prop, value });
    });
  }

  onSavePress() {
    const { name, phone, shift } = this.props;

    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }

  onTextPress(){
    const { name, phone, shift } = this.props;
    Communications.text(phone , `${name} your updated shift is on ${shift}`);
  }

onDecline(){
  this.setState({ showModal: false });
}

onAccept(){
  const { uid } = this.props.employee;
  this.props.employeeDelete({ uid });
}

render(){
 return(
   <Card>

      <EmployeeForm {...this.props} />

      <CardSection>
      <Button onPress={this.onSavePress.bind(this)} > Save </Button>
      </CardSection>

      <CardSection>
      <Button onPress={this.onTextPress.bind(this)} > Text Schedule </Button>
      </CardSection>

      <CardSection>
      <Button onPress={() => this.setState({ showModal: !this.state.showModal } )}> <Text style={styles.fireButton}> Fire Employee </Text> </Button>
      </CardSection>


      <Confirm
      visible={this.state.showModal}
      onAccept={this.onAccept.bind(this)}
      onDecline={this.onDecline.bind(this)}
      >
        Are you sure you want to fire employee ?
      </Confirm>
  </Card>
      );
    }
}

const styles={
  fireButton:{
    color:'#f00'
  }
}

const mapStateToProps=(state) => {
  const {name, phone, shift} = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, {employeeUpdate, employeeSave, employeeDelete})(EmployeeEdit);
