import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {colors} from '../theme';
import {useNavigation} from '@react-navigation/native';

const BackIcon = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      className="bg-white rounded-full h-8 w-8">
      <ChevronLeftIcon color={colors.button} size={30} />
    </TouchableOpacity>
  );
};

export default BackIcon;
