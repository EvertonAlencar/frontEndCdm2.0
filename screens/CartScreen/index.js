import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet,StatusBar, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import { SafeAreaView } from "react-native-safe-area-context";
import { RFPercentage } from "react-native-responsive-fontsize";


import { DATA,addOrder, removeOrder, updateOrder } from "../../db/orders";


export default function CartScreen(){


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
            <Ionicons name="trash-outline" size={RFPercentage(4)} color="black" />
            </TouchableOpacity>
    
    
        </View>
      );

    return (
        <SafeAreaView style={styles.container}>
          <FlatList
            data={getData}
            renderItem={({item}) => <Item title={item.title} ItemQuantity={item.quantity}/>}
            keyExtractor={item => item.id}
            refreshing={getRefresh}
          />
          <View style={styles.buttomEndOrderContainer}>
            <TouchableOpacity style={styles.buttomEndOrder}>
                <Text style={styles.textButtomEndOrder}>Finalizar pedido</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#0161B3',
        padding: RFPercentage(1.3),
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: RFPercentage(1)
    },
    title: {
        fontSize: RFPercentage(3),
        color:'white'
    },
    trashButtom: {
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#FBB102',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 4,
        borderColor: '#FBB102',
        borderRadius: RFPercentage(1)
    },
    containerTitleAndSetQuantity: {
        flexDirection: 'column'
    },
    containerSetQuantity: {
        width: '80%',
        flexDirection: "row"
    },
    buttomQuantity: {
        fontSize: RFPercentage(10),
        justifyContent: 'space-between'
    },
    quantity: {
        fontSize: RFPercentage(3),
        color: 'white',
        marginLeft: RFPercentage(2),
        marginRight: RFPercentage(2)
    },
    buttomEndOrderContainer: {
        width: '100%',
        height: '10%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: "center"
    },
    buttomEndOrder: {
        width: '90%',
        height: '80%',
        backgroundColor: '#FBB102',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: RFPercentage(2)
    },
    textButtomEndOrder:{
        fontSize: RFPercentage(3),
        color: 'white'
    }
  });