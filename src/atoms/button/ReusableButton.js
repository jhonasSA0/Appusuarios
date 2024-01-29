import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ReusableButton ({ title, buttonStyle, textStyle, onPress }) {
  return (
    <TouchableOpacity  style={[styles.button, buttonStyle,]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});