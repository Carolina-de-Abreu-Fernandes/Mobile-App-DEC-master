import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Alert, Button, Image, StyleSheet, View } from 'react-native';
import styled from 'styled-components';

import Arrow from '../assets/img/arrow-down.png';
import Dots from '../assets/img/vertical-dots.png';

const Background = ({ children }) => {
  return (
    <LinearGradient
      colors={['#1311', '#1121']}
      style={{
        flex: 1,
        paddingTop: 50,
      }}
    >
      {children}
    </LinearGradient>
  );
};
const TobBar = styled.View`
  flex-direction: row;
`;

TobBar.Left = styled.View`
  flex: 1;
  padding-left: 16px;
`;
TobBar.Middle = styled.View`
  flex: 2;
  align-items: center;
`;
TobBar.Right = styled.View`
  flex: 1;
  padding-right: 16px;
  align-items: flex-end;
`;

TopBar.Title = styled.Text`
  color: white;
  text-transform: uppercase;
`;
TopBar.SubTitle = styled.Text`
  color: white;
  font-weight: bold;
`;

export function Consume() {
  const createTwoButtonAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    );

  const createThreeButtonAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Ask me later',
          onPress: () => console.log('Ask me later pressed'),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    );
  return (
    <Background>
      <TopBar>
        <TopBar.Left>
          <Image source={Arrow} style={{ width: 20, height: 20 }} />
        </TopBar.Left>
        <TopBar.Middle>
          <TopBar.Title> Seus Alertas</TopBar.Title>
          <TopBar.SubTitle> Avisos </TopBar.SubTitle>
        </TopBar.Middle>
        <TopBar.Right>
          <Image source={Dots} style={{ width: 20, height: 20 }} />
        </TopBar.Right>
      </TopBar>
      <View style={styles.container}>
        <Button title="2-Button Alert" onPress={createTwoButtonAlert} />

        <Button title="3-Button Alert" onPress={createThreeButtonAlert} />
      </View>
    </Background>
  );
}
