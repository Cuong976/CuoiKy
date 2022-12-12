import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Main from '../main';
import DreamScreen from './dreamScreen';

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='DreamScreen' screenOptions={{headerShown: false}}>
        <Stack.Screen  name="Main" component={Main}/>
        <Stack.Screen  name="DreamScreen" component={DreamScreen}/>
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
   
})