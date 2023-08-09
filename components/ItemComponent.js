import React from "react";
import { Text, View, TouchableOpacity,StyleSheet } from "react-native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import Ionicons from '@expo/vector-icons/Ionicons';
import {AntDesign} from '@expo/vector-icons'

export default function ItemComponent(){
    return(
        <View style={styles.main}>
            <View style={styles.containerTitleValueAndAddButtom}> 
                <Text style={styles.title}>
                    Omelete completo
                </Text>
                <View style={styles.viewChooseQuantity}>
                    <TouchableOpacity style={styles.buttomQuantity}>
                        <AntDesign name='minussquareo' size={RFPercentage(4)} color={'#68BE36'}/>
                    </TouchableOpacity>
                    <Text style={styles.textQuantity}>0</Text>
                    <TouchableOpacity style={styles.buttomQuantity}>
                        <AntDesign name='plussquareo' size={RFPercentage(4)} color={'#68BE36'}/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.buttomAddQuantity}>
                    <Text style={styles.textButtomAddQuantity}>Adicionar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerDescription}>
                <View style = {styles.viewDescription}>
                    <Text style={styles.textDescripiton}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum vel enim
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
        height: 'auto',
        backgroundColor : '#0161B3',
        borderRadius: 20,
        marginBottom: 10,
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
        marginBottom: '5%'
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
        borderRadius: 20
        
    },
    textDescripiton : {
        fontSize : RFPercentage(2),
        color: 'white',
        textAlign: "center",

    }
});