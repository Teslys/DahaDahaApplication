import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../views/Home/Home';
import DataModal from '../views/DataModal/DataModal';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="InfoModal"
        component={DataModal}
        options={{
          headerShown: false,
        }}
        fullScreenModal
      />
    </Stack.Navigator>
  );
}

export default Router;
