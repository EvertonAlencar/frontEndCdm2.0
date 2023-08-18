import React from "react";
import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: RFPercentage(2)
    },
    section: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: RFPercentage(1)
    },
    textInput: {
        width: '20%',
        height: RFPercentage(5),
        borderWidth: 1,
        fontSize: RFPercentage(3)
    },
    textInputRed: {
        width: '20%',
        height: RFPercentage(5),
        borderWidth: 1,
        fontSize: RFPercentage(3),
        borderColor: 'red'
    },
    sectionLarge: {
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    largeTextInput: {
        width: '80%',
        height: RFPercentage(15),
        borderWidth: 1,
        fontSize: RFPercentage(3)
    },
    largeTextInputRed: {
        width: '80%',
        height: RFPercentage(15),
        borderWidth: 1,
        borderColor: 'red',
        fontSize: RFPercentage(3)
    },
    title: {
        fontSize: RFPercentage(3),
        width: '80%',
        fontWeight: 'bold'
    },
    sectionButtonSendOrder: {
        width: '80%',
        height: '10%',
        marginTop: RFPercentage(3)
    },
    buttonSendOrder: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FBB102',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: RFPercentage(2)
    },
    textButtonSendOrder: {
        color: 'white',
        fontSize: RFPercentage(3)
    }
});