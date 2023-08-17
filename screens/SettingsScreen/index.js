import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { styles } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';
import { RFPercentage } from "react-native-responsive-fontsize";

export default function SettingsScreen(){
    const [getSettingsScreen, setSettingsScreen] = useState('Password')
    const [getPassword,setPassword] = useState('')
    const [getResponsePassword, setResponsePassword] = useState('Avançar')

    if (getSettingsScreen == 'Password'){
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.titleInput}>
                    Digite a senha
                </Text>
                <TextInput style={styles.inputText} value={getPassword} onChangeText={(text)=>{setPassword(text)}}>

                </TextInput>
                <TouchableOpacity style={styles.btnNext} onPress={()=>{
                    if (getPassword == 'Cdm2023*'){
                        console.log('Senha correta')
                        setSettingsScreen('Settings')
                    }else{
                        console.log('Senha Incorreta')
                        setResponsePassword(<MaterialIcons name="cancel" size={RFPercentage(4)} color="red" />)
                        setTimeout(
                            ()=>{
                                setResponsePassword('Avançar')
                                setPassword('')
                            },2000)
                        
                    }
                }}>
                    <Text style={styles.btnNextText}>
                        {getResponsePassword}
                    </Text>
                </TouchableOpacity>
                <Text style={styles.responsePassword}>
                    
                </Text>
            </View>
        );
    }else if(getSettingsScreen == 'Settings'){
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.titleInput}>
                    Configuração de API
                </Text>
                <View>
                    <Text style={styles.titleInput}>
                        URL:
                    </Text>
                    <TextInput style={styles.inputText}>

                    </TextInput>
                </View>
                <View>
                    <Text style={styles.titleInput}>
                        Porta:
                    </Text>
                    <TextInput style={styles.inputText}>

                    </TextInput>
                </View>
                <TouchableOpacity style={styles.btnNext}>
                    <Text style={styles.btnNextText}>
                        Salvar Configurações
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}