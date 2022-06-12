import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { PalleteColor } from '../../general/PalleteColor';

export const GradientButton = ({colors, buttonText}) => {
    return (
        <TouchableOpacity>
              <LinearGradient 
                colors={[PalleteColor.Red, PalleteColor.Orange]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.signInBtn} 
              > 
                <Text style={styles.signInText}>{buttonText}</Text>
              </LinearGradient>
            </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    signInBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 30,
        marginTop: 20,
      },
      signInText: {
        color: '#FFF',
        fontSize: 16,
      },
});