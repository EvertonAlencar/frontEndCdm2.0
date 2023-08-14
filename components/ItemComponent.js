import React from "react";
import { useState } from "react";
import { Text, View, TouchableOpacity,StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import {AntDesign , Feather} from '@expo/vector-icons'
import { addOrder, setIdItemInData, DATA, updateOrder } from "../db/orders";

export default function ItemComponent({title,description}){
    const [getQuantity,setQuantity] = useState(0)
    const [getAddButtomText, setAddButtomText] = useState('Adicionar')
    return(
        <View style={styles.main}>
            <View style={styles.containerTitleValueAndAddButtom}> 
                <Text style={styles.title}>
                    {title}
                </Text>
                <View style={styles.viewChooseQuantity}>
                    <TouchableOpacity style={styles.buttomQuantity} onPress={()=>{
                        if (getQuantity > 0){
                            setQuantity(getQuantity - 1)
                        }
                        
                    }}>
                        <AntDesign name='minussquareo' size={RFPercentage(4)} color={'#68BE36'}/>
                    </TouchableOpacity>
                    <Text style={styles.textQuantity}>{getQuantity}</Text>
                    <TouchableOpacity style={styles.buttomQuantity} onPress={()=>{
                        setQuantity(getQuantity + 1)
                    }}>
                        <AntDesign name='plussquareo' size={RFPercentage(4)} color={'#68BE36'}/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.buttomAddQuantity} activeOpacity={0.6} onPress={()=>{
                    if(getQuantity != 0){
                        if (DATA.find(item => item.title == title)){
                            updateOrder(title,getQuantity)
                        }else{
                            addOrder({id : setIdItemInData(), title: title, quantity : getQuantity })
                        }
                        setAddButtomText(<Feather name="check-circle" size={RFPercentage(4)} color="white" />)
                        setTimeout(() => {
                            setAddButtomText('Adicionar')
                        }, 1000);
                        setQuantity(0)
                        
                    }
                    }}>
                    <Text style={styles.textButtomAddQuantity}>{getAddButtomText}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerDescription}>
                <View style = {styles.viewDescription}>
                    <Text style={styles.textDescripiton}>
                        {description}
                    </Text>
                </View>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    main : {
        flex: 1,
        flexDirection: 'row',
        width: '90%',
        height: RFPercentage(25),
        backgroundColor : '#0161B3',
        borderRadius: 20,
        marginBottom: 20,
        padding: '2%'
    },
    containerTitleValueAndAddButtom : {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: '50%',
        height: '100%',
    },
    title : {
        textAlign: "center",
        fontSize: RFPercentage(2.5),
        color: 'white',
        marginBottom: '10%'
    },
    viewChooseQuantity : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        marginBottom: '10%'
    },
    buttomQuantity: {
        fontSize: RFPercentage(10)
    },
    textQuantity: {
        color: 'white',
        fontSize: RFPercentage(3)
    },
    buttomAddQuantity: {
        width: '60%',
        height: '20%',
        backgroundColor: '#FBB102',
        marginBottom: '5%',
        borderRadius : 5
    },
    textButtomAddQuantity: {
        color: 'white',
        fontSize: RFPercentage(2.5),
        textAlign: "center",
        verticalAlign: 'middle'
    },  
    containerDescription : {
        flex: 1,
        flexDirection: 'column',
        width: '50%',
        height: '100%',
        alignItems: 'flex-end'
    },

    viewDescription: {
        width: '95%',
        height: '100%',
        backgroundColor: '#0184F3',
        borderRadius: 20,
        padding : RFPercentage(2)
        
    },
    textDescripiton : {
        fontSize : RFPercentage(2),
        color: 'white',
        textAlign: "center",

    }
});