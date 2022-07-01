import React from 'react';
import {
  StatusBar,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {SeparatedText} from '../widgets/login/SeparatedText';
import {IconsRaw} from '../widgets/login/IconsRaw';
import {GradientButton} from '../widgets/common/GradientButton';
import {BackgroundLinearGradient} from '../widgets/common/BackgroundLinearGradient';
import {ModalSheet} from '../widgets/common/ModalSheet';
import {login, errorAction} from '../store/actions/LoginActions';
import {InputForm} from '../components/atoms/index';
import {useForm} from 'react-hook-form';
import {SubmitHandler} from 'react-hook-form';

import * as Paths from '../general/Paths';
import styles from './styles/LoginPage.style';

type FormValues = {
  email: String,
  password: String,
};

const LoginPage = props => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const dispatch = useDispatch();
  const onSubmit: SubmitHandler<FormValues> = data => {
    dispatch(login({email: data.email, password: data.password}));
    props.navigation.navigate(Paths.MAIN_TAB);
  };

  const {initialized, loaded, authorized, error, fetchUserData} = props;

  return (
    <BackgroundLinearGradient>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.logoView}>
        <Text style={styles.logoText}>Eco Textile</Text>
      </View>
      <ModalSheet>
        <ScrollView>
          <View style={styles.bodyView}>
            <Text style={styles.header}>Welcome back!</Text>
            <Text style={styles.subHeader}>
              Please login with your email address and password to continue.
            </Text>
            <InputForm
              placeholder="Email address"
              meta={{error: errors}}
              input={{
                name: 'email',
                control: control,
                rules: {
                  // validate: text => text.length < 4,
                  maxLenth: 2,
                },
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
            <TouchableWithoutFeedback>
              <Text style={styles.forgotStyle}>Forgot password?</Text>
            </TouchableWithoutFeedback>
            <GradientButton
              colors={[]}
              buttonText="Sign In"
              onPress={handleSubmit(onSubmit)}
            />
            <SeparatedText param={'or'} />
            <IconsRaw icons={[]} />
            <View style={styles.footerView}>
              <Text style={styles.dontHaveAccountText}>
                Don't have an account?
              </Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate(Paths.SIGN_UP)}>
                <Text style={styles.signUpText}>Sign up now!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ModalSheet>
    </BackgroundLinearGradient>
  );
};

export default LoginPage;
