import React from 'react';
import {
  View,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import { Logo } from './src/assets/img/icon.png';
export default function App() {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.image}>
        <Image source={Logo} />
      </View>
      <View styles={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          autoCorrect={false}
          onChangeText={() => {}}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          autoCorrect={false}
          onChangeText={() => {}}
        />
        <TouchableOpacity>
          <Text>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#151515',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  input: {
    backgroundColor: '#fff',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 8,
  },
});
