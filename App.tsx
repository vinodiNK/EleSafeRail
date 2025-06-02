import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import GeneralPeople from './src/components/GeneralPeople';
import HomePage from './src/components/HomePage';
import StationMaster from './src/components/StationMaster';
import TrainDriver from './src/components/TrainDriver';
import WildLifeDep from './src/components/WildLifeDep';
import { RootStackParamList } from './src/types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="TrainDriver" component={TrainDriver} />
        <Stack.Screen name="StationMaster" component={StationMaster} />
        <Stack.Screen name="WildLifeDep" component={WildLifeDep} />
        <Stack.Screen name="GeneralPeople" component={GeneralPeople} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
