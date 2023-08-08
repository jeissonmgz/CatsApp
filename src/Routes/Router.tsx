import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes } from './routes';

const Stack = createNativeStackNavigator();

export const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {routes.map(route => (
          <Stack.Screen key={route.name} name={route.name} component={route.component} options={route.options} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
