import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '../components/BackIcon';
import ScreenWrapper from '../components/ScreenWrapper';
import {Routes} from '../navigation';
import {colors} from '../theme';
import Snackbar from 'react-native-snackbar';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/firebase';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import Loader from '../components/Loader';
import {setIsUserLoading} from '../redux/slices/user';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const isUserLoading = useSelector<RootState, boolean>(
    state => state.user.isUserLoading,
  );

  const handleButtonPress = () => {
    if (email && password) {
      try {
        dispatch(setIsUserLoading(true));
        signInWithEmailAndPassword(auth, email, password);
      } catch (error: any) {
        let message;
        if (error instanceof Error) message = error.message;
        else message = String(error);
        Snackbar.show({
          text: message,
          backgroundColor: 'red',
        });
      } finally {
        dispatch(setIsUserLoading(false));
      }
    } else {
      Snackbar.show({
        text: 'Email and password are required.',
        backgroundColor: 'red',
      });
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
              Sign in
            </Text>
          </View>
          <View className="flex items-center">
            <Image
              source={require('../assets/images/login.png')}
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
            <View className="items-end pt-2">
              <TouchableOpacity>
                <Text className="capitalize">forgot password?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className="py-8">
          {isUserLoading ? (
            <Loader />
          ) : (
            <TouchableOpacity
              className="bg-green-500 w-full rounded-full p-3"
              onPress={handleButtonPress}>
              <Text className="capitalize text-white font-bold text-lg text-center">
                sign in
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SignIn;
