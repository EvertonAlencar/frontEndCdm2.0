import { StatusBar } from 'expo-status-bar';
import {ScrollView} from 'react-native';
import ChooseOmeletScreen from './screens/ChooseOmeletScreen';

export default function App() {
  return (
    <ScrollView>
        <ChooseOmeletScreen/>
        <StatusBar style="auto" hidden={true} />
    </ScrollView>
  );
}