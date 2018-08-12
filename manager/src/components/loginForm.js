 import React, { Component } from 'react';
import { Text,View } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser, createUser} from '../actions';


class LoginForm extends Component {
onEmailChange(text) {
  this.props.emailChanged(text);
}

onloginPress() {
  const {email, password} = this.props;
  this.props.loginUser({ email, password });
}

onCreatePress() {
  const {email, password} = this.props;
  this.props.createUser({ email, password });
}

onPasswordChange(text) {
  this.props.passwordChanged(text);
}



renderButton() {
    if (this.props.loading) {
    return (
    <CardSection>
      <Spinner />
    </CardSection>
  );
    }

return (
<CardSection>
  <Button onPress={this.onloginPress.bind(this)}>
   Log In
    </Button>

    <Button onPress={this.onCreatePress.bind(this)}>
     Create User
      </Button>
</CardSection>
  );


}
  render() {
    return(
      <Card>
        <CardSection>
          < Input
          label="Email:"
          placeholder="mail@email.com*"
          onChangeText={this.onEmailChange.bind(this)}
          value={this.props.email}
          />
        </CardSection>

        <CardSection>
        <Input
        secureTextEntry
        label="Password:"
        placeholder="atleast 6 chars required*"
        onChangeText={this.onPasswordChange.bind(this)}
        value={ this.props.password }
        />
        </CardSection>

          <Text style={styles.errorStyle}> {this.props.error} </Text>

          {this.renderButton()}
      </Card>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return{ email, password, error, loading };
};

const styles={
  errorStyle:{
    alignSelf: 'center',
    fontSize: 20,
    color: 'red'
  },

  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
    }
}

export default connect (mapStateToProps, { emailChanged, passwordChanged, loginUser, createUser }) (LoginForm);
