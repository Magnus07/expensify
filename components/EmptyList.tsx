import {View, Text, Image} from 'react-native';
import React from 'react';

interface Props {
  message?: string;
}

const EmptyList = ({message}: Props) => {
  return (
    <View className="flex justify-center items-center my-5 space-y-3">
      <Image
        source={require('../assets/images/empty.png')}
        className="w-36 h-36 shadow"
      />
      <Text className="font-bold text-gray-400">
        {message || 'data not found'}
      </Text>
    </View>
  );
};

export default EmptyList;
