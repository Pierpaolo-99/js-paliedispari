/* traccia: L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */

// domandare all'utente pari o dispari

const user_choice = prompt('scegliere pari o dispari')

// domandare all'utente un numero da 1 a 5

const user_number = Number(prompt('scegliere un numero da 1 a 5'))

// generazione numero random da 1 a 5 per il computer con funzione

function generate_rnd_number(min, max){
    return number = Math.floor(Math.random() * (max - min +1)) +min;
}

const computer_number = generate_rnd_number(1, 5);

console.log(computer_number);


// somma dei numeri con funzione

// verifica pari o dispari con funzione

// stampa del vincitore