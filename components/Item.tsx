import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import { Text, TouchableOpacity, View } from 'react-native-ui-lib';
import { images } from '~/constants/images';

const screenWidth = Dimensions.get('window').width;
const viewWidth = screenWidth * 0.4;
const Item = () => {
  return (
    <View style={styles.responsiveViewContainer}>
      <TouchableOpacity style={styles.responsiveView} className="!rounded-lg !bg-gray-200">
        <Image source={images.object.ring} style={styles.imageView} resizeMode="contain" />
      </TouchableOpacity>
      <View className="mt-2 w-full">
        <Text className="line-clamp-1 font-pregular text-base">Diamond Ring 24 kara</Text>
        <Text className="font-pmedium text-lg">$142.00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  responsiveViewContainer: {
    width: viewWidth,
    marginHorizontal: 10,
    marginBottom: 20,
  },

  responsiveView: {
    width: viewWidth,
    height: viewWidth,
  },
  imageView: {
    width: viewWidth - 20,
    height: viewWidth - 10,
  },
});

export default Item;
