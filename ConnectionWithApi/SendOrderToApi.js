import axios from "axios";
import { DATA } from "../db/orders";

const baseUrl = {uri : 'http://10.0.0.100:5000/sendOrder'}

export async function sendOrder(){ 
    await axios.put(baseUrl.uri, 
        {
            'id' : 0,
            'apartamentNumber' : 121,
            'tableNumber' : 12,
            'body' : await assembleOrder(),
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