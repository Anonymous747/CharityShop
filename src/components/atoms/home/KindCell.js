import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import PalleteColor from '../../../general/PalleteColor';

const KindCell = ({title}) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.roundedContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  roundedContainer: {
    backgroundColor: PalleteColor.Orange,
    borderRadius: 60,
    height: 30,
    marginHorizontal: 5,
  },
  text: {
    color: PalleteColor.White,
    fontSize: 16,
    marginHorizontal: 10,
    marginVertical: 4,
  },
});

export default KindCell;
