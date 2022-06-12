import * as React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {PalleteColor} from '../../general/PalleteColor';

export const BackgroundLinearGradient = ({children}) => {
  return (
    <LinearGradient
      colors={[PalleteColor.Red, PalleteColor.Orange]}
      angle={90.0}
      useAngle={true}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      flex={1}>
      {children}
    </LinearGradient>
  );
};
