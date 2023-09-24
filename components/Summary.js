import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Element from './Element';
import Button from './Button';
export const elements = [
    {
        label: 'Reaction',
        theme: '#FFD1D1',
        color: '#FF4D4D',
        score: 80
    },
    {
        label: 'Memory',
        theme: '#FFFED1',
        color: '#FFCC4D',
        score: 92

    },
    {
        label: 'Verbal',
        theme: '#D1FFD6',
        color: '#01FF04',
        score: 61

    },
    {
        label: 'Visual',
        theme: '#D1D7FF',
        color: '#4D70FF',
        score: 72

    }
]

export default function Summary() {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Summary </Text>
            {
                elements.map((element, index)=> {
                    return <Element  
                        key={index}
                        label={element.label}
                        theme={element.theme}
                        color={element.color}
                        score={element.score} />
                })
            }
        <Button label="Continue"/>
        </View>
       
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 25,

    },
    text: {
        color: '#000000',
        fontWeight: '700',
    }
});