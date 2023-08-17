import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';




export const APIConfigs = {
    Url : '',
    port : '',
    endPoint : '/sendOrder'
}

export function SaveApiUrl(){

    const baseUrl = 'http://'+APIConfigs.Url+':'+APIConfigs.port+APIConfigs.endPoint

    const setApiUrl = async () => {
        try {
        await AsyncStorage.setItem(
            'ApiConfigs',
            baseUrl
        );
        } catch (error) {
        // Error saving data
        }
    }

    setApiUrl()

}

