// document.getElementById('funz').innerHTML = "hello"

alert('Benvenuto in "MATRIX"');
alert("No scherzo è solo un esercizio XD")
var name = prompt("Qual'è il tuo nome?");
var cognome = prompt("Qual'è il tuo cognome?");
var color = prompt("Qual'è il tuo colore preferito?");
var number = 19;

document.getElementById('funz').innerHTML = name + cognome + color + number ;

var age = parseInt(prompt("quanti anni hai?"));
var yeartoday = 2020;
var by = yeartoday - age;

document.getElementById('nascita').innerHTML = "e questa è la tua data di nascita: " + by ;

document.getElementById('thanks').innerHTML = "Grazie per averci scelto! Buona giornata!"
