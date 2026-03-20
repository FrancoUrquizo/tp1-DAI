
import { getCurrency ,getCurrencyList     } from 'currency-map-country';

let monedaDelPais, codigoPais;
codigoPais = 'ARS';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);
codigoPais = 'UZA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

function obtenerMoneda(codigoPais) {
    const moneda = getCurrency(codigoPais) ;
   

if (moneda) {
        return moneda.name;
    } else {
       
        return 'Moneda no encontrada';
    }

}
