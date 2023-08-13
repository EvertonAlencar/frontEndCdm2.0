import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet,StatusBar, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import { SafeAreaView } from "react-native-safe-area-context";
import { RFPercentage } from "react-native-responsive-fontsize";
import {AntDesign} from '@expo/vector-icons'



const DATA = [
    {
      id: 0,
      title: 'Tapioca De Nutella',
      quantity: 2
    },
    {
      id: 1,
      title: 'Tapioca De Doce De Leite',
      quantity: 1
    },
    {
      id: 2,
      title: 'Omelete Misto',
      quantity: 3
    }
  ];

  const Item = ({title,ItemQuantity}) => (
    
    <View style={styles.item}>
        
        <View style={styles.containerTitleAndSetQuantity}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.containerSetQuantity}>

                <TouchableOpacity style={styles.buttomQuantity}>
                    <AntDesign name='minussquareo' size={RFPercentage(4)} color={'#68BE36'}/>
                </TouchableOpacity>

                <Text style={styles.quantity}>{ItemQuantity}</Text>

                <TouchableOpacity style={styles.buttomQuantity}>
                    <AntDesign name='plussquareo' size={RFPercentage(4)} color={'#68BE36'}/>
                </TouchableOpacity>

            </View>

        </View>

        <TouchableOpacity style={styles.trashButtom}>
        <Ionicons name="trash-outline" size={RFPercentage(4)} color="black" />
        </TouchableOpacity>


    </View>
  );

export default function CartScreen(){
    const [getData,setData] = useState(DATA)
    return (
        <SafeAreaView style={styles.container}>
          <FlatList
            data={getData}
            renderItem={({item}) => <Item title={item.title} ItemQuantity={item.quantity}/>}
            keyExtractor={item => item.id}
          />
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
        padding: RFPercentage(1),
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
    }
  });