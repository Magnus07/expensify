import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import AddExpense from '../screens/AddExpense';
import AddTrip from '../screens/AddTrip';
import {RootStackParamList, Routes} from '.';
import TripExpenses from '../screens/TripExpenses';
import Welcome from '../screens/Welcome';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigation() {
  const {user} = useSelector((state: RootState) => state.user);

  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={Routes.Home}
          screenOptions={{headerShown: false}}>
          <Stack.Screen name={Routes.Home} component={Home} />
          <Stack.Screen name={Routes.AddExpense} component={AddExpense} />
          <Stack.Screen name={Routes.AddTrip} component={AddTrip} />
          <Stack.Screen name={Routes.TripExpenses} component={TripExpenses} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={Routes.Welcome}
          screenOptions={{headerShown: false}}>
          <Stack.Screen name={Routes.Welcome} component={Welcome} />
          <Stack.Screen
            name={Routes.SignIn}
            component={SignIn}
            options={{presentation: 'modal'}}
          />
          <Stack.Screen
            name={Routes.SignUp}
            component={SignUp}
            options={{presentation: 'modal'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
