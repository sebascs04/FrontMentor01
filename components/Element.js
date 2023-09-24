import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import  ReactionIcon  from "./Icons/Reaction";
import VisualIcon from './Icons/Visual';
import VerbalIcon from './Icons/Verbal';
import MemoryIcon from './Icons/Memory';


export default function Element({label, theme, color, score}) {

    return (
        <View style={[styles.container, {backgroundColor: theme}]}>
            {label == 'Reaction' ? (
                <ReactionIcon />
            ) : label == 'Memory' ? (
                <MemoryIcon />
            ) : label == 'Verbal' ? (
                <VerbalIcon />
            ) : (
                <VisualIcon />
            )}
            <Text style={[styles.text1, {color: color}]}>{label}</Text>
            <View style={styles.ViewText}>
                <Text style={styles.text2}>{score}</Text>
                <Text style={[styles.text2,{color: '#7C7B7B'}]}> / 100</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection:'row',
        padding: 15,
        marginTop: 20,
        borderRadius: 10
    },
    text1: {
        fontWeight: '700',
        paddingLeft: 10,
    },
    text2: {
        fontWeight: '700',
    },
    ViewText: {
        width: 'auto',
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
  });