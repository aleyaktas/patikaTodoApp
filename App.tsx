import React, {useState} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Todo from './src/components/Todo/Todo';

export interface TodoProps {
  text: string;
  isPressed: boolean;
  onClick?: () => void;
}

function App(): JSX.Element {
  const [todos, setTodos] = useState<Array<TodoProps>>([]);
  const [text, setText] = useState<string>('');

  const handlePress = () => {
    setTodos([...todos, {text, isPressed: false}]);
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
      <FlatList
        data={todos}
        renderItem={({item, index}) => (
          <Todo
            text={item.text}
            isPressed={item.isPressed}
            onClick={() =>
              setTodos(
                todos.map((todo, i) => {
                  if (i === index) {
                    return {
                      ...todo,
                      isPressed: !todo.isPressed,
                    };
                  }
                  return todo;
                }),
              )
            }
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
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
