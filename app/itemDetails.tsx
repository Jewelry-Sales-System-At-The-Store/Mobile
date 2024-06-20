import { Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import React, { useRef, useState } from 'react';
import { images } from '~/constants/images';
import colors from '~/constants/colors';
import { StatusBar } from 'expo-status-bar';
import { Card, View } from 'react-native-ui-lib';
import { router } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { RootState } from '~/store';
import Test from '~/components/test';
import Carousel from 'react-native-reanimated-carousel';

const { width: viewportWidth } = Dimensions.get('window');
const itemDetails = () => {
  const item = useSelector((state: RootState) => state.productSlice.details);
  const carouselRef = useRef(null);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar style="light" backgroundColor="#333" />
      <Image
        source={images.background.bgshape3}
        tintColor={colors.primary.DEFAULT}
        className="absolute left-0 top-0 h-[120px] w-full"
        resizeMode="stretch"
      />
      <View row centerV className="w-full justify-between p-6">
        <TouchableOpacity
          onPress={() => router.back()}
          className="h-[48px] w-[48px] items-center justify-center rounded-xl bg-white/10">
          <AntDesign name="left" size={30} color="#fff" />
        </TouchableOpacity>
        <Text className="font-pregular text-xl !text-white ">Jewelry Info</Text>
        <TouchableOpacity
          onPress={() => {}}
          className="h-[48px] w-[48px] items-center justify-center rounded-xl !bg-white/10">
          <AntDesign name="qrcode" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <View className="mt-6 !bg-black-100">
        <Carousel
          vertical={false}
          width={viewportWidth}
          height={viewportWidth * 0.7}
          loop
          pagingEnabled={true}
          snapEnabled={true}
          autoPlay={true}
          autoPlayInterval={2000}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.8,
            parallaxScrollingOffset: 170,
          }}
          data={item.imgs}
          renderItem={({ item, index }) => (
            <Card
              enableShadow
              elevation={5}
              style={{ width: viewportWidth * 0.7 }}
              center
              key={index}
              className="!rounded-md !bg-gray-200">
              <Image
                source={item}
                style={{ width: viewportWidth * 0.6, height: viewportWidth * 0.6 }}
                resizeMode="contain"
              />
            </Card>
          )}
        />
      </View>
      <View
        flex
        style={{ marginTop: viewportWidth * 0.7, borderRadius: 0 }}
        className=" !bg-yellow-50  p-6">
        <Text className="font-psemibold text-2xl !text-primary">{item.title}</Text>
        <View row className="mt-2">
          <View row center>
            <Text className="font-pregular text-lg">Type:</Text>
            <Text className="text-lg font-light"> Ring</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default itemDetails;
