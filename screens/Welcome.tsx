import {View, Text, Image} from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import FastImage from 'react-native-fast-image';
import LottieView from 'lottie-react-native';

const Welcome = () => {
  return (
    <ScreenWrapper className="flex">
      {/* <View className="flex flex-1 justify-around"> */}
      {/* <View className="justify-center flex-row mt-10"> */}
      {/* <FastImage
        source={require('../assets/images/welcome.gif')}
        className="w-96 h-96"
      /> */}
      <Image
        source={require('../assets/images/welcome.gif')}
        // className="w-96 h-96"
        style={{height: 100, width: 100}}
      />
      {/* <LottieView
        source={require('../assets/images/welcome.gif')}
        style={{width: '100%', height: '100%'}}
        autoPlay
        duration={1000}
        loop={false}
      /> */}
      {/* </View> */}
      {/* <View>
          <Text>fhfh</Text>
        </View> */}
      {/* </View> */}
    </ScreenWrapper>
  );
};

export default Welcome;
