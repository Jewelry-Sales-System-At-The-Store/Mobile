import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import React, { useEffect, useState } from 'react';

const fakeData = [
  { name: 'All', id: 0 },
  { name: 'Necklaces', id: 1 },
  { name: 'Earrings', id: 2 },
  { name: 'Bracelets', id: 3 },
  { name: 'Rings', id: 4 },
  { name: 'Anklets', id: 5 },
  { name: 'Hair Jewelry', id: 6 },
  { name: 'Watches', id: 7 },
  { name: 'Brooches', id: 8 },
];

export interface CategoriesProps {
  onChangeSelected: () => void;
}

const Categories = ({ onChangeSelected }: CategoriesProps) => {
  const [categoryActive, setCategoryActive] = useState(fakeData[0]);
  useEffect(() => {
    onChangeSelected();
  }, [categoryActive]);
  return (
    <View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        className="overflow-visible py-4"
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}>
        {fakeData.map((item, index) => {
          let isActive = item.id === categoryActive.id;
          return (
            <View key={index} className={`mr-6 flex items-center justify-center shadow-md `}>
              <TouchableOpacity
                onPress={() => setCategoryActive(item)}
                className={` rounded-md px-4 py-3 ${isActive ? 'bg-primary' : 'bg-gray-200'}`}>
                <Text className={`font-psemibold  ${isActive ? 'text-white' : 'text-black-200'}`}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
