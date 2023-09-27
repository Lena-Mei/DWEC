'use strict'
let num1, num2, operador, total;
num1 = parseFloat(prompt("Introduzca el primer numero a operar: "));
num2 = parseFloat(prompt("Introduzca el segundo numero a operar: "));
operador= prompt("A continuacion introduzca el operador (+, -, *, /): ");
switch(operador){
    case "+":
        total= num1 + num2;
        alert('Solucion: ' + num1 + '+'+ num2 + ' = ' + total)
    break;
    case "-":
        total= num1 - num2;
        alert('Solucion: ' + num1 + '-'+ num2 + ' = ' + total)
    break;
    case "*":
        total = num1*num2;
        alert('Solucion: ' + num1 + '*'+ num2 + ' = ' + total)
    break;
    case "/":
        total = num1 / num2;
        alert('Solucion: ' + num1 + '/'+ num2 + ' = ' + total)
    break;
}