import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {colors} from '../theme';

const Loader = (): JSX.Element => {
  return (
    <View className="flex-row justify-center py-8">
      <ActivityIndicator size="large" color={colors.button} />
    </View>
  );
};

export default Loader;
