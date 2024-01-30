import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import AddExpense from '../screens/AddExpense';
import AddTrip from '../screens/AddTrip';
import {RootStackParamList, Routes} from '.';
import TripExpenses from '../screens/TripExpenses';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Routes.Home}>
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
        <Stack.Screen
          name={Routes.TripExpenses}
          options={{headerShown: false}}
          component={TripExpenses}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
