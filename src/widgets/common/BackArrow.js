import React from 'react';
import { StyleSheet, View, } from 'react-native';
import { IconButton } from 'react-native-paper';
import { Icon } from 'react-native-elements'

export const BackArrow = () => {
    return (
        <Icon
        name='left'
        type='ant-design'
        color='#FFF'
        size={20}
        onPress={() => console.log('hello')} />
    );
}

const styles = StyleSheet.create({
    
});
