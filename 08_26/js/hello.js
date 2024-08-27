"use strict"; // Toda variavel a ser usada deve ser declarada
// Esses são os primeiros comandos de Javascript
/*
Abaixo teremos as declarações de variaveis
const
let
var
*/


/* Na declaração de variaveis em javascript usando var é possivel
redeclarar uma variavel*/
var nome = 'Ramon de Hollanda';
var nome = 'SENAI';

console.log(nome);

let curso = 'DDS';
// let curso = 'Banco de Dados'; // O uso de let impede a redeclaração de variaveis


let nota1 = 5;
// let nota = 10;

console.log(nota1);

// Tipos de variaveis do Javascript
let texto = 'Aula de Javascript';
console.log(texto);
let decimal = 20.8;
console.log(decimal);
let booleano = true;
console.log(booleano);

let n1 = '10';
let n2 = 5;
console.log(n1+n2);

n1 = parseInt(n2); //No Javascript é possivel fazer reuso de variaveis inclusive
console.log(n1+n2);

let dia = 'Segunda';
let saudacao = 'Boa Noite';

console.log(dia+saudacao);
console.log(dia,saudacao);



