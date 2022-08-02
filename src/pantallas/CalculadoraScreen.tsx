import React from 'react'
import { Text, View } from 'react-native';
import { BotonCalc } from '../comonents/BotonCalc';
import { styles } from '../theme/appTheme';
import { useCalculadora } from '../hooks/useCalculadora';



  export const CalculadoraScreen = () => {

    const{
      NumeroAnterior,
      numero,
      limpiar,
      positiviNegativo,
      btnDelete,
      btndividir,
      armarNumero,
      btnMultiplicar,
      btnRestar,
      btnSumar,
      calcular,
    } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {
        (NumeroAnterior !== '0') &&  (
          
           <Text style={styles.resultadoPequeno}>{NumeroAnterior}</Text>
           
        )
      }
     
      <Text 
         style={styles.resultado}
         numberOfLines={ 1 }
         adjustsFontSizeToFit
        >{numero}
      </Text>

      {/* fila de botones*/}

      <View style={styles.fila}>
        <BotonCalc texto="C" color="#9B9B9B" accion={limpiar} />
        <BotonCalc texto="+/-" color="#9B9B9B" accion={positiviNegativo} />
        <BotonCalc texto="del"color="#9B9B9B" accion={btnDelete} />
        <BotonCalc texto="/" color="#FF9427" accion={btndividir}  />

      </View>
      {/* fila de botones*/}

      <View style={styles.fila}>
        <BotonCalc texto="7" accion={armarNumero} />
        <BotonCalc texto="8" accion={armarNumero}  />
        <BotonCalc texto="9" accion={armarNumero} />
        <BotonCalc texto="x" color="#FF9427" accion={btnMultiplicar}  />

      </View>
      {/* fila de botones*/}

      <View style={styles.fila}>
        <BotonCalc texto="4" accion={armarNumero} />
        <BotonCalc texto="5" accion={armarNumero}  />
        <BotonCalc texto="6" accion={armarNumero} />
        <BotonCalc texto="-" color="#FF9427"  accion={btnRestar} />

      </View>
      {/* fila de botones*/}

      <View style={styles.fila}>
        <BotonCalc texto="1" accion={armarNumero} />
        <BotonCalc texto="2" accion={armarNumero}  />
        <BotonCalc texto="3" accion={armarNumero} />
        <BotonCalc texto="+" color="#FF9427"accion={btnSumar} />

      </View>

      {/* fila de botones*/}

      <View style={styles.fila}>
        <BotonCalc texto="0" accion={armarNumero} ancho />
        <BotonCalc texto="." accion={armarNumero} />
        <BotonCalc texto="=" color="#FF9427"  accion={calcular} />

      </View>
    </View>
  );
};

