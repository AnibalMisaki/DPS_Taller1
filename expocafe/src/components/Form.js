import React from "react";
import {StyleSheet, TextInput, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import colors from "../utils/colors";

export default function Form(props){
    const {setTamaño, setCafe, setPago, setCantidad} = props;
    return(
        <View style={styles.viewForm}>
            <RNPickerSelect 
                style={picketSelectStyles}
                onValueChange={(value) => setTamaño(value)}
                placeholder={{
                    label: 'Selecciona el tamaño de café...',
                    value: null,
                }}
                items={[
                    {label: 'Pequeño', value: "Pequeño"},
                    {label: 'Mediano', value: "Mediano"},
                    {label: 'Grande', value: "Grande"},
                ]}
            />
            <RNPickerSelect 
                style={picketSelectStyles}
                onValueChange={(value) => setCafe(value)}
                placeholder={{
                    label: 'Selecciona el tipo de café...',
                    value: null,
                }}
                items={[
                    {label: 'Mocha', value: "Mocha"},
                    {label: 'Te Chai', value: "Te Chai"},
                    {label: 'Americano', value: "Americano"},
                    {label: 'Frapper', value: "Frapper"},
                ]}
            />
             
                <RNPickerSelect 
                    style={picketSelectStyles}
                    onValueChange={(value) => setPago(value)}
                    placeholder={{
                        label: 'Forma de pago',
                        value: null,
                    }}
                    items={[
                        {label: 'Efectivo', value: "Efectivo"},
                        {label: 'Credito', value: "Credito"},
                    ]}
                />
            <View style={styles.viewInputs}>
                <TextInput
                    placeholder="Cantidad"
                    keyboardType="numeric"
                    style={styles.input}
                    onChange={(e) => setCantidad(e.nativeEvent.text)}
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    viewForm: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 250,
        justifyContent: 'center',
    },
    viewInputs: {
        flexDirection: 'row',
    },
    picker:{
        left: 50,
    },
    input: {
        margin: 5,
        backgroundColor: colors.PRIMARY_COLOR,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        width: 100,
        marginRight: 5,
        marginBottom: 10,
        color: 'white',
        paddingHorizontal: 20,
    },
});
const picketSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30,
        backgroundColor: '#fff',
        marginLeft: -5,
        marginRight: -5,
    },
    inputAndroid: {
        margin: 5,
        fontSize: 16,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 8,
        color: '#fff',
        backgroundColor: colors.PRIMARY_COLOR,
    },
});