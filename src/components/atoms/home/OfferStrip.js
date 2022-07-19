import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PalleteColor from '../../../general/PalleteColor';
import KindCell from './KindCell';

const OfferStrip = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.popularText}>Popular: </Text>
      {children.map((el, index) => (
        <KindCell title={el} key={index} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: '5%',
    marginTop: '4%',
    height: 40,
  },
  popularText: {
    color: PalleteColor.White,
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 4,
  },
});

export default OfferStrip;
