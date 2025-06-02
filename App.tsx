import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import GeneralPeople from './src/components/GeneralPeople';
import HomePage from './src/components/HomePage';
import StationMaster from './src/components/StationMaster/StationMaster';
import StationMasterLogin from './src/components/StationMaster/StationMasterLogin';
import TrainDriver from './src/components/TrainDriver/TrainDriver';
import TrainDriverLogin from './src/components/TrainDriver/TrainDriverLogin';
import WildLifeDep from './src/components/WildLifeDep/WildLifeDep';
import WildLifeDepLogin from './src/components/WildLifeDep/WildLifeDepLogin';
import { RootStackParamList } from './src/types/navigation';
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="TrainDriverLogin" component={TrainDriverLogin} />
        <Stack.Screen name="TrainDriver" component={TrainDriver} />
        <Stack.Screen name="StationMasterLogin" component={StationMasterLogin} />
        <Stack.Screen name="StationMaster" component={StationMaster} />
        <Stack.Screen name="WildLifeDepLogin" component={WildLifeDepLogin} />
        <Stack.Screen name="WildLifeDep" component={WildLifeDep} />
        <Stack.Screen name="GeneralPeople" component={GeneralPeople} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
