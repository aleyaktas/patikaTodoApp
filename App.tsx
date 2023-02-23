import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Todo from './src/components/Todo/Todo';

function App(): JSX.Element {
  const [todos, setTodos] = React.useState<string[]>([]);
  const [text, setText] = React.useState('');

  const handlePress = () => {
    setTodos([...todos, text]);
    setText('');
  };
  const handleChange = (e: any) => {
    setText(e.nativeEvent.text);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Yapılacaklar</Text>
        <Text style={styles.count}>{todos.length}</Text>
      </View>
      {todos.map(todo => (
        <Todo todo={todo} />
      ))}
      <View style={styles.cardContainer}>
        <TextInput
          placeholderTextColor="#63696C"
          style={styles.textInput}
          placeholder="Yapılacak..."
          onChange={handleChange}
          value={text}
        />
        <View
          style={[
            styles.button,
            {
              backgroundColor: text ? '#FFA500' : '#808080',
            },
          ]}>
          <Button onPress={handlePress} color="#fff" title="Kaydet" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#112027',
    overflow: 'scroll',
  },
  headerContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    flex: 1,
    color: '#FFA500',
  },
  count: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFA500',
  },
  cardContainer: {
    marginTop: 'auto',
    backgroundColor: '#36474F',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  textInput: {
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 2,
    borderBottomColor: '#808080',
    backgroundColor: 'transparent',
    color: '#fff',
  },
  button: {
    padding: 5,
    margin: 10,
    borderRadius: 10,
  },
});

export default App;
