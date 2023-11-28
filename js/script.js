let number = 100;
console.log(number);

const PI = 3.14;
console.log(PI);

// PI = 3.1416 - Errore

let radius = 8;
let circle = radius * 2 * PI;
console.log(circle);

/*
 * 'name' è deprecato
 * use nome to avoid this warning
*/
let name = "Carlo";
name = "Marco";
console.log(name);

let greet = "Ciao, Mondo!";
console.log(greet);

/* Non è possibile dichiarare di nuovo la variabile con ambito blocco 'greet'
* let greet = "Come stai, Mondo?"
* console.log(greet)
*/

// First Method - Concatenazione
// greet += " Come stai?"
// console.log(greet)

// Second Method - Template Literal
greet = `${greet} Come stai?`;
console.log(greet);

let num1 = 56, num2 = 347;
let comparison;

// let comparison = num1 > num2 ? num1 : num2;

if (num1 > num2) {
    comparison = num1;   
} else {
    comparison = num2;
}

console.log(comparison);

let stringa1 = "Hello";
let stringa2 = "Hello";

if (stringa1 == stringa2) {
    comparison = true
} else {
    comparison = false
}

// Stampare il risultato del confronto sulla console
console.log(comparison);

let num = 5
comparison = false;

if (num == '10') {
    comparison = true;
}

console.log(comparison)

for (let i = 1; i <= 42; i++) {
    console.log(i)
}

for (let i = 42; i >= 1; i--) {
    console.log(i);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numbers)

const fruits = ["mela", "banana", "pesca", "pera", "albicocca", "mango", "kiwi", "papaya"]
console.log(fruits.length)

let numFib = parseInt(prompt('Quanti numeri...'))
let a = 0, b = 1, c;

c = a + b;

while (c <= numFib) {
    console.log(c);

    a = b;
    b = c
    c = a + b
}

function helloWorld () {
    alert("Hello world");
}