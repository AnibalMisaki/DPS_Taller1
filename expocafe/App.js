/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity, Alert, Image} from 'react-native';
import Form from './src/components/Form';
import colors from './src/utils/colors';
import Result from './src/components/Result';
export default function App(){
  const [tamaño, setTamaño] = useState(null);
  const [cafe, setCafe] = useState(null);
  const [pago, setPago] = useState(null);
  const [cantidad, setCantidad] = useState(null);
  const [descuento, setDescuento] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  var tam, tipo, desapp;     

  const calculate = () => {
    reset();
    if (!tamaño) {
      Alert.alert("Error", "Añade el tamaño de tu bebida",[
        {
          text: "Ok",
        },
      ],)
    } else if (!cafe) {
      Alert.alert("Error", "Añade el tipo de bebida que deseas",[
        {
          text: "Ok",
        },
      ],)
    } else if (!pago) {
      Alert.alert("Error", "Añade el metodo de pago",[
        {
          text: "Ok",
        },
      ],)
    }else if(!cantidad){
      Alert.alert("Error", "Añade la cantidad de bebidas que deseas",[
        {
          text: "Ok",
        },
      ],)
    } 
    else {
      if(tamaño == "Pequeño"){
        tam = 1;
      }else if(tamaño == "Mediano"){
        tam = 1.5;
      }else if(tamaño == "Grande"){
        tam = 2;
      }
      if(cafe == "Mocha"){
        tipo = 2;
      }else if(cafe == "Te Chai"){
        tipo = 2.5;
      }else if(cafe == "Americano"){
        tipo = 1.5;
      }else if(cafe == "Frapper"){
        tipo = 3;
      }
      if(pago == "Efectivo"){
        setDescuento(0.15);
        desapp = ((tam + tipo) * cantidad) * 0.15;
      }else if(pago == "Credito"){
        setDescuento(0.05);
        desapp = ((tam + tipo) * cantidad) * 0.05;
      }
      setTotal((((tam + tipo) * cantidad) - desapp).toFixed(2));
    }
 };

  const reset = () => {
    setErrorMessage('');
    setTotal(null);
  };

  return(
    <>
      <StatusBar barStyle="light-content"/>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background} />
        <Text style={styles.titleApp}>Expo Cafe </Text>
       
        <Form
          setCafe={setCafe}
          setTamaño={setTamaño}
          setPago={setPago}
          setCantidad={setCantidad}
        />
      </SafeAreaView>
      <Result
          tamaño={tamaño}
          cafe={cafe}
          pago={pago}
          cantidad={cantidad}
          total={total}
          descuento={descuento}
          errorMessage={errorMessage}
        />
      <TouchableOpacity style={styles.button} onPress={calculate}>
        <Text style={styles.text} >Comprar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1} onPress={reset}>
        <Text style={styles.text} >Vaciar</Text>
      </TouchableOpacity>
    </>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    height: 290,
    alignItems: 'center',
  },
  button: {
      position: 'absolute',
        bottom: 0,
        width: '50%',
        backgroundColor: colors.PRIMARY_COLOR,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
  },
  button1: {
    position: 'absolute',
    borderLeftWidth: 1,
    borderLeftColor: "white",
      bottom: 0,
      width: '50%',
      backgroundColor: colors.PRIMARY_COLOR,
      height: 100,
      left: "50%",
      alignItems: 'center',
      justifyContent: 'center',
},
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 300,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  img:{
    width: 25,
    height: 25,
  },
});
