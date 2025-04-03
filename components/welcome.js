import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Welcome() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.imptext}>Welcome to World 201!</Text>
      <Button title='go monkey' style={styles.nativeButton} onPress={() => navigation.navigate('Monkey')} />
      <Button title='go nakama' style={styles.nativeButton} onPress={() => navigation.navigate('Nakama')} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
   },
  imptext:{
    fontWeight:"bold",
    fontSize:"40",
    color:"cyan"
  },  
  nativeButton:{
    color:"white",
    fontSize:"30"
  },
});
