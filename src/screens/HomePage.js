import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BackgroundLinearGradient} from '../components/molecules/index';
import {SearchMenu} from '../components/atoms/index';
import {Icon} from 'react-native-elements';

const HomePage = () => {
  return (
    <BackgroundLinearGradient>
      <SafeAreaView>
        <View style={styles.searchBarView}>
          <SearchMenu style={styles.searchBar}>
            <Icon name="message-square" type="feather" color="#FFF" size={28} />
            <Icon name="message-square" type="feather" color="#FFF" size={28} />
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
