import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './Todo.styles';

const Todo = ({todo}: {todo: string}) => {
  const [pressed, setPressed] = React.useState(false);
  const handlePress = () => {
    console.log('pressed');
    setPressed(!pressed);
  };
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.container, pressed && styles.containerPressed]}>
      <Text style={[styles.text, pressed && styles.textPressed]}>{todo}</Text>
    </TouchableOpacity>
  );
};
export default Todo;
