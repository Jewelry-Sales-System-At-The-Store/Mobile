import { Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Container } from '~/components/Container';
import { StatusBar } from 'expo-status-bar';
import { images } from '~/constants/images';
import Animated, { FadeIn, FadeInDown, FadeInUp } from 'react-native-reanimated';
import { router } from 'expo-router';
import { Text, View } from 'react-native-ui-lib';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '~/constants/colors';
import { SignUpRequest } from '~/types/auth.type';
import authApi from '~/services/authApi';
import LoadingModel from '~/components/LoadingModel';

const SignUp = () => {
  const [form, setform] = useState<SignUpRequest>({
    address: '',
    email: '',
    fullName: '',
    gender: 'male',
    password: '',
    phone: '',
    userName: '',
  });

  const [SignUp, { isSuccess, isLoading, isError, error }] = authApi.useSignUpMutation();

  useEffect(() => {
    if (isSuccess) {
      router.push('sign-in');
      console.log('success');
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      console.log(error);
    }
  }, [isError]);

  return (
    <>
      <View flex className="relative">
        <LoadingModel isloading={isLoading} />
        <Image
          className="absolute h-[600px] w-full"
          source={images.background.background1}
          resizeMode="cover"
          tintColor={colors.primary.DEFAULT}
        />

        {/* lights */}
        <View className="absolute w-full flex-row justify-around">
          <Animated.Image
            entering={FadeInUp.delay(200).duration(1000).springify()}
            className="h-[150px] w-[70px] "
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
        <View>
          <View className=" h-full w-full justify-around pb-5 pt-36">
            {/* title */}
            <Animated.View
              entering={FadeInUp.duration(1000).springify()}
              className="flex items-center">
              <Text className="py-2 font-pbold text-5xl tracking-wider !text-white">Đăng ký</Text>
            </Animated.View>

            {/* form */}
            <View className="mx-4 flex items-center gap-4 ">
              <Animated.View
                entering={FadeInDown.duration(1000).springify()}
                className=" w-full rounded-2xl bg-gray-200 p-5">
                <TextInput
                  placeholder="Số điện thoại"
                  placeholderTextColor={'gray'}
                  value={form.phone}
                  onChangeText={(text) => setform({ ...form, phone: text })}
                />
              </Animated.View>
              <Animated.View
                entering={FadeInDown.delay(200).duration(1000).springify()}
                className=" w-full rounded-2xl bg-gray-200 p-5">
                <TextInput
                  placeholder="Email"
                  textContentType="emailAddress"
                  value={form.email}
                  onChangeText={(text) => setform({ ...form, email: text })}
                  placeholderTextColor={'gray'}
                />
              </Animated.View>
              <Animated.View
                entering={FadeInDown.delay(400).duration(1000).springify()}
                className=" w-full rounded-2xl bg-gray-200 p-5">
                <TextInput
                  placeholder="Mật khẩu"
                  onChangeText={(text) => setform({ ...form, password: text })}
                  value={form.password}
                  placeholderTextColor={'gray'}
                  secureTextEntry
                />
              </Animated.View>
              <Animated.View
                entering={FadeInDown.delay(600).duration(1000).springify()}
                className=" w-full rounded-2xl bg-gray-200 p-5">
                <TextInput
                  placeholder="Họ tên"
                  placeholderTextColor={'gray'}
                  value={form.fullName}
                  onChangeText={(text) => setform({ ...form, fullName: text })}
                />
              </Animated.View>
              <Animated.View
                entering={FadeInDown.delay(600).duration(1000).springify()}
                className=" w-full rounded-2xl bg-gray-200 p-5">
                <TextInput
                  placeholder="Username"
                  placeholderTextColor={'gray'}
                  value={form.userName}
                  onChangeText={(text) => setform({ ...form, userName: text })}
                />
              </Animated.View>
              {isError && <Text className="!text-red-400">{(error as any).data.error}</Text>}
              <Animated.View
                entering={FadeInDown.delay(800).duration(1000).springify()}
                className="mt-2 w-full">
                <TouchableOpacity
                  onPress={() => SignUp(form)}
                  className=" w-full rounded-2xl bg-primary p-4">
                  <Text className="!text-center font-pbold text-xl !text-white">Đăng ký</Text>
                </TouchableOpacity>
              </Animated.View>
              <Animated.View
                entering={FadeInDown.delay(1000).duration(1000).springify()}
                className="mt-2 flex-row justify-center gap-1">
                <Text className="font-pregular">Đã có tài khoản? </Text>
                <TouchableOpacity onPress={() => router.push('sign-in')}>
                  <Text className="font-pregular !text-sky-600">Đăng nhập.</Text>
                </TouchableOpacity>
              </Animated.View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default SignUp;
