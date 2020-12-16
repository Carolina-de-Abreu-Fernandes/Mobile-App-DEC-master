import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { Image, StyleSheet, KeyboardAvoidingView } from 'react-native';
import styled from 'styled-components';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';

const Background = ({ children }) => {
  return (
    <LinearGradient
      colors={['#111', '#152525']}
      style={{
        flex: 1,
        paddingTop: 30,
        marginTop: 25,
      }}
    >
      {children}
    </LinearGradient>
  );
};
const TopBar = styled.View`
  flex-direction: row;
`;

TopBar.Left = styled.View`
  flex: 1;
  padding-left: 16px;
`;
TopBar.Middle = styled.View`
  flex: 2;
  align-items: center;
`;
TopBar.Right = styled.View`
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
  text-transform: uppercase;
`;

export default function Consume({ navigation }) {
  return (
    <Background>
      <TopBar>
        <TopBar.Left>
          <Button
            type="clear"
            onPress={() => navigation.goBack()}
            icon={<Icon name="chevron-left" size={16} color="#fffceb" />}
          />
        </TopBar.Left>
        <TopBar.Middle>
          <TopBar.SubTitle> Consumo</TopBar.SubTitle>
        </TopBar.Middle>
        <TopBar.Right>
          <Button
            type="clear"
            icon={
              <Icon
                name="more-vertical"
                size={16}
                color="#fffceb"
                backgroundColor="transparent"
              />
            }
          />
        </TopBar.Right>
      </TopBar>
    </Background>
  );
}
