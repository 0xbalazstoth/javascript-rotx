let alphabet = "abcdefghijklmnopqrstuvwxyz";
let fullAlphabet = alphabet + alphabet + alphabet;
let S = "yeeees";
let X = 20;

function encrypt(plaintext, shift) {
    shift = (shift % alphabet.length);
    let encrypted = "";

    for (let i = 0; i < plaintext.length; i++) {
        let letter = plaintext[i];
        let upper = (letter == letter.toUpperCase());
        letter = letter.toLowerCase();

        let alphabetIndex = alphabet.indexOf(letter);
        if(alphabetIndex == -1) {
            encrypted += letter;
        } else {
            alphabetIndex = (alphabetIndex + shift) + alphabet.length;
            let nextLetter = fullAlphabet[alphabetIndex];

            if(upper) {
                nextLetter = nextLetter.toUpperCase();
            }
            encrypted += nextLetter;
        }
    }
    return encrypted;
}

let encrypted = encrypt(S, X);
console.log(encrypted);