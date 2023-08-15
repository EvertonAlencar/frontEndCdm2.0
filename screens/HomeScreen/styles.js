import React from "react";
import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    mainContainer: {
        height: '100%'
    },
    ButtonsContainer : {
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttons: {
        width: '90%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '5%',
        borderRadius: RFPercentage(4)
    },
    textButtons: {
        fontSize: RFPercentage(5),
        color: 'white',
        zIndex: 2
    },
    cover: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        opacity: 0.5,
        position: 'absolute',
        zIndex: 1,
        borderRadius: RFPercentage(4)
    },
    background:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    }
});