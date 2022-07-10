import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BackgroundLinearGradient} from '../components/molecules/index';
import {SearchMenu, IconWithLable} from '../components/atoms/index';
import {Icon} from 'react-native-elements';
import PalleteColor from '../general/PalleteColor';

const HomePage = () => {
  return (
    <BackgroundLinearGradient>
      <SafeAreaView>
        <View style={styles.searchBarView}>
          <SearchMenu style={styles.searchBar}>
            <IconWithLable
              name="message-square"
              type="feather"
              size={44}
              iconSize={28}
              lableRadius={10}
              lable={'4'}
            />
            <IconWithLable
              name="bell"
              type="feather"
              size={38}
              iconSize={28}
              lableRadius={10}
              lable={'4'}
            />
          </SearchMenu>
        </View>
      </SafeAreaView>
    </BackgroundLinearGradient>
  );
};

const styles = StyleSheet.create({
  searchBarView: {
    alignContent: 'center',
    marginHorizontal: 20,
    paddingTop: 10,
    width: '70%',
  },
  searchBar: {
    borderRadius: 20,
    width: '100%',
    height: 40,
  },
});

export default HomePage;
