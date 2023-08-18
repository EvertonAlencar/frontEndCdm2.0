import React from "react";
import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: RFPercentage(4)
    },
    subTitle: {
        fontSize: RFPercentage(3),
        marginBottom: RFPercentage(2)
    },
    button: {
        backgroundColor: '#FBB102',
        width: '50%',
        height: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: RFPercentage(2)
    },
    textButton: {
        color: 'white',
        fontSize: RFPercentage(3)
    }
});