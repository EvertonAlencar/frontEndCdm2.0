import React from "react";
import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
export const styles = StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: '#fff',
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column',
      marginTop: RFPercentage(2),
      marginBottom: RFPercentage(8)
    }
  });