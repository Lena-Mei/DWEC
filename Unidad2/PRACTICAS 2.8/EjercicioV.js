'use strict'
let nombre, apellido, salario, edad, total;
nombre = prompt("Introduzca el nombre: ");
apellido = prompt("Introducta los dos apellidos: ");
salario= parseFloat(prompt ("Introduzca el valor del salario (con decimales): "));
edad = prompt("Introduza la edad: ");
if(salario <1000){
    if(edad<30){
        total=1100;
    }
    else if(edad>30 || edad<45)
    {
        total = salario * 1.03;
    }
    else{
        total = salario * 1.15;
    }
}
else if(salario >2000){
    total = salario;
}
else{
    if(edad>45){
        total=salario*1.3;
    }
    else{
        total = salario*1.1;
    }
}
alert('Datos del usuario: \n Nombre: ' + nombre + '\n Apellidos: ' + apellido + '\n Edad: ' + edad + '\n Salario Original: ' + salario + '\n Salario Final: ' + total.toFixed(2))
