import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {TouchableOpacity } from "react-native";

import Home from '../screens/HomeScreen'
import ChooseOmeletScreen from '../screens/ChooseOmeletScreen'
import ChooseTapiocaScreen from '../screens/ChooseTapiocaScreen'
import CartScreen from "../screens/CartScreen";

import { Badge } from "react-native-paper";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/core";




const Stack = createNativeStackNavigator();



export default function Navigations(){
    const Navigation = useNavigation()
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Tapiocas" component={ChooseTapiocaScreen}/>
            <Stack.Screen name="Omeletes" component={ChooseOmeletScreen}/>
            <Stack.Screen name="Carrinho" component={CartScreen}/>
        </Stack.Navigator>
    );
}