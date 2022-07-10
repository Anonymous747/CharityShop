import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import PalleteColor from '../../general/PalleteColor';

const IconWithLable = ({
  name,
  type,
  color = PalleteColor.White,
  size,
  iconSize,
  lable,
  lableRadius = 4,
  lableColor = PalleteColor.Red,
}) => {
  const styles = StyleSheet.create({
    container: {
      width: size,
      height: size,
    },
    circle: {
      position: 'absolute',
      right: 0,
      top: 0,
      height: lableRadius * 2,
      width: lableRadius * 2,
      borderRadius: lableRadius,
      backgroundColor: lableColor,
      alignItems: 'center',
    },
    icon: {
      marginTop: 8,
    },
  });

  return (
    <View style={styles.container}>
      <Icon
        name={name}
        type={type}
        color={color}
        size={iconSize}
        style={styles.icon}
      />
      <View style={styles.circle}>
        <Text style={{color: PalleteColor.White}}>{lable}</Text>
      </View>
    </View>
  );
};

export default IconWithLable;
