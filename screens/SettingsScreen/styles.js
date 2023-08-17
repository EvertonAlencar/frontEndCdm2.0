import React from "react";
import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({

    mainContainer: {
        flex : 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleInput : {
        fontSize: RFPercentage(4),
        marginBottom: RFPercentage(2)
    },
    inputText: {
        borderWidth: 2,
        width: RFPercentage(50),
        height: RFPercentage(5),
        borderRadius: RFPercentage(1),
        fontSize: RFPercentage(3),
        textAlign: 'center',
        marginBottom: RFPercentage(2)
    },
    responsePassword:{
        color: 'red',
        fontSize: RFPercentage(3)
    },
    btnNext: {
        backgroundColor: '#FBB102',
        width: RFPercentage(50),
        height: RFPercentage(5),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: RFPercentage(3)
    },
    btnNextText: {
        fontSize: RFPercentage(3),
        color: 'white'
    }

});