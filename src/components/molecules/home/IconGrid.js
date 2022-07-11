import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {IconWithBottomText} from '../../atoms';
import PalleteColor from '../../../general/PalleteColor';

const IconGrid = ({children}) => {
  return (
    <View style={styles.container}>
      {children.map((cell, index) => (
        <IconWithBottomText cell={cell} key={index} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: PalleteColor.White,
    flexDirection: 'row',
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    paddingTop: 10,
    paddingBottom: 4,
  },
});

export default IconGrid;
