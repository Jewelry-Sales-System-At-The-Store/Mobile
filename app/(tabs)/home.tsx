import { ScrollView, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Container } from '~/components/Container';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Categories from '~/components/Categories';
import { ProductRowProps } from '~/components/ProductRow';

const fakeData: ProductRowProps[] = [
  {
    title: 'Host selling',
    desc: 'this is some things...',
    items: [
      { name: 'item1', price: '152' },
      { name: 'item1', price: '152' },
    ],
  },
];

const home = () => {
  return (
    <Container>
      <View className="h-full w-full bg-white">
        <StatusBar style="dark" />

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
          <Categories />

          {/* featured */}
          <View className="mt-5">{[]}</View>
        </ScrollView>
      </View>
    </Container>
  );
};

export default home;
