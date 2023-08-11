import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home(){
    const Navigation = useNavigation();
    return(
        <View>
            <TouchableOpacity onPress={()=>{
                Navigation.navigate('Tapiocas')
            }}>
                <Text>Tapiocas</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                Navigation.navigate('Omeletes')
            }}>
                <Text>Omeletes</Text>
            </TouchableOpacity>
            <StatusBar hidden={true}/>
        </View>
    );
}

