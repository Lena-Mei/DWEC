'use strict'
let num, esPar, texto;
texto="";
num = parseFloat(prompt('Introduzca el numero:'));
esPar= (num%2==0 || num==0) ? "par" : "impar";
if(num%3==0 && num%5==0){
    texto+= "y es multiplo de 3 y de 5."
}
else if(num%5==0){
    texto += "y es multiplo de 5."
}
else if(num%3==0){
    texto +="y es multiplo de 3."
}
alert(`El numero introducido es ${esPar} `+ texto)