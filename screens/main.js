
import React from 'react';
import { StyleSheet, Text, Button } from 'react-native';

export default function Main() {
  return (
    <>
      <Text style={styles.imptext}>Welcome to World 201!</Text>
      <Button title='say hello' style={styles.nativeButton} onPress={()=>{alert("hello world")}}></Button>
      <Button title='go back to the old world' style={styles.nativeButton} onPress={()=>{alert("hello world")}}></Button>
    </>
  );
}

const styles = StyleSheet.create({
  imptext:{
    fontWeight:"bold",
    fontSize:"40",
    color:"cyan"
  },
  nativeButton:{
    color:"white",
    fontSize:"30"
  }
});
