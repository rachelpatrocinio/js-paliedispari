console.log("JS-PALIEDISPARI");

// CHIEDERE ALL'UTENTE UNA PAROLA
const userWord = prompt("Inserisci una parola");
console.log(userWord);

// PRENDO OGNI LETTERA PRESENTE NELLA userWord E LO PUSHO IN UNA NUOVA VARIABILE
// 1a. CREO UNA VARIABILE VUOTA
const arrayUserWord = [];
for(let i = 0; i < userWord.length; i++){
    console.log(userWord[i]);
    const userWordIndex = userWord[i];
    arrayUserWord.push(userWordIndex);
}
console.log(arrayUserWord);

// 1b. CREO UN'ALTRA VARIABILE VUOTA PER AVERE LA userWord REVERSE
const arrayUserWordReversed = [];
for(let i = userWord.length - 1; i >= 0 ; i--){
    console.log(userWord[i]);
    const userWordIndexReversed = userWord[i];
    arrayUserWordReversed.push(userWordIndexReversed);
}
console.log(arrayUserWordReversed);

function isPalindrome(word1, word2){

    let result;
    // CONTROLLO SE OGNI LETTERA COMBACIA
    for (let i = 0; i < word1.length; i++){

        if (word1[i] !== word2[i]) {
            result = false;
        } else {
            result = true;
        }
    }
    if(result === false){
        console.log("The word is not Palindrome");
    } else{
        console.log("The word is Palindrome");
    }
    return result;
}


const finalResult = isPalindrome(arrayUserWord, arrayUserWordReversed);
console.log(finalResult);





