// 1. Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
alert("Benvenuto nel Gioco dei dadi, premi OK e tira il tuo dado contro il computer.")

var numero1 = Math.floor(Math.random() * 6) + 1;

var numero2 = Math.floor(Math.random() * 6) + 1;

console.log(numero1);

console.log(numero2);

document.getElementById("numero1").innerHTML = numero1;

document.getElementById("numero2").innerHTML = numero2;

// 2. Stabilire il vincitore, in base a chi fa il punteggio più alto.

if (numero1 > numero2) {
  console.log("Hai vinto, il tuo numero è " + numero1 + " il numero del computer è " + numero2);
  document.getElementById("risultato").innerHTML = "Hai vinto!";
}

if (numero1 < numero2) {
  console.log("Hai perso, il tuo numero è " + numero1 + " il numero del computer è " + numero2);
  document.getElementById("risultato").innerHTML = "Hai perso!";
}

if (numero1 == numero2) {
  console.log(" Pareggio! Il tuo numero è " + numero1 + " il numero del computer è " + numero2);
  document.getElementById("risultato").innerHTML = "Hai pareggiato!"
}
