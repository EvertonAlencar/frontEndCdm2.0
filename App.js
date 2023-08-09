import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ScrollView,View} from 'react-native';
import ItemComponent from './components/ItemComponent';

export default function App() {
  const imagem  = {uri : './assets/logo.png'}
  return (
    <ScrollView>
      <View style={styles.container}>
        <ItemComponent/>
        <ItemComponent/>
        <ItemComponent/>
        <ItemComponent/>
        <ItemComponent/>
        <ItemComponent/>
        <ItemComponent/>
        <ItemComponent/>
        <ItemComponent/>
        <ItemComponent/>
        <ItemComponent/>
        <ItemComponent/>
        <ItemComponent/>
        <ItemComponent/>
        <ItemComponent/>
        <ItemComponent/>
        <StatusBar style="auto" hidden={true} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 50
  }
});
