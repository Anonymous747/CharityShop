import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { PalleteColor } from '../../general/PalleteColor'

export const SeparatedText = ({param}) => {
    return (
    <View style={styles.mainView}>
        <View style={styles.line} />
        <Text style={styles.text}>{param}</Text>
        <View style={styles.line} />
    </View>
    )
}

const styles = StyleSheet.create({
    line: {
        borderBottomColor: PalleteColor.Grey100,
        borderBottomWidth: 2,
        flex: 8,
        marginHorizontal: 20,
        alignSelf: 'center',
    },
    mainView: {
        flexDirection: 'row',
        marginTop: 10,
    },
    text: {
        textAlign: 'center',
        color: PalleteColor.Grey200,
        flex: 1,
        fontSize: 16,
    },
});
