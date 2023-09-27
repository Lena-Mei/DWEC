'use strict'
let mes, esBisiesto;
mes=parseFloat(prompt('Introduzca el numero del mes: '));

switch(mes){
    case 1: 
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        alert('Este mes tiene 31 dias.')
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        alert('Este mes tiene 30 dias.')
        break;
    case 2:
        esBisiesto=prompt('¿El mes de Febrero es bisiesto? Si/No');
        if(esBisiesto=='Si'){
            alert('Este mes tiene 29 dias.')
        }
        else{
            alert('El mes tiene 28 dias.')
        }
        break;
    default:
        alert('No existe un mes con ese numero')
}

