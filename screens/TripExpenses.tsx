import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import {categoryBG, colors} from '../theme';
import EmptyList from '../components/EmptyList';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList, Routes} from '../navigation';
import BackIcon from '../components/BackIcon';
import {categories} from '../config';
import ExpenseCard from '../components/ExpenseCard';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const expenses = [
  {
    id: 1,
    title: 'ate sandwich',
    amount: 4,
    category: 'food',
  },
  {
    id: 2,
    title: 'bought a jacket',
    amount: 50,
    category: 'shopping',
  },
  {
    id: 3,
    title: 'watched a movie',
    amount: 100,
    category: 'entertainment',
  },
  {
    id: 4,
    title: 'ate sandwich',
    amount: 4,
    category: 'food',
  },
  {
    id: 5,
    title: 'bought a jacket',
    amount: 50,
    category: 'shopping',
  },
  {
    id: 6,
    title: 'watched a movie',
    amount: 100,
    category: 'entertainment',
  },
];

type Props = NativeStackScreenProps<RootStackParamList, Routes.TripExpenses>;

export default function TripExpenses({
  route: {
    params: {country, place},
  },
}: Props) {
  const navigation = useNavigation();

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
              onPress={() => navigation.navigate(Routes.AddExpense)}>
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
