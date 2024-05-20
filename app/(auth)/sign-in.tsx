import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Container } from '~/components/Container';
import { SignUpForm } from '../../types/auth.type';
import { StatusBar } from 'expo-status-bar';
import { images } from '~/constants/images';
import Animated, { FadeIn, FadeInDown, FadeInUp, FadeOut } from 'react-native-reanimated';
import { router } from 'expo-router';

const SignIn = () => {
  const [form, setform] = useState<SignUpForm>({
    email: '',
    password: '',
  });
  return (
    <>
      <Image
        className="absolute h-full w-full"
        source={images.background.background1}
        resizeMode="cover"
      />

      {/* lights */}
      <View className="absolute w-full flex-row justify-around">
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          className="h-[210px] w-[85px] "
          source={images.object.light}
          resizeMode="contain"
        />
        <Animated.Image
          entering={FadeInUp.delay(400).duration(1000).springify()}
          className="h-[150px] w-[60px] "
          source={images.object.light}
          resizeMode="contain"
        />
      </View>
      <StatusBar style="light" />
      <Container>
        <View className="flex h-full w-full justify-around pb-7 pt-40">
          {/* title */}
          <View className="flex items-center">
            <Animated.Text
              entering={FadeInUp.duration(1000).springify()}
              className="font-pbold py-2 text-5xl tracking-wider text-white">
              Login
            </Animated.Text>
          </View>

          {/* form */}
          <View className="mx-4 flex items-center gap-4 space-y-5">
            <Animated.View
              entering={FadeInDown.duration(1000).springify()}
              className=" w-full rounded-2xl bg-black/5 p-5">
              <TextInput placeholder="Email" placeholderTextColor={'gray'} />
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(200).duration(1000).springify()}
              className=" w-full rounded-2xl bg-black/5 p-5">
              <TextInput placeholder="password" placeholderTextColor={'gray'} secureTextEntry />
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(400).duration(1000).springify()}
              className="mt-2 w-full">
              <TouchableOpacity
                onPress={() => router.push('home')}
                className=" w-full rounded-2xl bg-sky-400 p-4">
                <Text className="font-pbold text-center text-xl text-white">Login</Text>
              </TouchableOpacity>
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(600).duration(1000).springify()}
              className="mt-2 flex-row justify-center gap-1">
              <Text className="font-pregular">Don't have an account? </Text>
              <TouchableOpacity onPress={() => router.push('sign-up')}>
                <Text className="font-pregular text-sky-600">Sign Up.</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </View>
      </Container>
    </>
  );
};

export default SignIn;
