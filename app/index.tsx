import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Image, Text, View } from 'react-native-ui-lib';

import colors from '~/constants/colors';
import { images } from '~/constants/images';

export default function Home() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor="#fff" />
        <View flex className="!bg-white">
          <View flex center className="">
            <Image source={images.background.girl} className="h-full" resizeMode="contain" />
          </View>
          <View className="px-10 py-6">
            <Text className="py-1 font-psemibold text-4xl !tracking-widest !text-primary">
              Let your
            </Text>
            <Text className="py-1 font-psemibold text-4xl !tracking-widest !text-primary">
              Style Speak
            </Text>
            <Text className="mt-4 font-plight text-base tracking-widest">
              Discover the lastest trends in women
            </Text>
            <Text className="mt-1 font-plight text-base tracking-widest">
              fashion and explore your personality
            </Text>
            <Button
              onPress={() => router.push('sign-in')}
              backgroundColor={colors.primary.DEFAULT}
              className="mb-4 mt-6 gap-2 self-end ">
              <Text className="py-2 font-pbold text-base !text-white">Get Started</Text>
              <AntDesign name="arrowright" size={24} color="white" />
            </Button>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
