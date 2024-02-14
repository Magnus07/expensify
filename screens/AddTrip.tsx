import {
  View,
  Text,
  Image,
  Touchable,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import {colors} from '../theme';
import BackIcon from '../components/BackIcon';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../navigation';
import Loader from '../components/Loader';

const AddTrip = () => {
  const [place, setPlace] = useState('');
  const [country, setCountry] = useState('');
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonPress = () => {
    if (place && country) {
      navigation.navigate(Routes.Home);
    }
  };
  return (
    <ScreenWrapper className="flex">
      <View className="flex justify-between h-full px-3">
        <View className="pt-5 space-y-5">
          <View className="relative">
            <View className="absolute top-0 left-0 z-10">
              <BackIcon />
            </View>
            <Text className={`font-bold text-xl ${colors.heading} text-center`}>
              Add trip
            </Text>
          </View>
          <View className="flex items-center">
            <Image
              source={require('../assets/images/4.png')}
              className="w-72 h-72"
            />
          </View>
          <View className="px-2 flex space-y-3">
            <Text className={`capitalize font-bold text-lg ${colors.heading}`}>
              Where on earth?
            </Text>
            <TextInput
              className="bg-white rounded-full text-md p-3"
              value={place}
              onChangeText={value => setPlace(value)}
            />
            <Text className={`capitalize font-bold text-lg ${colors.heading}`}>
              Which country
            </Text>
            <TextInput
              className="bg-white rounded-full text-md p-3"
              value={country}
              onChangeText={value => setCountry(value)}
            />
          </View>
        </View>
        <View className="py-8">
          {isLoading ? (
            <TouchableOpacity
              className="bg-green-500 w-full rounded-full p-3"
              onPress={handleButtonPress}>
              <Text className="capitalize text-white font-bold text-lg text-center">
                add trip
              </Text>
            </TouchableOpacity>
          ) : (
            <Loader />
          )}
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default AddTrip;
