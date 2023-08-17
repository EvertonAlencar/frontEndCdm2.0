import axios from "axios";
import { DATA } from "../db/orders";
import { APIConfigs} from "../db/configsAPI";
import AsyncStorage from '@react-native-async-storage/async-storage';




export async function sendOrder(){ 
  const baseUrl = await AsyncStorage.getItem('ApiConfigs')
    console.log(baseUrl)
    await axios.put(baseUrl, 
        {
            'id' : 0,
            'apartamentNumber' : 121,
            'tableNumber' : 12,
            'body' : assembleOrder(),
            'observation': 'descrição'
        }
    )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
}

export function assembleOrder(){
    var orders = ""
    DATA.forEach((item)=>{
        orders += '\n' + item.quantity + ' ' + ' ' + item.title + '\n'
    })
    return orders
}