import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {categoryBG, colors} from '../theme';

interface Expense {
  id: number;
  title: string;
  amount: number;
  category: string;
}

interface Props {
  item: Expense;
}

const ExpenseCard = ({item}: Props) => {
  return (
    <TouchableOpacity
      style={{backgroundColor: categoryBG[item.category]}}
      className={`bg-white rounded-2xl p-3 mb-3 shadow-sm`}>
      <View>
        <Text className={`${colors.heading} font-bold`}>{item.title}</Text>
        <Text className={`${colors.heading} text-xs`}>{item.category}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ExpenseCard;
