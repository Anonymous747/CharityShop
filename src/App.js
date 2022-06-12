import 'react-native-gesture-handler';
import React from 'react';
import * as ReactNative from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from './screens/LoginPage';
import SignUpPage  from './screens/SignUpPage';

const Stack = createStackNavigator();

const App = () => {
  // TODO: Authorization check will be added soon
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' headerMode='none'>
        <Stack.Screen
          name='Login'
          component={LoginPage}
        />
        <Stack.Screen
          name='SignUp'
          component={SignUpPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
