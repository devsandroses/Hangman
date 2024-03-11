let words = [
    'ocean',
    'hummingbird',
    'love',
    'pickleball',
    'angel',
    'chocolate',
    'faith',
    'puppy',
    'redeemed'
];

let word = words[Math.floor(Math.random()* words.length)]; 
   
let answer = [];

for(i = 0; i < word.length; i++){
    answer[i] = '_';
} 

let rems = word.length;

let maxim = 20;

while(rems > 0 && maxim > 0) {
    
    alert('Can you guess this word? Click OK to enter you guess!\n ' + answer.join(" "));
    
    let guess = prompt("Enter the letter you're guessing:");

    if(guess === null){

        break;

    } else if (guess.length !== 1){

        alert('Please enter a single letter.')

    }  else {

        maxim--;

        guess = guess.toLowerCase()

        for(j = 0; j < word.length; j++){

            if(word[j] === guess && answer[j] === "_"){

                answer[j]=guess;

                rems--;
            }
        }
    }
}

alert(answer.join(" "));

alert('Great job! The answer was ' + word )   
    