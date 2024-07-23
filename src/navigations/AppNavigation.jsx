import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from '../constants/routes';
import StartScreen from '../screens/StartScreen';
import GameScreen from '../screens/GameScreen';
import GameOverScreen from '../screens/GameOverScreen';
const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={routes.START_SCREEN} component={StartScreen} />
        <Stack.Screen name={routes.GAME_SCREEN} component={GameScreen} />
        <Stack.Screen
          name={routes.GAME_OVER_SCREEN}
          component={GameOverScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
