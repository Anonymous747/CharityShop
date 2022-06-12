import {StyleSheet, View} from 'react-native';
import React from 'react';

export const ModalSheet = ({children}) => {
  return <View style={styles.bodyView}>{children}</View>;
};

const styles = StyleSheet.create({
  bodyView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
  },
});
