import axios from "axios";
import { DATA } from "../db/orders";
import { APIConfigs } from "../db/configsAPI";

const baseUrl = {uri : APIConfigs.Url + APIConfigs.port + APIConfigs.endPoint}

export async function sendOrder(){ 
    console.log(baseUrl.uri)
    await axios.put(baseUrl.uri, 
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
    DATA.forEach((item,index)=>{
        orders += '\n' + item.quantity + ' ' + ' ' + item.title + '\n'
    })
    return orders
}