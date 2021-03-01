// 1. Chiedere all'utente la sua Mail

var email = [ "giovanni.giorgio@gmail.com", "mario.rossi@gmail.com", "a.giordano89@gmail.com", "ernesto.meda@gmail.com", "diego.armando@gmail.com"];

var utente = prompt("Inserisci la tua mail");

var emailGiusta;

// 2. Confrontarla con le altre email

for (var i = 0; i < email.length; i++) {
  console.log(email[i]);
  if (utente == email[i]) {
    console.log("Valido!")
    emailGiusta = 1;
  }
}

//3. Stampare un messaggio di sull'esito

if (emailGiusta == 1) {
  console.log("Puoi entrare");
} else {
  console.log("You shall not pass!");
}
