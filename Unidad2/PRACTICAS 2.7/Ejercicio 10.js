'use strict'
let numOculto, num;
numOculto= prompt('Introduzca el numero: ');
num=prompt('Introduzca el numero oculto')
while(num!=numOculto){
    if(num<numOculto){
        alert('¡Te has quedado corto!');
    }
    else{
        alert('¡Te has pasado!');
    }
    num=prompt('Introduzca el numero oculto')
}
alert('¡¡Has adivinado el numero oculto!! ('+numOculto+')');