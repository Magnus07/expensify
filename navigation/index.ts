import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export enum Routes {
  Home = 'Home',
  Login = 'Login',
  AddExpense = 'AddExpense',
  AddTrip = 'AddTrip',
  TripExpenses = 'TripExpenses',
  Welcome = 'Welcome',
  SignIn = 'SignIn',
  SignUp = 'SignUp',
}

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  AddExpense: {place: string; country: string; id: string};
  AddTrip: undefined;
  TripExpenses: {place: string; country: string};
  Welcome: undefined;
  SignIn: undefined;
  SignUp: undefined;
};
