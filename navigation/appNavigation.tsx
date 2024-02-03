import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import AddExpense from '../screens/AddExpense';
import AddTrip from '../screens/AddTrip';
import {RootStackParamList, Routes} from '.';
import TripExpenses from '../screens/TripExpenses';
import Welcome from '../screens/Welcome';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Routes.Welcome}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={Routes.Welcome} component={Welcome} />
        <Stack.Screen name={Routes.Home} component={Home} />
        <Stack.Screen name={Routes.Login} component={Login} />
        <Stack.Screen name={Routes.AddExpense} component={AddExpense} />
        <Stack.Screen name={Routes.AddTrip} component={AddTrip} />
        <Stack.Screen name={Routes.TripExpenses} component={TripExpenses} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
