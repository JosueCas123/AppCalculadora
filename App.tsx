
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { CalculadoraScreen } from './src/pantallas/CalculadoraScreen';
import { styles } from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar
      backgroundColor="black" // esto nos pone de color negro la barra 
      barStyle='light-content'
      />
      <CalculadoraScreen/>
    </SafeAreaView>
  );
};

export default App