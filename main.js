/* traccia: L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */

// domandare all'utente pari o dispari

const user_choice = prompt('scegliere pari o dispari')
console.log(`l'utente ha scelto: ${user_choice}`);

// domandare all'utente un numero da 1 a 5

const user_number = Number(prompt('scegliere un numero da 1 a 5'))

if (user_number > 5 || user_number < 1){
    alert('puoi scegliere solo i numeri da 1 a 5')
}
else{
    console.log(`l'utente ha scelto il numero: ${user_number}`);
}

// generazione numero random da 1 a 5 per il computer con funzione

function generate_rnd_number(min, max){
    return rnd_number = Math.floor(Math.random() * (max - min +1)) +min;
}

const computer_number = generate_rnd_number(1, 5);

console.log(`il computer ha scelto il numero: ${computer_number}`);

// somma dei numeri con funzione

function get_sum (number1, number2){
    return sum = number1 + number2
}

const sum_number = get_sum (user_number, computer_number)

console.log(`la somma dei numeri è: ${sum_number}`);

// verifica pari o dispari con funzione

function is_even_number (number){
    
    if (number % 2 === 0){
        return 'pari' 
    }
    return 'dispari'
}
const result = is_even_number (sum_number)

if  (is_even_number (sum_number)){
    user_choice === result
    console.log('hai vinto');
}
else{
    console.log('hai perso');
}

