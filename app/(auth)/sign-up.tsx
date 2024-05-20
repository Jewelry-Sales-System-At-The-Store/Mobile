import { View, Text, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Container } from '~/components/Container';
import { Link, router } from 'expo-router';
import { SignInForm } from '../types/auth.type';
import FormField from '~/components/FormField';
import CustomButton from '~/components/CustomButton';
import { AntDesign } from '@expo/vector-icons';

const SignUp = () => {
  const [form, setform] = useState<SignInForm>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  return (
    <Container>
      <ScrollView contentContainerStyle={{ justifyContent: 'center' }} className="max-h-[80%] p-6">
        <View>
          <Text className="font-psemibold text-primary mb-5 text-4xl">Đăng Ký</Text>

          <FormField
            handleChangeText={(value) => setform({ ...form, email: value })}
            value={form.email}
            placeholder="Nhập địa chỉ email"
          />

          <FormField
            handleChangeText={(value) => setform({ ...form, password: value })}
            value={form.password}
            secureTextEntry
            placeholder="Nhập mật khẩu"
          />

          <FormField
            handleChangeText={(value) => setform({ ...form, confirmPassword: value })}
            value={form.confirmPassword}
            secureTextEntry
            placeholder="Nhập lại mật khẩu"
          />

          <CustomButton
            title="Đăng Ký"
            containerStyles="mt-[70px] bg-secondary"
            handlePress={() => router.push('/sign-in')}
          />
          <Link href={{ pathname: '/sign-in' }} className="mx-auto mt-7">
            <View className="flex-row items-center">
              <Text className="text-textPrimary text-center">Đã có tài khoản đăng nhập ngay</Text>
              <View className="bg-secondary ml-2 rounded-full p-[10px]">
                <AntDesign name="arrowright" size={16} color="#fff" />
              </View>
            </View>
          </Link>
        </View>
      </ScrollView>
    </Container>
  );
};

export default SignUp;