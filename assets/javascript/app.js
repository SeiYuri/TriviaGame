$(document).ready(function () {

  var triviaQuestions = [

    {
      question: "What was Pixar's first short called?",
      answerList: ["The Adventures of André & Wally B.", "Luxo Jr.", "Tin Toy", "Geri's Game"],
      answer: "0"
    },

    {
      question: "Which movie was expected to bomb at the box office, but turned out to be extremely successful?",
      answerList: ["Peter Pan", "The Black Cauldron", "Snow White and the Seven Dwarfs", "Frozen"],
      answer: "2"
    },
    {
      question: "The first non-human creature to speak in all of Disney animated movie history was a:",
      answerList: ["a cricket", "a dog", "a mouse", "a rabbit"],
      answer: "0"
    },
    {
      question: "Which movie was Michael Eisner's (former CEO of Disney) favorite?",
      answerList: ["The Arisocats", "The Hunchback of Notre Dame", "Sword in the Stone", "A Goofy Movie"],
      answer: "1"
    },
    {
      question: "Which film was released to counter backlash that Disney films were becoming 'too dark'?",
      answerList: ["Mulan", "Toy Story", "Tarzan", "Hercules"],
      answer: "3"
    },
    {
      question: "What is Pixar's longest film?",
      answerList: ["Coco", "Monster's Inc.", "Toy Story 3", "Cars"],
      answer: "3"
    },
    {
      question: "Which movie was originally going to be called 'Kingdom of the Sun'?",
      answerList: ["Brave", "The Emperor's New Groove", "The Jungle Book", "Aladdin"],
      answer: "1"
    },
    {
      question: "Which film was nominated for the 100 Funniest American Movies list (but didn't actually win)?",
      answerList: ["Aladdin", "Ratatouille", "Wreck It Ralph", "Chicken Little"],
      answer: "0"
    },
    {
      question: "Which of these movies takes place in America?",
      answerList: ["Tangled", "Brother Bear", "Monster's University", "Beauty and the Beast"],
      answer: "1"
    },
    {
      question: "Which is the longest Disney movie?",
      answerList: ["Moana", "The Good Dinosaur", "Zootopia", "101 Dalmations"],
      answer: "2"
    },
    {
      question: "A plushie of Dumbo is featured in which film?",
      answerList: ["Lilo and Stitch", "The Princess and the Frog", "Inside Out", "Dumbo"],
      answer: "0"
    },
    {
      question: "This is the last Disney/Pixar film to be released on VHS:",
      answerList: ["Moana", "WALL-E", "Up", "The Incredibles"],
      answer: "3"
    },
    {
      question: "Which film did Walt Disney himself intend to create after Snow White and the Seven Dwarfs?",
      answerList: ["Beauty and the Beast", "Bambi", "The Little Mermaid", "Fantasia"],
      answer: "2"
    },
    {
      question: "In 1980, development for a film called 'High Score' began. In 1990 the name was changed to 'Joe Jump'. The name changed once again in the 2000s and the film was released as:",
      answerList: ["Wreck It Ralph", "Bolt", "Big Hero 6", "The Incredibles"],
      answer: "0"
    },
    {
      question: "Which film misspells the original creator's name in the opening credits?",
      answerList: ["Alice in Wonderland", "The Jungle Book", "Lady and the Tramp", "Pinocchio"],
      answer: "0"
    },
    {
      question: "This is the first film since 'The Lion King' to have multiple songs nominated for Best Original Song at the Academy Awards.",
      answerList: ["Pocahontas", "The Princess and the Frog", "Cinderella", "Frozen"],
      answer: "1"
    }
  ]

  // -------------------------Song Files------------------------- //

  var oops = new Audio('./assets/sounds/oops.mp3');
  var hotdog = new Audio('./assets/sounds/hotdog.mp3');
  var letsgo = new Audio('./assets/sounds/herewego.mp3');
  var waiting = new Audio('./assets/sounds/waiting.mp3');

  // ------------------------------------------------------------- //


  // -------------------------Gif Holder------------------------- //

  var gifArray = ['question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7', 'question8', 'question9', 'question10', 'question11', 'question12', 'question13', 'question14', 'question15', 'question16'];

  // ------------------------------------------------------------- //


  // -------------------------Variable Holder------------------------- //

  var currentQuestion 
  var correctAnswer
  var incorrectAnswer
  var unanswered
  var seconds
  var time
  var answered
  var userAnswer

  // ------------------------------------------------------------- //

  // -------------------------Variable Holder------------------------- //

  var messages = {
    correct: "Hot dog! Great job, pal!",
    incorrect: "Uh... not exactly.",
    outOfTime: "Oops, out of time!",
    finalMessage: "Here's Your Score:"
  }

  // ------------------------------------------------------------- //

  $("#start").on('click', function () {
    newGame();
  });

  $('#startOverBtn').on('click', function () {
    $(this).hide();
    newGame();
  });

  function newGame() {
    $("#start").hide();
    $(".mickey").hide();
    $("#instructions").hide();
    letsgo.play();

    $('#finalMessage').empty();
    $('#correctAnswers').empty();
    $('#incorrectAnswers').empty();
    $('#unanswered').empty();

    currentQuestion = 0;
    correctAnswer = 0;
    incorrectAnswer = 0;
    unanswered = 0;

    newQuestion();
  }

  function newQuestion() {
    $('#message').empty();
    $('#correctedAnswer').empty();
    $('#gif').empty();
    answered = true;

    $('.question').html('<h3>' + triviaQuestions[currentQuestion].question + '</h3>');

    for (var i = 0; i < 4; i++) {
      var choices = $('<div>');
      choices.text(triviaQuestions[currentQuestion].answerList[i]);
      choices.attr({ 'data-index': i });
      choices.addClass('thisChoice');
      $('.answerList').append(choices);
    }
    countdown();
    $('.thisChoice').on('click', function () {
      userAnswer = $(this).data('index');
      clearInterval(time);
      answerPage();
    });
  }

  function countdown() {
    seconds = 5;
    $('#timerStart').html("Seconds Remaining: " + seconds);
    answered = true;
    time = setInterval(showCountdown, 2000);
  }

  function showCountdown() {
    seconds--;
    $('#timerStart').html("Seconds Remaining: " + seconds);
    if (seconds < 1) {
      waiting.play();
      clearInterval(time);
      answered = false;
      answerPage();
    }
  }

  function answerPage() {
    $('.thisChoice').empty();
    $('.question').empty();

    var rightAnswerText = triviaQuestions[currentQuestion].answerList[triviaQuestions[currentQuestion].answer];
    var rightAnswerIndex = triviaQuestions[currentQuestion].answer;
    $('#gif').html('<img src = "assets/images/' + gifArray[currentQuestion] + '.gif" width = "300px">');

    if ((userAnswer == rightAnswerIndex) && (answered == true)) {
      hotdog.play();
      correctAnswer++;
      $('#message').html(messages.correct);
    } else if ((userAnswer != rightAnswerIndex) && (answered == true)) {
      oops.play();
      incorrectAnswer++;
      $('#message').html(messages.incorrect);
      $('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
    } else {
      unanswered++;
      $('#message').html(messages.outOfTime);
      $('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
      answered = true;
    }

    if (currentQuestion == (triviaQuestions.length - 1)) {
      setTimeout(scoreboard, 3000)
    } else {
      currentQuestion++;
      setTimeout(newQuestion, 5000);
    }
  }

  function scoreboard() {
    $('#timeLeft').empty();
    $('#message').empty();
    $('#correctedAnswer').empty();
    $('#gif').empty();

    $('#finalMessage').html(messages.finalMessage);
    $('#correctAnswers').html("Correct Answers: " + correctAnswer);
    $('#incorrectAnswers').html("Incorrect Answers: " + incorrectAnswer);
    $('#unanswered').html("Unanswered: " + unanswered);
    $('#startOverBtn').addClass('reset');
    $('#startOverBtn').show();
    $('#startOverBtn').html('Play Again?');
  }

}); // <--- End of JavaScript