import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const StationMaster = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Station Master Page</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('Update Sensor Details pressed')}
      >
        <Text style={styles.buttonText}>Update Sensor Details</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('Contact Train Driver pressed')}
      >
        <Text style={styles.buttonText}>Contact Train Driver</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StationMaster;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff9f0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#007acc',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
