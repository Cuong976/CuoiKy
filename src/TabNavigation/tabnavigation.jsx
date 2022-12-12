import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icons from "react-native-vector-icons/Ionicons";
import NotifiScreen from './notifiScreen';
import Setting from './settingScreen';
import DreamScreen from '../StackNavigation/dreamScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === " ") {
              iconName = focused
                ? "home"
                : "home-outline";
            } else if (route.name === "  ") {
              iconName = focused ? "notifications" : "notifications-outline";
            } else if (route.name === "   ") {
              iconName = focused ? "settings" : "settings-outline";
            }

            // You can return any component that you like here!
            return <Icons name={iconName} size={size} color={color} />;
          },

          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
          tabBarHideOnKeyboard: true,
        })}
      >
        <Tab.Screen
          name=" "
          component={DreamScreen}
          tabBar={() => null}
          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Tab.Screen
          name="  "
          component={NotifiScreen}
          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Tab.Screen
          name="   "
          component={Setting}
          options={{ headerShown: false, tabBarVisible: false }}
        />
      </Tab.Navigator>
    </>
  )
}