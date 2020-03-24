/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useReducer} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './navigation/RootNavigation';
import MainNavigation from './navigation/MainNavigation';

const initialState = {navigation: 'root'};

export const NavigationContext = React.createContext<any>({});

function reducer(state: any, action: string) {
  return {navigation: action};
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getNavigation = () => {
    switch (state.navigation) {
      case 'root':
        return <RootNavigation />;
      case 'home':
        return <MainNavigation />;
      default:
        return <></>;
    }
  };

  return (
    <NavigationContainer>
      <NavigationContext.Provider value={{dispatch}}>
        {getNavigation()}
      </NavigationContext.Provider>
    </NavigationContainer>
  );
};

export default App;
