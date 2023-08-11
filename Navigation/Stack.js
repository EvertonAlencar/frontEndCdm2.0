import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {TouchableOpacity } from "react-native";

import Home from '../screens/HomeScreen'
import ChooseOmeletScreen from '../screens/ChooseOmeletScreen'
import ChooseTapiocaScreen from '../screens/ChooseTapiocaScreen'
import CartScreen from "../screens/CartScreen";

import { Badge } from "react-native-paper";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/core";

import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();



export default function Navigations(){
    const Navigation = useNavigation()
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Tapiocas" component={ChooseTapiocaScreen} options={{title:'Tapiocas',
          headerRight: () => (
            <TouchableOpacity 
            style={{
                display: "flex",
                flexDirection: "collum", 
                justifyContent: 'space-between'
                }}
            onPress={()=>{Navigation.navigate('Carrinho')}}
                >
                <Badge size={RFPercentage(2)}>3</Badge>
                <Ionicons name="cart-outline" size={RFPercentage(4)} color="black" />
                
            </TouchableOpacity>
          )
        }}/>
            <Stack.Screen name="Omeletes" component={ChooseOmeletScreen} options={{title:'Omeletes',
          headerRight: () => (
            <TouchableOpacity 
            style={{
                display: "flex",
                flexDirection: "collum", 
                justifyContent: 'space-between'
                }}
                onPress={()=>{Navigation.navigate('Carrinho')}}
                >
                <Badge size={RFPercentage(2)}>3</Badge>
                <Ionicons name="cart-outline" size={RFPercentage(4)} color="black" />
                
            </TouchableOpacity>
          )
        }}/>
            <Stack.Screen name="Carrinho" component={CartScreen}/>
        </Stack.Navigator>
    );
}