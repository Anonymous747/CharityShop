import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {PalleteColor} from '../general/PalleteColor';
import {SeparatedText} from '../widgets/login/SeparatedText';
import {IconsRaw} from '../widgets/login/IconsRaw';
import {GradientButton} from '../widgets/common/GradientButton';
import {BackgroundLinearGradient} from '../widgets/common/BackgroundLinearGradient';
import {ModalSheet} from '../widgets/common/ModalSheet';

const LoginPage = () => {
  const navigation = useNavigation();

  return (
    <BackgroundLinearGradient>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.logoView}>
        <Text style={styles.logoText}>Eco Textile</Text>
      </View>
      <ModalSheet>
        <View style={styles.bodyView}>
          <Text style={styles.header}>Welcome back!</Text>
          <Text style={styles.subHeader}>
            Please login with your email address and password to continue.
          </Text>
          <TextInput placeholder="Email address" style={styles.textInput} />
          <TextInput placeholder="Password" style={styles.textInput} />
          <TouchableWithoutFeedback>
            <Text style={styles.forgotStyle}>Forgot password?</Text>
          </TouchableWithoutFeedback>
          <GradientButton
            colors={[]}
            buttonText="Sign In"
            onPress={() => navigation.navigate('MainTab')}
          />
          <SeparatedText param={'or'} />
          <IconsRaw icons={[]} />
          <View style={styles.footerView}>
            <Text style={styles.dontHaveAccountText}>
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.signUpText}>Sign up now!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ModalSheet>
    </BackgroundLinearGradient>
  );
};

const styles = StyleSheet.create({
  // Texts
  logoText: {
    color: PalleteColor.White,
    fontWeight: 'bold',
    fontSize: 50,
  },
  header: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 26,
    marginTop: '10%',
  },
  subHeader: {
    fontSize: 16,
  },
  textInput: {
    borderColor: PalleteColor.Grey100,
    borderStyle: 'solid',
    marginTop: 14,
    borderRadius: 6,
    borderWidth: 2,
    padding: 10,
  },
  dontHaveAccountText: {
    fontWeight: 'bold',
    marginRight: 4,
  },
  signUpText: {
    color: PalleteColor.Orange,
    fontWeight: 'bold',
  },
  // Buttons
  forgotStyle: {
    backgroundColor: 'transparent',
    textAlign: 'right',
    color: PalleteColor.Orange,
    marginVertical: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Views
  bodyView: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
  footerView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
  },
  logoView: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: 200,
  },
  headerView: {
    height: '100%',
    width: '100%',
    flex: 1,
  },
});

export default LoginPage;
