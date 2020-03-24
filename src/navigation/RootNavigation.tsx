import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FirstPage from '../screens/FirstPage';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="FirstPage">
      <Stack.Screen name="FirstPage" component={FirstPage} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
