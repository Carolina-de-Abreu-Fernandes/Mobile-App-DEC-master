import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { IconPassword } from '../assets/img/password.png';
import { IconLogin } from '../assets/img/user.png';
import { IconLogo } from '../assets/img/icon.png';

const pressButton = () => {
  Alert.alert('Em andamento...');
};

const buttonForgotMyPassword = () => {
  Alert.alert('Informe seu e-mail para envio de nova senha');
};

const IconPassword = () => {
  return <Image source={IconPassword} style={{ width: 20, height: 20 }} />;
};
const IconLogin = () => {
  return <Image source={IconLogin} style={{ width: 20, height: 20 }} />;
};

export default class Login extends Component {
  render() {
    return (
      <View style={style.screen}>
        <Image source={IconLogo} style={style.logo} />

        <View>
          <TextInput
            style={style.camp}
            underlineColorAndroid="transparent"
            placeholder="Login"
          />
        </View>

        <View>
          <TextInput
            secureTextEntry={true}
            style={style.camp}
            underlineColorAndroid="transparent"
            placeholder="Password"
          />
        </View>

        <View>
          <TouchableOpacity onPress={pressButton} style={style.button}>
            <Text>Entrar</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={buttonForgotMyPassword}>
          <View>
            <Text style={style.forgotMyPassword}>Esqueci minha Senha</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
    margin: 10,
  },
  camp: {
    width: 300,
    height: 40,
    borderColor: '#72efdd',
    borderWidth: 0,
    backgroundColor: 'white',
    borderWidth: 1,
    marginTop: 10,
  },
  screen: {
    backgroundColor: '#33415c',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressButton: {
    backgroundColor: '#56cfe1',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20,
  },
  buttonForgotMyPassword: {
    marginTop: 20,
    color: '#f28482',
    backgroundColor: 'transparent',
    alignItems: 'right',
    paddingRight: 15,
  },
});
