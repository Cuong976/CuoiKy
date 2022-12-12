import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Main from '../main';
import DreamScreen from './dreamScreen';
import TabNavigation from '../TabNavigation/tabnavigation';

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main' screenOptions={{headerShown: false}}>
        <Stack.Screen  name="Main" component={Main}/>
        <Stack.Screen  name="DreamScreen" component={TabNavigation}/>
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
   
})