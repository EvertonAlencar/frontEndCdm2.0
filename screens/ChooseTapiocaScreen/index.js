import { StatusBar } from 'expo-status-bar';
import {ScrollView,View} from 'react-native';
import ItemComponent from '../../components/ItemComponent'
import {styles} from './styles'

export default function ChooseTapiocaScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ItemComponent title={'Tapioca De Coco'} description={'Tapioca recheada com coco fresco ralado'}/>
        <ItemComponent title={'Tapioca Molhada'} description={'Tapioca molhada com leite de coco'}/>
        <ItemComponent title={'Tapioca Rendada'} description={'Tapioca recheada com queijo coalho'}/>
        <ItemComponent title={'Tapioca Pizza'} description={'Tapioca recheada com queijo coalho, presunto, oregano e requeijão'}/>
        <ItemComponent title={'Tapioca Mista'} description={'Tapioca rechada com queijo coalho e presunto'}/>
        <ItemComponent title={'Tapioca Com Ovos'} description={'Tapioca recheada com ovos fritos'}/>
        <ItemComponent title={'Tapioca Com Manteiga'} description={'Tapioca recheada com manteiga'}/>
        <ItemComponent title={'Tapioca De Leite Condençado'} description={'Tapioca recheada com leite condençado'}/>
        <ItemComponent title={'Tapioca De Nutella'} description={'Tapioca recheada com nutella'}/>
        <ItemComponent title={'Tapioca De Doce De Leite'} description={'Tapioca recheada com doce de leite'}/>
        <StatusBar style="auto" hidden={true} />
      </View>
    </ScrollView>
  );
}
