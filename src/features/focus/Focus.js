import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import {RoundedButton} from "../../components/roundedButton"

export const Focus = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What do you want to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput style={{flex: 1, marginRight: 20}} />
          <RoundedButton size={50} title="+" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
  },
  inputContainer: {
    paddingTop: 20,
    flexDirection: "row",
  },
});
