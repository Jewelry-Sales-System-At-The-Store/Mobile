import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Container } from '~/components/Container';
import { SignUpForm } from '../../types/auth.type';
import { StatusBar } from 'expo-status-bar';
import { images } from '~/constants/images';
import Animated, { FadeIn, FadeInDown, FadeInUp, FadeOut } from 'react-native-reanimated';
import { router } from 'expo-router';

const SignUp = () => {
  const [form, setform] = useState<SignUpForm>({
    email: '',
    password: '',
  });
  return (
    <>
      <Image
        className="absolute h-[600px] w-full"
        source={images.background.background1}
        resizeMode="cover"
      />

      {/* lights */}
      <View className="absolute w-full flex-row justify-around">
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          className="h-[170px] w-[70px] "
          source={images.object.light}
          resizeMode="contain"
        />
        <Animated.Image
          entering={FadeInUp.delay(400).duration(1000).springify()}
          className="h-[120px] w-[50px] "
          source={images.object.light}
          resizeMode="contain"
        />
      </View>
      <StatusBar style="light" />
      <Container>
        <View className="flex h-full w-full justify-around pb-5 pt-36">
          {/* title */}
          <View className="flex items-center">
            <Animated.Text
              entering={FadeInUp.duration(1000).springify()}
              className="font-pbold py-2 text-5xl tracking-wider text-white">
              Sign Up
            </Animated.Text>
          </View>

          {/* form */}
          <View className="mx-4 flex items-center gap-4 space-y-5">
            <Animated.View
              entering={FadeInDown.duration(1000).springify()}
              className=" w-full rounded-2xl bg-black/5 p-5">
              <TextInput placeholder="Username" placeholderTextColor={'gray'} />
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(200).duration(1000).springify()}
              className=" w-full rounded-2xl bg-black/5 p-5">
              <TextInput
                placeholder="Email"
                textContentType="emailAddress"
                placeholderTextColor={'gray'}
              />
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(400).duration(1000).springify()}
              className=" w-full rounded-2xl bg-black/5 p-5">
              <TextInput placeholder="Password" placeholderTextColor={'gray'} secureTextEntry />
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(600).duration(1000).springify()}
              className=" w-full rounded-2xl bg-black/5 p-5">
              <TextInput
                placeholder="Confirm password"
                placeholderTextColor={'gray'}
                secureTextEntry
              />
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(800).duration(1000).springify()}
              className="mt-2 w-full">
              <TouchableOpacity
                onPress={() => router.push('sign-in')}
                className=" w-full rounded-2xl bg-sky-400 p-4">
                <Text className="font-pbold text-center text-xl text-white">SignUp</Text>
              </TouchableOpacity>
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(1000).duration(1000).springify()}
              className="mt-2 flex-row justify-center gap-1">
              <Text className="font-pregular">Already have an account? </Text>
              <TouchableOpacity onPress={() => router.push('sign-in')}>
                <Text className="font-pregular text-sky-600">Login.</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </View>
      </Container>
    </>
  );
};

export default SignUp;
