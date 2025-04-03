import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 


export default function MonkeyScreen() {
    const navigation = useNavigation(); 
  return (
    <View style={styles.container}>
    <Text style={styles.imptext}>
        hello luffy
    </Text>
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
});
