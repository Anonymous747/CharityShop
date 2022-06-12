import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const IconsRaw = icons => {
  return (
    <View style={styles.rawView}>
      <View style={styles.icon}>
        <Text>saf</Text>
      </View>
      <View style={styles.icon}>
        <Text>saf</Text>
      </View>
      <View style={styles.icon}>
        <Text>saf</Text>
      </View>
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
