import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import { Text, TouchableOpacity, View } from 'react-native-ui-lib';
import { useDispatch, useSelector } from 'react-redux';
import colors from '~/constants/colors';
import { images } from '~/constants/images';
import { toggleFavorite } from '~/slices/ProductSlice';
import { RootState } from '~/store';
import { Product } from '~/types/product.type';

const screenWidth = Dimensions.get('window').width;
const viewWidth = screenWidth * 0.4;

interface ItemProps {
  product: Product;
}

const Item = ({ product }: ItemProps) => {
  const dispatch = useDispatch();
  const favotites = useSelector((state: RootState) => state.productSlice.favotites);
  const isInList = favotites.includes(product);
  return (
    <View style={styles.responsiveViewContainer}>
      <TouchableOpacity style={styles.responsiveView} className="relative !rounded-lg !bg-gray-200">
        <Image source={product.img} style={styles.imageView} resizeMode="contain" />
        <TouchableOpacity
          onPress={() => dispatch(toggleFavorite(product))}
          className="absolute right-2 top-2 h-[30px] w-[30px] !rounded-full !bg-white"
          center>
          <MaterialIcons
            name={isInList ? 'favorite' : 'favorite-border'}
            size={18}
            color={isInList ? 'red' : colors.primary.DEFAULT}
          />
        </TouchableOpacity>
      </TouchableOpacity>
      <View className="mt-2 w-full">
        <Text className="line-clamp-1 font-pregular text-base">{product.title}</Text>
        <Text className="font-pmedium text-lg">${product.price.toFixed(2).padEnd(2, '0')}</Text>
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
