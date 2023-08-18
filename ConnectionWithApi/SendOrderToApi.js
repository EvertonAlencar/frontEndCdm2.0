import axios from "axios";
import { DATA } from "../db/orders";
import AsyncStorage from '@react-native-async-storage/async-storage';




export async function sendOrder(){ 
  const baseUrl = await AsyncStorage.getItem('ApiConfigs')
    console.log(baseUrl)
    await axios.put(baseUrl, 
        {
            'id' : 0,
            'apartamentNumber' : DATA[0].apartamentNumber,
            'tableNumber' : DATA[0].tableNumber,
            'body' : assembleOrder(),
            'observation': DATA[0].orderObservation,
            'clothesDescription': DATA[0].clothesDescription
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