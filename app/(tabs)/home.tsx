import { FlatList, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Categories from '~/components/Categories';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from 'react-native-ui-lib';
import Item from '~/components/Item';
import { images } from '~/constants/images';
import colors from '~/constants/colors';
import { Product } from '~/types/product.type';

const arr: Product[] = [
  {
    title: 'Diamond Ring 24 kara',
    id: 1,
    imgs: [images.object.ring, images.object.ring2],
    price: 145,
  },
  {
    title: 'Diamond Ring 24 kara',
    id: 2,
    imgs: [images.object.ring, images.object.ring2],
    price: 145,
  },
  {
    title: 'Diamond Ring 24 kara',
    id: 3,
    imgs: [images.object.ring, images.object.ring2],
    price: 145,
  },
  {
    title: 'Diamond Ring 24 kara',
    id: 4,
    imgs: [images.object.ring, images.object.ring2],
    price: 145,
  },
  {
    title: 'Diamond Ring 24 kara',
    id: 5,
    imgs: [images.object.ring, images.object.ring2],
    price: 145,
  },
  {
    title: 'Diamond Ring 24 kara',
    id: 6,
    imgs: [images.object.ring, images.object.ring2],
    price: 145,
  },
  {
    title: 'Diamond Ring 24 kara',
    id: 7,
    imgs: [images.object.ring, images.object.ring2],
    price: 145,
  },
  {
    title: 'Diamond Ring 24 kara',
    id: 8,
    imgs: [images.object.ring, images.object.ring2],
    price: 145,
  },
];

const home = () => {
  const [page, setPage] = useState<number>(1);
  const [items, setItems] = useState(arr);

  const loadMoreItems = () => {
    //setItems((pre) => [...pre, ...arr]);
    //setPage((prevPage) => prevPage + 1);
  };

  return (
    <SafeAreaView>
      <View className="h-full w-full !bg-white">
        <StatusBar style="dark" backgroundColor="#fff" />
        <View className="px-6 pb-2 pt-4">
          <Text className="font-plight text-base">Hello,</Text>
          <Text className="font-pmedium text-lg">Thành long</Text>
        </View>
        {/* search bar */}
        <View className="flex-row items-center gap-2 px-4 pb-2">
          <View className="flex-1 flex-row items-center rounded-full border border-gray-300 p-3">
            <AntDesign name="search1" size={24} color="gray" />
            <TextInput placeholder="Jewelrys" className="ml-2 flex-1" />
          </View>
          <TouchableOpacity className="rounded-full bg-primary p-3">
            <Feather name="sliders" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* main */}
        <View>
          <Categories onChangeSelected={() => {}} />
        </View>
        {/* item list */}
        <FlatList
          data={items}
          renderItem={({ item }) => <Item product={item} />}
          numColumns={2}
          //keyExtractor={(i) => i.toString()}
          className="mx-5 mt-5"
          onEndReachedThreshold={0.5}
          onEndReached={loadMoreItems}
          ListEmptyComponent={() => (
            <View centerH className="w-fit !bg-white">
              <Image
                source={images.icons.empty}
                className="h-[100px] w-[100px]"
                resizeMode="contain"
                tintColor={colors.gray.C5}
              />
              <Text className="font-plight text-base">Empty</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default home;
