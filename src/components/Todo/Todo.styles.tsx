import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#7DA453',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    flex: 1,
  },
  containerPressed: {
    backgroundColor: '#36474F',
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
  textPressed: {
    textDecorationLine: 'line-through',
    color: '#808080',
  },
});
