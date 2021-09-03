import React, { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
export default function Result(props) {
    const {tamaño, cafe, pago, cantidad, descuento, total, errorMessage} = props;
    return (
        <View style={styles.content}>
            {total && (
                <View style={styles.boxResult}>
                    <Text style={styles.title}>RESUMEN</Text>
                    <DataResult title="Tamaño:" value={`${tamaño}`} />
                    <DataResult title="Tipo de bebida:" value={`${cafe}`} />
                    <DataResult title="Forma de pago:" value={`${pago}`} />
                    <DataResult title="Cantidad solicitada:" value={`${cantidad}`} />
                    <DataResult title="Descuento %:" value={`${descuento * 100}%`} />
                    <DataResult title="Total a pagar:" value={`$${total} `}/>
                </View>
            )}
            <View>
            <Text style={styles.error}>{errorMessage}</Text>
            </View>
        </View>
    );
}

function DataResult(props) {
    const {title, value} = props;
    return (
        <View style={styles.value}>
            <Text>{title}</Text>
            <Text>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        marginHorizontal: 40,
    },
    boxResult: {
        padding: 30,
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    value: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    error: {
        textAlign: 'center',
        color: '#f00',
        fontWeight: 'bold',
        fontSize: 20,
    },
});