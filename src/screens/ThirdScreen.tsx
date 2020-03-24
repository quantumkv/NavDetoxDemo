import * as React from 'react';
import {View, Text} from 'react-native';

const ThirdScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text testID="third_screen">Third Screen</Text>
    </View>
  );
};

export default ThirdScreen;
