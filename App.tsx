import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Yapılacaklar</Text>
        <Text style={styles.count}>0</Text>
      </View>
      <View style={styles.cardContainer}>
        <TextInput
          placeholderTextColor="#63696C"
          style={styles.textInput}
          placeholder="Yapılacak..."
        />
        <View style={styles.button}>
          <Button color="#fff" title="Kaydet" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#112027',
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
  },
  button: {
    padding: 5,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#808080',
    cursor: 'pointer',
  },
});

export default App;
