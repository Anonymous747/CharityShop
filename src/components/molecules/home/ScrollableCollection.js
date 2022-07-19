import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import PalleteColor from '../../../general/PalleteColor';
import {CollectionCell} from '../../atoms';

const ScrollableCollection = ({clothes}) => {
  return (
    <View>
      {/* <Icon name="lightning-bolt-outline" type="communityicons"></Icon> */}
      <View style={styles.headerView}>
        <View style={styles.titleView}>
          <Icon
            name="message-square"
            type="feather"
            size={26}
            color={PalleteColor.White}
          />
          <Text style={styles.titleText}>Flash Sales</Text>
        </View>
        <Text style={styles.viewAllText}>View All</Text>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={styles.scrollView}>
        {clothes.map((el, index) => {
          return (
            <CollectionCell
              key={index}
              image={el.image}
              subtitle={el.subtitle}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    height: 60,
  },
  titleView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  collectionView: {
    flexDirection: 'row',
  },
  scrollView: {
    marginLeft: 20,
  },
  titleText: {
    color: PalleteColor.White,
    fontSize: 24,
    fontWeight: '500',
    paddingHorizontal: 20,
  },
  viewAllText: {
    color: PalleteColor.White,
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: 16,
  },
});

export default ScrollableCollection;
