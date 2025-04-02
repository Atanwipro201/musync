
import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function Main() {
  return (
      <Text style={styles.imptext}>Welcome to world 201!</Text>
  );
}

const styles = StyleSheet.create({
  imptext:{
    fontWeight:"bold",
    fontSize:"30"
  }
});
