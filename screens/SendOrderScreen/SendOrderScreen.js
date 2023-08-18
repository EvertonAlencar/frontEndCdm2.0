import React, { useState } from "react";
import { View, ImageBackground, Text, TextInput, TouchableOpacity, StatusBar} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { HeaderWithButtomCart } from "../../components/HeaderWithButtomCart";
import { styles } from "./styles";
import {sendOrder } from "../../ConnectionWithApi/SendOrderToApi";
import { DATA, resetData } from "../../db/orders";
import { useNavigation } from "@react-navigation/native";

export default function SendOrderScreen(){
    const logo = require('../../assets/logo.png')
    const Navigation = useNavigation()
    const [getApartamentNumber, setApartamentNumber] = useState('')
    const [getTableNumber, setTableNumber] = useState('')
    const [getOrderObservation, setOrderObservation] = useState('')
    const [getClothesDescription, setClothesDescription] = useState('')
    const [getBorderColor, setBorderColor] = useState(false)

    return (
        <View style={{flex: 1}}>
            <View style={{width: '100%', height: RFPercentage(8)}}>
                <HeaderWithButtomCart Title={'Enviar Pedido'}/>
            </View>
            <View  style={styles.mainContainer}>
                <View>
                    <ImageBackground source={logo} resizeMode="contain" style={{width: RFPercentage(100), height: RFPercentage(10), marginBottom: RFPercentage(5)}}></ImageBackground>
                </View>
                <View style={styles.section}>
                    <Text style={styles.title}>
                        Numero do apartamento:
                    </Text>
                    <TextInput inputMode="numeric" style={getBorderColor ? styles.textInputRed : styles.textInput } value={getApartamentNumber} onChangeText={(text)=>setApartamentNumber(text)}>

                    </TextInput>
                </View>
                <View style={styles.section}>
                    <Text style={styles.title}>
                        Numero da mesa:
                    </Text>
                    <TextInput inputMode="numeric" style={styles.textInput} value={getTableNumber} onChangeText={(text)=>setTableNumber(text)}>

                    </TextInput>
                </View>
                <View style={styles.sectionLarge}>
                    <Text style={styles.title}>
                        Observações do pedido:
                    </Text>
                    <TextInput multiline={true} style={styles.largeTextInput} value={getOrderObservation} onChangeText={(text) => setOrderObservation(text)}>

                    </TextInput>
                </View>
                <View style={styles.sectionLarge}>
                    <Text style={styles.title}>
                        Descrição de vestimentas:
                    </Text>
                    <TextInput multiline={true} style={getBorderColor ? styles.largeTextInputRed : styles.largeTextInput} value={getClothesDescription} onChangeText={(text)=> setClothesDescription(text)}>

                    </TextInput>
                </View>
                <View style={styles.sectionButtonSendOrder}>
                    <TouchableOpacity style={styles.buttonSendOrder} onPress={()=>{
                            if(getApartamentNumber == '' || getClothesDescription == ''){
                                setBorderColor(true)
                            }else{
                                setBorderColor(false)
                                DATA[0].apartamentNumber = getApartamentNumber
                                DATA[0].tableNumber = getTableNumber
                                DATA[0].orderObservation = getOrderObservation
                                DATA[0].clothesDescription = getClothesDescription
                                sendOrder()
                                Navigation.navigate('FeedBackOrder')
                            }
                        }}>
                        <Text style={styles.textButtonSendOrder}>
                            Enviar Pedido
                        </Text>
                    </TouchableOpacity>
                </View>
                <StatusBar hidden={true}/>
            </View>
        </View>
    );
}