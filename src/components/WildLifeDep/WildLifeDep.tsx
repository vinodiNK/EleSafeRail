import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const WildLifeDep = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wild Life Department Page</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('Get Past Information pressed')}
      >
        <Text style={styles.buttonText}>Get Past Information</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('Get Real Time Information pressed')}
      >
        <Text style={styles.buttonText}>Get Real Time Information</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WildLifeDep;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaffea',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#2e7d32',
  },
  button: {
    backgroundColor: '#43a047',
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
