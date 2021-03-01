// 1. Chiedere all'utente la sua Mail

var email = [ "giovanni.giorgio@gmail.com", "mario.rossi@gmail.com", "a.giordano89@gmail.com", "ernesto.meda@gmail.com", "diego.armando@gmail.com"];

var utente = prompt("Benvenuto! Prima di inizare inserisci il tuo indirizzo email qui sotto");

console.log("La mail inserita dall'utente è " + utente);

var emailGiusta;

// 2. Confrontarla con le altre email

for (var i = 0; i < email.length; i++) {
  if (utente == email[i]) {
    console.log("Valido!")
    emailGiusta = 1;
  }
}

//3. Stampare un messaggio di sull'esito

if (emailGiusta == 1) {
  console.log("Puoi entrare");
  document.getElementById("messaggio").innerHTML = "Accesso Garantito"
  document.getElementById("disclaimer").innerHTML = "La tua mail è giusta e puoi proseguire con la navigazione."
} else {
  console.log("You shall not pass!");
  document.getElementById("messaggio").innerHTML = "You shall not pass!"
  document.getElementById("disclaimer").innerHTML = "La mail che hai inserito è errata, ricarica la pagina e prova con un altro indirizzo."
}
