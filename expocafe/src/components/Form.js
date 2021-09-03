import React from "react";
import {StyleSheet, TextInput,Text, View, TouchableOpacity} from 'react-native';
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
                    {label: 'Pequeño $1.00', value: "Pequeño"},
                    {label: 'Mediano $1.50', value: "Mediano"},
                    {label: 'Grande "2.00', value: "Grande"},
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
                    {label: 'Mocha $2.00', value: "Mocha"},
                    {label: 'Te Chai $2.50', value: "Te Chai"},
                    {label: 'Americano $1.50', value: "Americano"},
                    {label: 'Frapper $3.00', value: "Frapper"},
                ]}
            />
             
                
            <View style={styles.viewInputs}>
                <View style={styles.picker} >
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
                </View>
                <TextInput
                    placeholder="Cantidad"
                    placeholderTextColor="white"
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
        width: "60%"
    },
    input: {
        margin: 5,
        backgroundColor: colors.PRIMARY_COLOR,
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