import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import FastImage from 'react-native-fast-image';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../navigation';

const Welcome = () => {
  const navigation = useNavigation()
  return (
    <ScreenWrapper className="flex">
      <View className="justify-around">
      <View className="justify-center flex-row mt-10">
      {/* <FastImage
        source={require('../assets/images/welcome.gif')}
        className="w-96 h-96"
      /> */}
      <Image
        source={require('../assets/images/welcome.gif')}
        className="w-96 h-96 mt-6"
        // style={{height: 100, width: 100}}
      />
      {/* <LottieView
        source={require('../assets/images/welcome.gif')}
        style={{width: '100%', height: '100%'}}
        autoPlay
        duration={1000}
        loop={false}
      /> */}
      </View>
      <View className='items-center space-y-5 px-4 mt-8'>
          <Text className='font-bold text-4xl mb-6'>Expensify</Text>
          <TouchableOpacity className='w-full bg-green-400 py-3 rounded-full' onPress={()=>navigation.navigate(Routes.SignIn)}>
            <Text className='text-white text-center font-bold text-lg'>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity className='w-full bg-green-400 py-3 rounded-full' onPress={()=>navigation.navigate(Routes.SignUp)}>
            <Text className='text-white text-center font-bold text-lg'>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;
