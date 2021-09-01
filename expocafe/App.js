/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View} from 'react-native';
import Form from './src/components/Form';
import colors from './src/utils/colors';
import Result from './src/components/Result';
import Footer from './src/components/Footer';
export default function App(){
  const [tamaño, setTamaño] = useState(null);
  const [cafe, setCafe] = useState(null);
  const [pago, setPago] = useState(null);
  const [cantidad, setCantidad] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  var tam, tipo, descuento;     

  useEffect(() => {
    if (tamaño && cafe && pago && cantidad) calculate();
    else reset();
  }, [tamaño, cafe, pago, cantidad]);
  const calculate = () => {
    reset();
    if (!tamaño) {
      setErrorMessage('Añade el tamaño de tu bebida');
    } else if (!cafe) {
      setErrorMessage('Añade el tipo de bebida que deseas');
    } else if (!pago) {
      setErrorMessage('Selecciona un metodo de pago');
    }else if(!cantidad){
      setErrorMessage('Añade la cantidad de bebidas que deseas');
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
        descuento = ((tam + tipo) * cantidad) * 0.15;
      }else if(pago == "Credito"){
        descuento = ((tam + tipo) * cantidad) * 0.05;
      }
      setTotal((((tam + tipo) * cantidad) - descuento).toFixed(2));
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
        <Text style={styles.titleApp}>Expo Cafe</Text>
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
        errorMessage={errorMessage}
      />
      <Footer calculate={calculate} />
    </>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    height: 290,
    alignItems: 'center',
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
});
