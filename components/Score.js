import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { elements } from './Summary';


export default function Score() {
    const sum = elements.reduce((previus,current) => {
        return (previus + current.score);
    },0)
    
    return (
            <LinearGradient 
                style={style.container}
                colors={['rgba(48,43,205,1)','rgba(0,0,255,0)']}>
                <Text style={style.CircularText}>{(sum/4).toFixed(0)}</Text>
                <Text style={style.text}>of 100</Text>
            </LinearGradient>
            
    )
}

const style = StyleSheet.create({
    container : {
        width: 120,
        height: 120,
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 60,
        margin: 25
    },
    text: {
        color: '#9c9c9c',
        fontWeight: "600",
        textAlign: "center"
    },
    CircularText: {
        color: '#CFCFCF',
        fontSize: 50,
        fontWeight: "900",
        textAlign: "center"
    }
})