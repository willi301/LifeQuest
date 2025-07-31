// ProfileStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './profile';
import Shop from './shop';

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Shop" component={Shop} />
    </Stack.Navigator>
  );
}