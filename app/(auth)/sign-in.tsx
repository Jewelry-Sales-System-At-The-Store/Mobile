import { View, Text, Image, ScrollView, ScrollViewBase } from 'react-native';
import React, { useState } from 'react';
import { Container } from '~/components/Container';
import { Link, router } from 'expo-router';
import FormField from '~/components/FormField';
import { AntDesign } from '@expo/vector-icons';
import CustomButton from '~/components/CustomButton';
import { ScrollViewStyleReset } from 'expo-router/html';
import { SignUpForm } from '../types/auth.type';

const SignIn = () => {
  const [form, setform] = useState<SignUpForm>({
    email: '',
    password: '',
  });
  return (
    <>
      <Container>
        <View></View>
      </Container>
    </>
  );
};

export default SignIn;
