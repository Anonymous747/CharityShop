import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { BackArrow, CustomLinearGradient, GradientButton, } from '../widgets/common/Index';

const SignUpPage = (props) => {
    return (
        <CustomLinearGradient>
            <View style={styles.mainView}>
                <BackArrow style={styles.backArrow}/>
                <GradientButton colors={[]} buttonText='Sign In' style={styles.gradientBtn}/>
            </View>
        </CustomLinearGradient>
    );
}

const styles = StyleSheet.create({
    mainView: {
        marginHorizontal: 20,
    },
    gradientBtn: {
        justifyContent: 'flex-end',
        bottom: 0,
    },
    backArrow: {
        alignSelf: 'stretch',
        alignContent: 'flex-start',
        justifyContent: 'space-between',    
    },  
});


export default SignUpPage;