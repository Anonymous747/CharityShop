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

import LinearGradient from 'react-native-linear-gradient';
import {PalleteColor} from '../general/PalleteColor';
import {SeparatedText} from '../widgets/login/SeparatedText';
import {IconsRaw} from '../widgets/login/IconsRaw';
import {GradientButton} from '../widgets/common/GradientButton';

const LoginPage = props => {
  return (
    <View style={styles.mainView}>
      <StatusBar translucent backgroundColor="transparent" />
      <LinearGradient
        colors={[PalleteColor.Red, PalleteColor.Orange]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.headerGradient}>
        <Text style={styles.logoText}>Eco Textile</Text>
        <View style={styles.headerView}>
          <View style={styles.whiteLineView} />
        </View>
      </LinearGradient>

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
        <GradientButton colors={[]} buttonText="Sign In" />
        <SeparatedText param={'or'} />
        <IconsRaw icons={[]} />
        <View style={styles.footerView}>
          <Text style={styles.dontHaveAccountText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
            <Text style={styles.signUpText}>Sign up now!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Texts
  logoText: {
    color: '#FFF',
    fontWeight: 'bold',
    marginTop: '16%',
    fontSize: 50,
  },
  header: {
    fontSize: 26,
    marginBottom: 4,
    color: '#000',
    fontWeight: 'bold',
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

  // Gradients
  headerGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '30%',
  },
  // Views
  mainView: {
    height: '100%',
    backgroundColor: '#FFF',
  },
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
  whiteLineView: {
    width: '100%',
    height: 20,
    backgroundColor: '#FFF',
    position: 'absolute',
    bottom: -1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  headerView: {
    height: '100%',
    width: '100%',
    flex: 1,
  },
});

export default LoginPage;
