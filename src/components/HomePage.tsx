import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../types/navigation';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const HomePage = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Train Ele App</Text>

      <TouchableOpacity
  style={styles.button}
  onPress={() => navigation.navigate('TrainDriverSignUp')} // ✅ points to the sign-up screen
>
  <Text style={styles.buttonText}>Train Driver</Text>
</TouchableOpacity>



      <TouchableOpacity
  style={styles.button}
  onPress={() => navigation.navigate('StationMaster')}
>
  <Text style={styles.buttonText}>Station Master</Text>
</TouchableOpacity>


      <TouchableOpacity
  style={styles.button}
  onPress={() => navigation.navigate('WildLifeDep')}
>
  <Text style={styles.buttonText}>Wild Life Department</Text>
</TouchableOpacity>


      <TouchableOpacity
  style={styles.button}
  onPress={() => navigation.navigate('GeneralPeople')}
>
  <Text style={styles.buttonText}>General People</Text>
</TouchableOpacity>

    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaf4ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#004080',
  },
  button: {
    backgroundColor: '#007acc',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
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
