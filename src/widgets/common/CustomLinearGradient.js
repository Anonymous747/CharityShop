import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

  export const CustomLinearGradient = () => {
    return (
      <LinearGradient 
        colors={[PalleteColor.Red, PalleteColor.Orange]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.headerGradient}  
      >
        <Text style={styles.logeText}>Eco Textile</Text>
        <View style={styles.headerView}>
          <View style={styles.whiteLineView} >
          </View>
        </View>
    </LinearGradient>
    );
  }

  const styles = StyleSheet.create({
    headerGradient: {
      alignItems: 'center',
      justifyContent: 'center',
      height: '30%',
    },
    logoText: {

    },
    headerView: {

    },
    whiteLineView: {

    },
  });

  export default LinearGradient;