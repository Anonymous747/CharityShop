import * as React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import PalleteColor from '../../general/PalleteColor';

const BackgroundLinearGradient = ({
  children,
  style,
  colors = [PalleteColor.Red, PalleteColor.Orange],
}) => {
  return (
    <LinearGradient
      colors={colors}
      angle={90.0}
      useAngle={true}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      flex={1}
      style={style}>
      {children}
    </LinearGradient>
  );
};

export default BackgroundLinearGradient;
