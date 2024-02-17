import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import {categoryBG, colors} from '../theme';
import EmptyList from '../components/EmptyList';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {RootStackParamList, Routes} from '../navigation';
import BackIcon from '../components/BackIcon';
import {categories} from '../config';
import ExpenseCard from '../components/ExpenseCard';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {query, where, getDocs} from 'firebase/firestore';
import {expensesRef, tripsRef} from '../config/firebase';

type Props = NativeStackScreenProps<RootStackParamList, Routes.TripExpenses>;

export default function TripExpenses({
  route: {
    params: {id, country, place},
  },
}: Props) {
  const navigation = useNavigation();
  const [expenses, setExpenses] = useState([]);
  const isFocused = useIsFocused();

  const fetchExpenses = async () => {
    const q = query(expensesRef, where('tripId', '==', id));
    const querySnapshot = await getDocs(q);
    const data = [];
    querySnapshot.forEach(doc => data.push({...doc.data(), id: doc.id}));
    setExpenses(data);
  };

  useEffect(() => {
    if (isFocused) {
      fetchExpenses();
    }
  }, [isFocused]);
  return (
    <ScreenWrapper className="flex-1">
      <View className="flex py-5 space-y-3 px-3">
        <View className="relative">
          <View className="absolute top-2 left-0 z-10">
            <BackIcon />
          </View>
          <Text
            className={`capitalize font-bold text-xl ${colors.heading} text-center`}>
            {place}
          </Text>
          <Text className={`capitalize text-xs ${colors.heading} text-center`}>
            {country}
          </Text>
        </View>
        <View className="flex-row justify-center items-cente rounded-xl mx-4 mb-4">
          <Image
            source={require('../assets/images/7.png')}
            className="w-72 h-72"
          />
        </View>
        <View className=" space-y-3">
          <View className="flex-row justify-between items-center">
            <Text className={`${colors.heading} font-bold text-xl capitalize`}>
              Expenses
            </Text>
            <TouchableOpacity
              className="p-2 px-3 bg-white border border-gray-200 rounded-full capitalize"
              onPress={() => navigation.navigate(Routes.AddExpense, {id})}>
              <Text className={colors.heading}>Add expense</Text>
            </TouchableOpacity>
          </View>
          <View className="h-[430px]">
            <FlatList
              data={expenses}
              keyExtractor={item => `${item.id}`}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={
                <EmptyList message="You haven't imported any trips yet." />
              }
              className="mx-1"
              renderItem={item => <ExpenseCard item={item.item} />}
            />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}
