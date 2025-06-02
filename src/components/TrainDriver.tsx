import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const TrainDriver = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Train Driver Page</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('Open Map pressed')}
      >
        <Text style={styles.buttonText}>Open Map</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('Contact Next Station pressed')}
      >
        <Text style={styles.buttonText}>Contact Next Station</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TrainDriver;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaf2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  button: {
    backgroundColor: '#008080',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
