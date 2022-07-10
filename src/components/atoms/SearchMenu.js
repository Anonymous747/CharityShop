import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Searchbar} from 'react-native-paper';

const SearchMenu = ({style, children}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery;

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={style}
      />
      <View style={styles.children}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  children: {
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default SearchMenu;
