import { FlatList, ScrollView, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Categories from '~/components/Categories';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-ui-lib';
import Item from '~/components/Item';

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const arr2 = [9, 10, 11, 12, 13, 14, 15, 16];

const home = () => {
  const [page, setPage] = useState<number>(1);
  const [items, setItems] = useState(arr);

  const loadMoreItems = () => {
    setItems((pre) => [...pre, ...arr]);
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <SafeAreaView>
      <View className="h-full w-full bg-white">
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}>
          {/* category */}
          <Categories onChangeSelected={() => {}} />
        </ScrollView>
        {/* item list */}
        <FlatList
          data={arr}
          renderItem={() => <Item />}
          numColumns={2}
          keyExtractor={(i) => i.toString()}
          className="mx-5 mt-5"
          onEndReachedThreshold={0.5}
          onEndReached={loadMoreItems}
        />
      </View>
    </SafeAreaView>
  );
};

export default home;
