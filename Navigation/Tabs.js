import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CartScreen from "../screens/CartScreen";

const Tabs = createBottomTabNavigator();

export function TabNavigation(){
    return(
        <Tabs.Navigator>
            <Tabs.Screen name='Carrinho' component={CartScreen}/>
        </Tabs.Navigator>
    );
}