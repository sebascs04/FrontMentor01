import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import Score from './Score';

export default function Result() {
    return (
            <LinearGradient 
                style = {style.container}
                colors={['rgba(51,94,255,0.8)','rgba(0,0,255,1)']}>
                <Text style={[style.text]}>Your Result</Text>
                <Score></Score>
                <Text style={[style.text,{fontSize: 25, paddingBottom: 10,color: '#CFCFCF'}]}>Great</Text>
                <Text style={[style.text,{width:250}]}>You scored higher than 65% of the people
                who have taken this tests.</Text>
            </LinearGradient>
    ) 

    
}

const style = StyleSheet.create({
    container : {
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        height: 320
    },
    text: {
        color:'#9b9b9b',
        fontWeight: "600",
        textAlign: "center"
    },
})