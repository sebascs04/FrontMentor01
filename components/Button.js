import { StyleSheet, View,Pressable,Text } from "react-native";

export default function Button({label}) {



    return (
        <View style={styles.buttonContainer}>
            <Pressable 
                style={({pressed})=> [
                    {backgroundColor: pressed ? '#4420E2': '#3F4157'},
                    styles.button]} 
                onPress={() => alert('You pressed a button.')}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        display: '1',
        flexDirection:'row',
        marginTop: 26,
        height: 52,
    },
    button: {
        borderRadius: 25,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonLabel: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 16
    },
    buttonPressed: {
        backgroundColor: 'rgba(51,94,255,0.8)'
    }
  });
  