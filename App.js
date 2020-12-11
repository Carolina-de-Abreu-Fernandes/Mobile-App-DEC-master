import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
  Keyboard,
} from 'react-native';

export default function App() {
  const [offset] = useState(new Animated.ValueXY({ x: 10, y: 80 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({ x: 160, y: 160 }));
  useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      keyboardDidShow
    );
    keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      keyboardDidHide
    );

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
      }),
    ]).start();
  }, []);

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 60,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 60,
        duration: 100,
      }),
    ]).start();
  }
  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 130,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 130,
        duration: 100,
      }),
    ]).start();
  }
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.image}>
        <Animated.Image
          style={{
            width: logo.x,
            height: logo.y,
          }}
          source={require('./src/assets/img/texturw.jpg')}
        />
      </View>
      <View style={styles.none}>
        <Animated.View
          styles={[
            styles.container,
            {
              opacity: opacity,
              transform: [{ translateY: offset.y }],
            },
          ]}
        >
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
          <TouchableOpacity style={styles.signIn}>
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signUp}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#152525',
    marginTop: 30,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 80,
    paddingBottom: 5,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50,
  },
  input: {
    backgroundColor: '#fff',
    marginBottom: 20,
    color: '#222',
    fontSize: 19,
    borderRadius: 8,
    padding: 20,
    height: 60,
    width: 190,
  },
  signIn: {
    backgroundColor: '#55a630',
    height: 45,

    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  signInText: {
    color: '#fff',
    fontSize: 20,
  },
  signUp: {
    alignItems: 'center',
    color: '#2b9348',
    marginTop: 15,
  },
  signUpText: {
    color: '#fff',
    justifyContent: 'center',
  },
  none: {
    padding: 50,
    marginBottom: 10,
  },
});
