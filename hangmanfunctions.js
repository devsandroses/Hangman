let pickWord = function () {
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

    return words[Math.floor(Math.random() * words.length)];
  };

  let setupAnswerArray = function (word) {
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
      answerArray[i] = "_";
    }

    return answerArray;
  };

  let showPlayerProgress = function (answerArray) {
    alert(answerArray.join(" "));
  };

  let getGuess = function () {
    alert('Can you guess this word? Click OK to enter you guess!\n ' + answerArray.join(" "));
    return prompt("Enter the letter you're guessing:");
  };

  let updateGameState = function (guess, word, answerArray) {
    let appearances = 0;
    for (var j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        appearances++;
      }
    }

    return appearances;
  };

  let showAnswerAndCongratulatePlayer = function (answerArray) {
    showPlayerProgress(answerArray);
    alert("Good job! The answer was " + answerArray.join(""));
  };

  let word = pickWord();
  let answerArray = setupAnswerArray(word);
  let remainingLetters = word.length;

  while (remainingLetters > 0) { showPlayerProgress(answerArray); var guess = getGuess();
    if (guess === null) {
      break;
    } else if (guess.length !== 1) {
      alert("Please enter a single letter.");
    } else {
      var correctGuesses = updateGameState(guess, word, answerArray);
      remainingLetters -= correctGuesses;
    }
  }

  showAnswerAndCongratulatePlayer(answerArray);