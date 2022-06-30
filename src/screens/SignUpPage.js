import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';
import {InputForm} from '../components/atoms';
import {useForm} from 'react-hook-form';
import {signUp} from '../store/actions/SignUpActions';
import {useNavigation} from '@react-navigation/native';
import styles from './styles/SignUp.style';

import {
  BackArrow,
  BackgroundLinearGradient,
  GradientButton,
  ModalSheet,
} from '../widgets/common/index';

type RegisterFormValues = {
  name: String,
  phoneNumber: String,
  emailAddress: String,
  password: String,
  confirmPassword: String,
};

const SignUpPage = props => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const dispatch = useDispatch();
  const onSubmit: SubmitHandler<RegisterFormValues> = data => {
    dispatch(
      signUp({
        name: data.name,
        phoneNumber: data.phoneNumber,
        emailAddress: data.emailAddress,
        password: data.password,
        confirmPassword: data.confirmPassword,
      }),
    );
  };

  return (
    <BackgroundLinearGradient>
      <BackArrow onPress={() => navigation.goBack()} />
      <ModalSheet>
        <ScrollView>
          <View style={styles.mainView}>
            <Text style={styles.header}>Create an Account</Text>
            <Text style={styles.subHeader}>
              Join today along with million other users to the most exlusive
              e-commerce platform ever!
            </Text>
            <InputForm
              placeholder="Name"
              meta={{error: errors}}
              input={{
                name: 'name',
                control: control,
              }}
            />
            <InputForm
              placeholder="Phone number"
              meta={{error: errors}}
              input={{
                name: 'phoneNumber',
                control: control,
              }}
            />
            <InputForm
              placeholder="Email address"
              meta={{error: errors}}
              input={{
                name: 'emailAddress',
                control: control,
              }}
            />
            <InputForm
              placeholder="Password"
              meta={{error: errors}}
              input={{
                name: 'password',
                control: control,
              }}
            />
            <InputForm
              placeholder="Confirm Password"
              meta={{error: errors}}
              input={{
                name: 'confirmPassword',
                control: control,
              }}
            />
          </View>
        </ScrollView>
        <View style={styles.gradientBtnView}>
          <GradientButton
            colors={[]}
            buttonText="Sign Up"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </ModalSheet>
    </BackgroundLinearGradient>
  );
};

export default SignUpPage;
