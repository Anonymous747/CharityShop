import * as React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {PalleteColor} from '../../general/PalleteColor';

export const CustomLinearGradient = ({children}) => {
  return (
    <LinearGradient
      colors={[PalleteColor.Red, PalleteColor.Orange]}
      angle={90.0}
      useAngle={true}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.headerGradient}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  headerGradient: {
    // alignItems: 'center',
    // justifyContent: 'center',
    // height: '100%',
    flex: 1,
  },
});
