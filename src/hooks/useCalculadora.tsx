import { useRef, useState } from 'react';

enum Operadores{
    suma, resta, multiplicar, dividir
  }

export const useCalculadora = () => {
  
    const [ NumeroAnterior, setNumeroAnterior] = useState('0');
    const [numero, setnumero] = useState('0');
    const ultimaOperacion = useRef<Operadores>();

    const limpiar = () => {
      setnumero('0');
      setNumeroAnterior('0');
    };

    const armarNumero = (numeroTexto: string) => {

      // NO aceptar aceptar doble punto
      if ( numero.includes('.') && numeroTexto === '.') {return;}

      if (numero.startsWith('0') || numero.startsWith('-0')) {
        
            //punto desimal
            if ( numeroTexto === '.') {
              setnumero( numero + numeroTexto);
            //Evaluar si es otro cero, y hay un punto
            } else if (numeroTexto === '0' && numero.includes('.')) {
              setnumero( numero + numeroTexto );
              //Evaluar si es diufernte dde cero y no tiene un punto}
            } else if (numeroTexto !== '0' && !numero.includes('.')){
              setnumero(numeroTexto);
              //Evitar 00.0

            } else if (numeroTexto === '0' && !numero.includes('.')) {
              setnumero( numero );
            } else {
              setnumero( numero + numeroTexto);
            }
           
      } else {
        setnumero(numero + numeroTexto);
      }
 
    };

    const positiviNegativo = () => {
          if (numero.includes('-')){
            setnumero(numero.replace('-', ''));
          } else {
            setnumero('-' + numero);
          }
    };


    const btnDelete = () =>{
            let negativo = '';
            let numTemp = numero;

            if (numero.includes('-')){
              negativo = '-';
              numTemp = numero.substr(1); //substr borra la primera posicion
            }
            if (numTemp.length > 1 ) {
              setnumero( negativo + numTemp.slice(0,-1));// slice bora la ultima posicion de los numeros
            } else {
              setnumero('0');
            }
    };
    
    const cambiarNumAnt = () => {
        if (numero.endsWith('.')) { 
          //endsWith verifica con que termina en valor dado
          setNumeroAnterior(numero.slice(0,-1));
        } else {
          setNumeroAnterior( numero );
        }

      setnumero('0');
    } 
    
    const btndividir = () => {
      cambiarNumAnt();
        ultimaOperacion.current = Operadores.dividir;
    }
    const btnMultiplicar = () => {
      cambiarNumAnt();
        ultimaOperacion.current = Operadores.multiplicar;
    }
    
    const btnRestar = () => {
      cambiarNumAnt();
        ultimaOperacion.current = Operadores.resta;
    }
    
    const btnSumar = () => {
      cambiarNumAnt();
      ultimaOperacion.current = Operadores.suma;
    }
    
    const calcular = () => {
      const num1 = Number(numero);
      const num2 = Number(NumeroAnterior);

      switch (ultimaOperacion.current) {
        case Operadores.dividir:
          setnumero( `${num2 / num1}`);
          break;
          case Operadores.multiplicar:
          setnumero( `${num1 * num2}`);
          break;
          case Operadores.resta:
          setnumero( `${num2 - num1}`);
          break;
          case Operadores.suma:
          setnumero( `${num1 + num2}`);
          break;
      
        default:
          break;
      }

      setNumeroAnterior('0');

    }
    return{
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
    }
}

