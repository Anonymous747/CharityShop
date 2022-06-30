import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import CartPage from './CartPage';
import WalletPage from './WalletPage';
import PalleteColor from '../general/PalleteColor';

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = ({}) => {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor={PalleteColor.White}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarLable: 'Home',
          tabBarColor: PalleteColor.Orange,
          tabBarIcon: ({color, focused}) => (
            <Icon
              name="ios-home"
              color={focused ? PalleteColor.Focussed : color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletPage}
        options={{
          tabBarLabel: 'Wallet',
          tabBarColor: PalleteColor.Orange,
          tabBarIcon: ({color, focused}) => (
            <Icon
              name="wallet"
              type="entypo"
              color={focused ? PalleteColor.Focussed : color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartPage}
        options={{
          tabBarLabel: 'Cart',
          tabBarColor: PalleteColor.Orange,
          tabBarIcon: ({color, focused}) => (
            <Icon
              name="cart"
              type="evillcons"
              color={focused ? PalleteColor.Focussed : color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: PalleteColor.Orange,
          tabBarIcon: ({color, focused}) => (
            <Icon
              name="ios-person"
              color={focused ? PalleteColor.Focussed : color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabScreen;
