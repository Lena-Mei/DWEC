'use strict'
let num, total;
num = parseFloat(prompt("Introduzca un numero: "));
total = num;
while(num>0)
{
    num = parseFloat(prompt("Introduzca un numero: "));
    total += num;
}
alert('Total: ' + total)
