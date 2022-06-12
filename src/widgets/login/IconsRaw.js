import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

export const IconsRaw = icons => {
  return (
    <View style={styles.rawView}>
      <Icon raised name="apple1" type="ant-design" color="#000" />
      <Icon raised name="facebook-square" type="ant-design" color="blue" />
      <Icon raised name="google" type="ant-design" color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginTop: '4%',
    marginHorizontal: 10,
    width: 40,
    height: 40,
    backgroundColor: 'black',
    borderWidth: 2,
  },
  rawView: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
});
