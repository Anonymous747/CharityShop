import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';

import * as Paths from './general/Paths';

import store from './store/ConfigStore';
import LoginPage from './screens/LoginPage';
import SignUpPage from './screens/SignUpPage';
import MainTabScreen from './screens/MainTabScreen';

const Stack = createStackNavigator();

const App = () => {
  // TODO: Authorization check will be added soon
  return (
    <Provider store={store()}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" headerMode="none">
          <Stack.Screen name={Paths.LOGIN} component={LoginPage} />
          <Stack.Screen name={Paths.SIGN_UP} component={SignUpPage} />
          <Stack.Screen name={Paths.MAIN_TAB} component={MainTabScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
