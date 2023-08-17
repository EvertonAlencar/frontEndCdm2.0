import { StatusBar } from 'expo-status-bar';
import {ScrollView,View, ImageBackground} from 'react-native';
import ItemComponent from '../../components/ItemComponent'
import {styles} from './styles'
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigation } from '../../Navigation/Tabs';
import { HeaderWithButtomCart } from '../../components/HeaderWithButtomCart';
import { RFPercentage } from 'react-native-responsive-fontsize';

export default function ChooseTapiocaScreen() {
  const logo = require('../../assets/logo.png')
  return (
    
    <View style={{backgroundColor: 'white'}}>
      <View style={{width: '100%', height: RFPercentage(8)}}>
        <HeaderWithButtomCart Title={'Tapiocas'} showCart={true}/>
      </View>
      <ScrollView>
        <View style={styles.container}>
        <ImageBackground source={logo} resizeMode="contain" style={{width: RFPercentage(100), height: RFPercentage(10), marginBottom: RFPercentage(5)}}></ImageBackground>
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

    </View>
  );
}
