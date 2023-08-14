import { StatusBar } from 'expo-status-bar';
import {ScrollView,View} from 'react-native';
import ItemComponent from '../../components/ItemComponent'
import {styles} from './styles'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { HeaderWithButtomCart } from '../../components/HeaderWithButtomCart';

export default function ChooseOmeletScreen() {
  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={{width: '100%', height: RFPercentage(8)}}>
        <HeaderWithButtomCart Title={'Omeletes'}/>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <ItemComponent title={'Omelete Misto'} description={'Omelete recheado com queijo e presunto'}/>
          <ItemComponent title={'Omelete Completo'} description={'Omelete recheado com queijo, presunto, cebola e tomate'}/>
          <ItemComponent title={'Omelete De Cuscuz'} description={'Omelete recheado com queijo e cuscuz'}/>
          <ItemComponent title={'Omelete De Goma'} description={'Omelete recheado com queijo e goma de tapioca'}/>
          <ItemComponent title={'Omelete Tradicional'} description={'Omelete recheado com ovos e manteiga'}/>
          <StatusBar style="auto" hidden={true} />
        </View>
      </ScrollView>
    </View>
  );
}
