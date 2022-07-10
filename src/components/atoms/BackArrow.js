import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import PalleteColor from '../../general/PalleteColor';

const BackArrow = ({onPress}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.backArrow, {paddingTop: insets.top}]}>
      <Icon
        name="left"
        type="ant-design"
        color={PalleteColor.White}
        size={16}
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backArrow: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-start',
    height: 80,
    paddingHorizontal: 20,
    paddingBottom: '4%',
  },
});

export default BackArrow;
