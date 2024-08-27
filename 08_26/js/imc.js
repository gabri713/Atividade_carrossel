'use scrict'; // impedir o uso de variaveis não declaradas
let peso;
let altura;
let imc;

peso = prompt('Digite seu peso em quilos: ');
peso = parseFloat(peso) ;
console.log(peso);

altura = prompt('Digite sua altura em metros: ');
altura = parseFloat(altura) ;
console.log(altura);

imc = peso / (altura * altura);

console.log(imc);

if (imc<=16.9){
    console.log('muito abaixo do peso')
} else if(imc<18.4){
    console.log('abaixo do peso')
}else if(imc<24.9){
    console.log('peso normal')
}else if(imc<29.9){
    console.log('acima do peso') 
}else if(imc<34.9){
    console.log('Obesidade grau 1')   
}else if(imc<40){
    console.log('Obesidade grau 2') 
}else{
    console.log('Obesidade grau 3')
}           
