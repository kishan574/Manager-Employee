import React from 'react';
import { Text,View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';
import { Card } from './Card';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
  const {containerStyle, textStyle, cardSecStyle} = styles;
  return (
  <Modal
    visible={visible}
    transparent
    animationType="slide"
    onRequestClose={() => {}}
    >

    <View style={containerStyle}>
      <CardSection style={cardSecStyle}>
        <Text style={textStyle}> {children} </Text>
      </CardSection>

      <CardSection>
        <Button onPress={onAccept}>YES</Button>
        <Button onPress={onDecline}>NO</Button>
      </CardSection>
    </View>
  </Modal>
  );
}

const styles = {
  cardSecStyle:{
      justifyContent: 'center'
  },

  textStyle:{
    flex:1,
    fontSize: 18,
    textAlign: 'center'
  },

  containerStyle:{
    backgroundColor: 'rgba(0,0,0, 0.70)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
}

export { Confirm };
