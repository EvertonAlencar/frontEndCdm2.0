import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#0161B3',
        padding: RFPercentage(1.3),
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: RFPercentage(1)
    },
    title: {
        fontSize: RFPercentage(3),
        color:'white'
    },
    trashButtom: {
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#FBB102',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 4,
        borderColor: '#FBB102',
        borderRadius: RFPercentage(1)
    },
    containerTitleAndSetQuantity: {
        flexDirection: 'column'
    },
    containerSetQuantity: {
        width: '80%',
        flexDirection: "row"
    },
    buttomQuantity: {
        fontSize: RFPercentage(10),
        justifyContent: 'space-between'
    },
    quantity: {
        fontSize: RFPercentage(3),
        color: 'white',
        marginLeft: RFPercentage(2),
        marginRight: RFPercentage(2)
    },
    buttomEndOrderContainer: {
        width: '100%',
        height: '10%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: "center"
    },
    buttomEndOrder: {
        width: '90%',
        height: '80%',
        backgroundColor: '#FBB102',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: RFPercentage(2)
    },
    textButtomEndOrder:{
        fontSize: RFPercentage(3),
        color: 'white'
    }
  });