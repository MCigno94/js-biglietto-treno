/* 
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65. 
*/

// Chiedere il numero di km da pecorrere
const kmTraveled = prompt("How many km do you want to travel?");
const yourAge = prompt("How old are you?");

// impostare i limiti della variabile "kmTraveled" - nessuna stringa e nessun numero minore di 0
if (kmTraveled < 0 || isNaN(kmTraveled)) {
    alert("Choice not available");
}

// impostare i limiti della variabile "yourAge" - nessuna stringa e nessun numero minore di 0
if (yourAge < 0 || isNaN(yourAge)) {
    alert("Choice not available");
}

// Chiedere l'età del passeggero

// impostare tariffa per il chilometraggio

// impostare sconti in base all'età

// stampare il costo del biglietto