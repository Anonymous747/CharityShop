import React from 'react';
import {StyleSheet, View, TextInput, Text, ScrollView} from 'react-native';
import PalleteColor from '../general/PalleteColor';
import {useNavigation} from '@react-navigation/native';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {
  BackArrow,
  BackgroundLinearGradient,
  GradientButton,
  ModalSheet,
} from '../widgets/common/index';

const SignUpPage = () => {
  // const insets = useSafeAreaInsets();
  const navigation = useNavigation();

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
            <TextInput placeholder="Name" style={styles.textInput} />
            <TextInput placeholder="Phine number" style={styles.textInput} />
            <TextInput placeholder="Email address" style={styles.textInput} />
            <TextInput placeholder="Password" style={styles.textInput} />
            <TextInput
              placeholder="Confirm Password"
              style={styles.textInput}
            />
          </View>
        </ScrollView>
        <View style={styles.gradientBtnView}>
          <GradientButton colors={[]} buttonText="Sign Up" />
        </View>
      </ModalSheet>
    </BackgroundLinearGradient>
  );
};

const styles = StyleSheet.create({
  // Button
  gradientBtnView: {
    marginHorizontal: 20,
    marginBottom: '5%',
  },
  // Text Inputs
  textInput: {
    borderColor: PalleteColor.Grey100,
    borderStyle: 'solid',
    marginTop: 14,
    borderRadius: 6,
    borderWidth: 2,
    padding: 10,
  },
  // Texts
  header: {
    fontSize: 26,
    marginTop: '10%',
    color: '#000',
    fontWeight: 'bold',
  },
  subHeader: {
    fontSize: 16,
  },
  //Views
  mainView: {
    marginHorizontal: 20,
    paddingBottom: 20,
    flex: 1,
  },
});

export default SignUpPage;
