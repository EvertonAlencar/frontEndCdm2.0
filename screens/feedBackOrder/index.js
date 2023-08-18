import React from "react";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { styles } from "./styles";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { resetData } from "../../db/orders";



export default function FeedBackOrder(){
    const Navigation = useNavigation()
    
    useEffect(()=>{
        setTimeout(() => {
            Navigation.navigate('Home')
            resetData()
        }, 5000)},[])
    return(
        <View style={styles.mainContainer}>
            <AntDesign name="checkcircle" size={RFPercentage(8)} color="green" />
            <Text style={styles.title}> 
                Pedido enviado com sucesso!!!
            </Text>
            <Text style={styles.subTitle}>
                agora e so aguardar.
            </Text>
            <StatusBar hidden/>
        </View>
    );
}