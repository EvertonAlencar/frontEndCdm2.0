import React from "react";
import { View, TouchableOpacity, Text,StatusBar, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {HeaderWithButtomCart} from "../../components/HeaderWithButtomCart"

import { styles } from "./styles";
import { RFPercentage } from "react-native-responsive-fontsize";
const Background = [
    { uri : require('../../assets/TapiocaBackGround.png')},
    { uri : require('../../assets/OmeleteBackground.jpg')}
]


export default function Home(){
    const logo = require('../../assets/logo.png')
    const Navigation = useNavigation();
    return(
        <View style={styles.mainContainer}>
            <View style={{height: RFPercentage(8)}}>
                <HeaderWithButtomCart Title={'Inicio'} showConfigApp={true}/>
            </View>
            
        <View style={styles.ButtonsContainer}>
        <ImageBackground source={logo} resizeMode="contain" style={{width: RFPercentage(100), height: RFPercentage(10), marginBottom: RFPercentage(5)}}></ImageBackground>
            <TouchableOpacity onPress={()=>{
                Navigation.navigate('Tapiocas')
            }} style={styles.buttons}>
                <View style={styles.cover}>
                </View>
                <ImageBackground imageStyle={{borderRadius: RFPercentage(4)}} source={Background[0].uri} resizeMode="cover" style={styles.background}>
                    <Text style={styles.textButtons}>Tapiocas</Text>
                </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{
                Navigation.navigate('Omeletes')
            }} style={styles.buttons}>
                <View style={styles.cover}>
                </View>
                <ImageBackground imageStyle={{borderRadius: RFPercentage(4)}} source={Background[1].uri} resizeMode="cover" style={styles.background}>
                    <Text style={styles.textButtons}>Omeletes</Text>
                </ImageBackground>
            </TouchableOpacity>
            
            <StatusBar hidden={true}/>
        </View>
        </View>
    );
}

