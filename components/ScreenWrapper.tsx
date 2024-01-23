import {View, StatusBar, Platform} from 'react-native';
import React, {ReactNode} from 'react';

interface Props {
  children: ReactNode;
  className: string;
}

export default function ScreenWrapper({children, className}: Props) {
  const statusBarHeight = () => {
    if (StatusBar.currentHeight) {
      return StatusBar.currentHeight;
    }
    if (Platform.OS === 'ios') {
      return 45;
    }
    return 0;
  };

  return (
    <View className={className} style={{paddingTop: statusBarHeight()}}>
      {children}
    </View>
  );
}
