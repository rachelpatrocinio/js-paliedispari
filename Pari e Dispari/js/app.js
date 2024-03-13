console.log("JS-PARI E DISPARI");

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// Consigli del giorno
// Scriviamo sempre in italiano i passaggi che vogliamo fare
// Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

const evenOdd = prompt("Pari o Dispari?");
console.log(evenOdd);

const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log(userNumber, "User Number");

if(userNumber <= 5 && 
    userNumber > 0 && 
    evenOdd === "pari" || evenOdd === "dispari"){
        
        const randomNum = random();
        //console.log(randomNum, "Random Number");
        
        const sum = userNumber + randomNum;
        console.log(sum,"Sum");
        
        const verification = isEvenOdd(sum)
        //console.log(verification);
        
        if(evenOdd === "pari" && verification === true){
            console.log("Hai Vinto!");
        } else if (evenOdd === "dispari" && verification === false){
            console.log("Hai Vinto!");
        } else{
            console.log("Hai Perso!");
        }
}
else{
    alert("error");
}





function random(){
    const randomNumber = parseInt(Math.floor(Math.random()*5)+1);
    console.log(randomNumber, "Random Number");
    return randomNumber;
}

function isEvenOdd(num){
    if(num % 2 === 0){
        console.log("Il numero è pari");
        return true;
    } else{
        console.log("Il numero è dispari");
        return false;
    }
}