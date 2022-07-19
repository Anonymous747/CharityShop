import {StyleSheet, View} from 'react-native';
import React from 'react';
import PalleteColor from '../../general/PalleteColor';

const ModalSheet = ({children}) => {
  return <View style={styles.bodyView}>{children}</View>;
};

const styles = StyleSheet.create({
  bodyView: {
    backgroundColor: PalleteColor.White,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
  },
});

export default ModalSheet;
