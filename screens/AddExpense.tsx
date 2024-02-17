import {
  View,
  Text,
  Image,
  Touchable,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import {colors} from '../theme';
import BackIcon from '../components/BackIcon';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList, Routes} from '../navigation';
import {categories} from '../constants';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Snackbar from 'react-native-snackbar';
import {addDoc} from 'firebase/firestore';
import {expensesRef} from '../config/firebase';
import Loader from '../components/Loader';

type Props = NativeStackScreenProps<RootStackParamList, Routes.TripExpenses>;

const AddExpense = ({
  route: {
    params: {id, country, place},
  },
}: Props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const handleButtonPress = async () => {
    if (title && amount && category) {
      setIsLoading(true);

      const doc = await addDoc(expensesRef, {
        title,
        amount,
        category,
        tripId: id,
      });

      setIsLoading(false);
      if (doc && doc.id) {
        navigation.goBack();
      }
    } else {
      Snackbar.show({
        text: 'Title, amount and category are required.',
        backgroundColor: 'red',
      });
    }
  };
  return (
    <ScreenWrapper className="flex">
      <ScrollView>
        <View className="flex justify-between h-full px-3">
          <View className="pt-5 space-y-5">
            <View className="relative">
              <View className="absolute top-0 left-0 z-10">
                <BackIcon />
              </View>
              <Text
                className={`capitalize font-bold text-xl ${colors.heading} text-center`}>
                Add expense
              </Text>
            </View>
            <View className="flex items-center">
              <Image
                source={require('../assets/images/expenseBanner.png')}
                className="w-72 h-72"
              />
            </View>
            <View className="px-2 flex space-y-2">
              <Text
                className={`capitalize font-bold text-lg ${colors.heading}`}>
                for what?
              </Text>
              <TextInput
                className="bg-white rounded-full text-md p-3"
                value={title}
                onChangeText={value => setTitle(value)}
              />
              <Text
                className={`capitalize font-bold text-lg ${colors.heading}`}>
                how much?
              </Text>
              <TextInput
                className="bg-white rounded-full text-md p-3"
                value={amount}
                onChangeText={value => setAmount(value)}
              />
            </View>
            <View className="px-2 flex space-y-2">
              <Text
                className={`capitalize font-bold text-lg ${colors.heading}`}>
                category
              </Text>
              <View className="flex flex-row flex-wrap items-center space-y-2 px-1">
                {categories.map(item => {
                  let bgColor = 'bg-white';
                  if (item.value === category) {
                    bgColor = 'bg-green-200';
                  }
                  return (
                    <TouchableOpacity
                      key={item.value}
                      className={`p-2 ${bgColor} rounded-full mx-1`}
                      onPress={() => setCategory(item.value)}>
                      <Text className={`text-md ${colors.heading}`}>
                        {item.title}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </View>
          <View className="py-8">
            {!isLoading ? (
              <TouchableOpacity
                className="bg-green-500 w-full rounded-full p-3"
                onPress={handleButtonPress}>
                <Text className="capitalize text-white font-bold text-lg text-center">
                  add expense
                </Text>
              </TouchableOpacity>
            ) : (
              <Loader />
            )}
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default AddExpense;
