'use strict'
let edad, ciudad;
edad = prompt("Introduzca la edad: ");
ciudad = prompt("Introduca la ciudad: ");
if((edad>=18 && edad<=35) && ciudad=='Alicante')
{
    alert('El usuario introducido puede acceder al carnet de empresarios emrpendedores.')
}
else{
    alert('El usuario introducido no cumple con los requisitos.')
}