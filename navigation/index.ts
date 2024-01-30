import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export enum Routes {
  Home = 'Home',
  Login = 'Login',
  AddExpense = 'AddExpense',
  AddTrip = 'AddTrip',
  TripExpenses = 'TripExpenses',
}

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  AddExpense: undefined;
  AddTrip: undefined;
  TripExpenses: {place: string; country: string};
};
