import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import PalleteColor from '../../../general/PalleteColor';

const IconWithBottomText = ({cell}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon name={cell.name} type={cell.type} size={cell?.size ?? 16} />
        <Text style={styles.text}>{cell.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    flexDirection: 'column',
    width: '20%',
    marginVertical: 10,
  },
  text: {
    color: PalleteColor.Black,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default IconWithBottomText;
