let text, num, total, i;
num=prompt('Introduzca el numero al que quieras ver su factorial: ');
i=1;
total=1;
text="El factorial de " + num + ": ";
while(i<=num){
    text+= i + " * ";
    total *= i;
    i++;
}
alert(text + " = " + total);