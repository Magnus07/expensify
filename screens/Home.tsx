import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import {colors} from '../theme';
import randomImage from '../assets/images/randomImage';
import EmptyList from '../components/EmptyList';
import {
  CommonActions,
  useIsFocused,
  useNavigation,
} from '@react-navigation/native';
import {Routes} from '../navigation';
import {signOut} from 'firebase/auth';
import {auth, tripsRef} from '../config/firebase';
import {getDocs, query, where} from 'firebase/firestore';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

const items = [
  {
    id: 1,
    place: 'Place',
    country: 'Country',
  },
  {
    id: 2,
    place: 'Place',
    country: 'Country',
  },
  {
    id: 3,
    place: 'Place',
    country: 'Country',
  },
  {
    id: 4,
    place: 'Place',
    country: 'Country',
  },
  {
    id: 1,
    place: 'Place',
    country: 'Country',
  },
  {
    id: 2,
    place: 'Place',
    country: 'Country',
  },
  {
    id: 3,
    place: 'Place',
    country: 'Country',
  },
  {
    id: 4,
    place: 'Place',
    country: 'Country',
  },
];

export default function Home() {
  const navigation = useNavigation();
  const {uid} = useSelector<RootState, string>(state => state.user.user);
  const [trips, setTrips] = useState([]);
  const isFocused = useIsFocused();

  const handleTripItemPress = (id: string, place: string, country: string) => {
    navigation.navigate(Routes.TripExpenses, {id, place, country});
  };

  const fetchTrips = async () => {
    const q = query(tripsRef, where('user', '==', uid));
    const querySnapshot = await getDocs(q);
    const data = [];
    querySnapshot.forEach(doc => data.push({...doc.data(), id: doc.id}));
    setTrips(data);
  };

  const handleSignOut = async () => {
    await signOut(auth);
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: Routes.Welcome}],
      }),
    );
  };

  useEffect(() => {
    if (isFocused) {
      fetchTrips();
    }
  }, [isFocused]);

  return (
    <ScreenWrapper className="flex-1">
      <View className="flex-row justify-between items-center p-4">
        <Text className={`{colors.heading} font-bold text-3xl shadow-sm`}>
          Expensify
        </Text>
        <TouchableOpacity
          className="p-2 px-3 bg-white border border-gray-200 rounded-full"
          onPress={handleSignOut}>
          <Text className={colors.heading}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-center items-center bg-blue-200 rounded-xl mx-4 mb-4">
        <Image
          source={require('../assets/images/banner.png')}
          className="w-60 h-60"
        />
      </View>
      <View className="px-4 space-y-3">
        <View className="flex-row justify-between items-center">
          <Text className={`${colors.heading} font-bold text-xl`}>
            Recent Trips
          </Text>
          <TouchableOpacity
            className="p-2 px-3 bg-white border border-gray-200 rounded-full"
            onPress={() => navigation.navigate(Routes.AddTrip)}>
            <Text className={colors.heading}>Add Trip</Text>
          </TouchableOpacity>
        </View>
        <View className="h-[430px]">
          <FlatList
            data={trips}
            numColumns={2}
            keyExtractor={item => `${item.id}`}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <EmptyList message="You haven't imported any trips yet." />
            }
            columnWrapperStyle={{
              justifyContent: 'space-between',
            }}
            className="mx-1"
            renderItem={item => (
              <TouchableOpacity
                className="bg-white rounded-2xl p-3 mb-3 shadow-sm"
                onPress={() =>
                  handleTripItemPress(
                    item.item.id,
                    item.item.place,
                    item.item.country,
                  )
                }>
                <View>
                  <Image source={randomImage()} className="w-36 h-36" />
                  <Text className={`${colors.heading} font-bold`}>
                    {item.item.place}
                  </Text>
                  <Text className={`${colors.heading} text-xs`}>
                    {item.item.country}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
