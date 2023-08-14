import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigations from './Navigation/Stack';

export default function App() {
  return (
    <NavigationContainer>
      <Navigations/>
    </NavigationContainer>
  );
}