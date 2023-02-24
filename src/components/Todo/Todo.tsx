import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {TodoProps} from '../../../App';
import styles from './Todo.styles';

const Todo = ({text, isPressed, onClick}: TodoProps) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={[styles.container, isPressed && styles.containerPressed]}>
      <Text style={[styles.text, isPressed && styles.textPressed]}>{text}</Text>
    </TouchableOpacity>
  );
};
export default Todo;
