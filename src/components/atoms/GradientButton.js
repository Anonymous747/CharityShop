import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PalleteColor from '../../general/PalleteColor';

const GradientButton = ({
  buttonText,
  onPress,
  colors = [PalleteColor.Red, PalleteColor.Orange],
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={colors}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.signInBtn}>
        <Text style={styles.signInText}>{buttonText}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  signInBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 30,
  },
  signInText: {
    color: PalleteColor.White,
    fontSize: 16,
  },
});

export default GradientButton;
