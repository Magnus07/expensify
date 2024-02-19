import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import FastImage from 'react-native-fast-image';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../navigation';
// import statusCodes along with GoogleSignin
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {GoogleAuthProvider, signInWithCredential} from 'firebase/auth';
import {auth} from '../config/firebase';

GoogleSignin.configure({
  webClientId:
    '443452730077-uuja1nkngspe4tkle3irvg2h49pined9.apps.googleusercontent.com', // client ID of type WEB for your server. Required to get the idToken on the user object, and for offline access.
});

const Welcome = () => {
  const navigation = useNavigation();

  // Somewhere in your code
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {idToken} = await GoogleSignin.signIn();
      const googleCredentials = GoogleAuthProvider.credential(idToken);
      await signInWithCredential(auth, googleCredentials);
    } catch (error) {
      console.log('error', error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

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
        <View className="items-center space-y-5 px-4 mt-8">
          <Text className="font-bold text-4xl mb-6">Expensify</Text>
          <TouchableOpacity
            className="w-full bg-green-400 py-3 rounded-full"
            onPress={() => navigation.navigate(Routes.SignIn)}>
            <Text className="text-white text-center font-bold text-lg">
              Sign In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="w-full bg-green-400 py-3 rounded-full"
            onPress={() => navigation.navigate(Routes.SignUp)}>
            <Text className="text-white text-center font-bold text-lg">
              Sign Up
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="w-full bg-white py-3 rounded-full flex-row items-center justify-center space-x-3 shadow"
            onPress={signIn}>
            <Image
              className="w-8 h-8"
              source={require('../assets/images/googleIcon.png')}
            />
            <Text className=" text-center font-bold text-lg text-gray-600">
              Sign In with Google
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;
