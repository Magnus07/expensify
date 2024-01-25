import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import AddExpense from '../screens/AddExpense';
import AddTrip from '../screens/AddTrip';
import {Routes} from '.';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name={Routes.Home}
          component={Home}
        />
        <Stack.Screen
          name={Routes.Login}
          options={{headerShown: false}}
          component={Login}
        />
        <Stack.Screen
          name={Routes.AddExpense}
          options={{headerShown: false}}
          component={AddExpense}
        />
        <Stack.Screen
          name={Routes.AddTrip}
          options={{headerShown: false}}
          component={AddTrip}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
