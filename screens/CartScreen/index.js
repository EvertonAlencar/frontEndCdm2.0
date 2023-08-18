import React, { useState } from "react";
import { View, Text, FlatList,TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import { SafeAreaView } from "react-native-safe-area-context";
import { RFPercentage } from "react-native-responsive-fontsize";
import { styles } from "./styles";
import {HeaderWithButtomCart} from '../../components/HeaderWithButtomCart'

import { DATA, removeOrder} from "../../db/orders";
import {assembleOrder, sendOrder} from '../../ConnectionWithApi/SendOrderToApi'
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

export default function CartScreen(){

    const Navigation = useNavigation()

    const [getData,setData] = useState(DATA)
    const [getRefresh, setRefresh] = useState(false)
    
    const Item = ({title,ItemQuantity}) => (
    
        <View style={styles.item}>
            
            <View style={styles.containerTitleAndSetQuantity}>
                <Text style={styles.title}>{ItemQuantity} - {title}</Text>
                <View style={styles.containerSetQuantity}>
                </View>
    
            </View>
    
            <TouchableOpacity style={styles.trashButtom}  onPress={()=>{
                removeOrder(title)
                setRefresh(true)
                setTimeout(()=>{
                    setRefresh(false)
                },300)
                }}>
            <Ionicons name="trash-outline" size={RFPercentage(4)} color="white" />
            </TouchableOpacity>
    
    
        </View>
      );

    return (
        <View style={{height: '100%'}}>
            <View style={{height: RFPercentage(8)}}>
                <HeaderWithButtomCart Title={'Carrinho'}/>
            </View>
            
            <SafeAreaView style={styles.container}>
            
            <FlatList
              data={getData}
              renderItem={({item}) => <Item title={item.title} ItemQuantity={item.quantity}/>}
              keyExtractor={item => item.id}
              refreshing={getRefresh}
            />
            <View style={styles.buttomEndOrderContainer}>
              <TouchableOpacity style={styles.buttomEndOrder} onPress={()=>{
  
                  if(getData.length == 0){
                      console.log('carrinho vazio')
                  }else{
                    Navigation.navigate('EnviarPedido')
                  }
  
              }}>
                  <Text style={styles.textButtomEndOrder}>Finalizar pedido</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </View>
        
      );
}


