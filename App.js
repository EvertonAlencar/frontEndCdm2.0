import { StatusBar } from 'expo-status-bar';
import {ScrollView, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigations from './Navigation/Stack';
import ChooseOmeletScreen from './screens/ChooseOmeletScreen';

export default function App() {
  return (
    <NavigationContainer>
      <Navigations/>
    </NavigationContainer>
  );
}