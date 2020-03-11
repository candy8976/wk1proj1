import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.a}>110719034 許澤怡</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BE77FF',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  a:{
    fontSize:30,
    color:'white',
  }
});
