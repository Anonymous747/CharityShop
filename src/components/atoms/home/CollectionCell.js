import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Image} from 'react-native-elements';
import PalleteColor from '../../../general/PalleteColor';

const CollectionCell = ({image, subtitle}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/images.jpeg')}
        style={styles.mainImage}
      />
      <View style={styles.footerView}>
        <Text style={styles.description}>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
  },
  description: {
    color: PalleteColor.Black,
    textAlign: 'center',
  },
  mainImage: {
    borderRadius: 10,
    height: 140,
    width: 100,
  },
  footerView: {
    backgroundColor: PalleteColor.White,
    position: 'absolute',
    bottom: 0,
    height: 40,
    width: '100%',
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  },
});

export default CollectionCell;
