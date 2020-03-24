import * as React from 'react';
import {View, Text, Button} from 'react-native';

const SecondScreen = ({navigation}: any) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate('Third')}
          title="Clear button"
          testID="header_button"
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text testID="home_screen">Home Screen</Text>
    </View>
  );
};

export default SecondScreen;
