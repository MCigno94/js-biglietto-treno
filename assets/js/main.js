/* 
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65. 
*/

// Chiedere il numero di km da pecorrere
const kmTraveled = prompt("How many km do you want to travel?");

// - impostare i limiti della variabile "kmTraveled" - nessuna stringa e nessun numero minore di 0
if (kmTraveled < 0 || isNaN(kmTraveled)) {
    alert("Choice not available");
}

// Chiedere l'età del passeggero
const yourAge = prompt("How old are you?");

// - impostare i limiti della variabile "yourAge" - nessuna stringa e nessun numero minore di 0
if (yourAge < 0 || yourAge > 100 || isNaN(yourAge)) {
    alert("Choice not available");
}

// impostare tariffa in € per il chilometraggio
let kmRate = 0.21;
const kmPrice = kmTraveled * kmRate;

// - stampo il costo del viaggio in base ai km
/* console.log("Cost of the trip based on km: " + kmPrice + "€"); */

// impostare sconti in base all'età
if (yourAge < 18) {
    // applico uno sconto del 20%
    const ticketPrice = kmPrice * 0.8;
    console.log("Il costo del suo biglietto è: " + ticketPrice.toFixed(2) + "€");
} else if (yourAge >= 65) {
    // applico uno sconto del 40%
    const ticketPrice = kmPrice * 0.6;
    console.log("Il costo del suo biglietto è: " + ticketPrice.toFixed(2) + "€");
} else {
    console.log("Il costo del suo biglietto è: " + kmPrice.toFixed(2) + "€");
}


// stampare il costo del biglietto