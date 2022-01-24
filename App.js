import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Focus } from './src/features/focus/Focus';

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  return (
    <View style={styles.container}>
      {focusSubject ? <Text>here I build the timer</Text> : <Focus />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252250',
  },
});
