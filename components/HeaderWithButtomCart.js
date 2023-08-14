import React, { useState } from "react";
import { View, Touchable, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Badge } from "react-native-paper";
import { updateQuantityItensInCart } from "../db/orders"



export function HeaderWithButtomCart({Title}){
    const [getItensInCart,setItensInCart] = useState(updateQuantityItensInCart())
    const Navigation = useNavigation()

    setInterval(() => {
        setItensInCart(updateQuantityItensInCart())
    }, 500);


    return(
        <View style={styles.mainContainer}>
            <Text style={styles.title}>{Title}</Text>
            <TouchableOpacity onPress={()=>{Navigation.navigate('Carrinho')}}>
                <View  style={styles.cartContainer}>
                    <Badge style={{
                        backgroundColor: '#FBB102', 
                        color: 'white', 
                        marginBottom: RFPercentage(-1.5), 
                        zIndex: 1
                    }}>{getItensInCart}</Badge>
                    <Ionicons name="cart-outline" size={RFPercentage(4)} color="white" />
                </View>
                
                
            </TouchableOpacity>
        </View>
    )
}



const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        width: '100%',
        backgroundColor: '#0161B3',
        paddingLeft: RFPercentage(5),
        paddingRight: RFPercentage(5)
    },
    title: {
        fontSize: RFPercentage(3),
        color: 'white',
    },
    cartContainer: {
        flexDirection: 'column',
    },
    badge: {

    }
})