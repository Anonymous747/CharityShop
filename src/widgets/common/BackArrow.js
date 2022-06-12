import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const BackArrow = ({onPress}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.backArrow, {paddingTop: insets.top}]}>
      <Icon
        name="left"
        type="ant-design"
        color="#FFF"
        size={16}
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backArrow: {
    justifyContent: 'flex-end',
    alignContent: 'flex-start',
    alignSelf: 'flex-start',
    height: '12%',
    paddingHorizontal: 20,
    paddingBottom: '4%',
  },
});
