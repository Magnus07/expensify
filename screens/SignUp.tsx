import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '../components/BackIcon';
import ScreenWrapper from '../components/ScreenWrapper';
import {Routes} from '../navigation';
import {colors} from '../theme';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleButtonPress = () => {
    if (email && password) {
      navigation.goBack();
      navigation.navigate(Routes.Home);
    }
  };
  return (
    <ScreenWrapper className="flex">
      <View className="flex justify-between h-full px-3">
        <View className="space-y-5">
          <View className="relative">
            <View className="absolute top-0 left-0 z-10">
              <BackIcon />
            </View>
            <Text
              className={`font-bold text-xl ${colors.heading} text-center capitalize`}>
              Sign up
            </Text>
          </View>
          <View className="flex items-center">
            <Image
              source={require('../assets/images/signup.png')}
              className="w-72 h-72"
            />
          </View>
          <View className="px-2 flex space-y-3">
            <Text className={`capitalize font-bold text-lg ${colors.heading}`}>
              email
            </Text>
            <TextInput
              className="bg-white rounded-full text-md p-3"
              value={email}
              onChangeText={value => setEmail(value)}
            />
            <Text className={`capitalize font-bold text-lg ${colors.heading}`}>
              password
            </Text>
            <TextInput
              className="bg-white rounded-full text-md p-3"
              value={password}
              secureTextEntry
              onChangeText={value => setPassword(value)}
            />
          </View>
        </View>
        <View className="py-8">
          <TouchableOpacity
            className="bg-green-500 w-full rounded-full p-3"
            onPress={handleButtonPress}>
            <Text className="capitalize text-white font-bold text-lg text-center">
              sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SignUp;
