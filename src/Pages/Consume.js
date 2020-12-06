import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function Consume() {
  return (
    <View style={styles.container}>
      <Text> Tela de Gastos Mensais</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
