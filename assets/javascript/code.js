// This is the ACTUAL code! // 


$(document).ready(function () {

// List Variables Here //

var display = $("#trivia-container");
var timerStart = 20;
var gameContainer = $('#trivia-container');
var gameFinished = false;
var correct = 0;
var incorrect = 0; 

// Variables List Ends //

// Trivia Questions Start Here // 

var triviaQuestions = [
    {
     question: "What was Pixar's first short called?",
     answers: {
       a: "The Adventures of André & Wally B.",
       b: "Luxo Jr.",
       c: "Tin Toy",
       d: "Geri's Game"
      },
      correctAnswer: "a"
    },
    {
      question: "Which movie was expected to bomb at the box office, but turned out to be extremely successful?",
      answers: {
        a: "Peter Pan",
        b: "The Black Cauldron",
        c: "Snow White and the Seven Dwarfs",
        d: "Frozen"
      },
      correctAnswer: "c"
    },
    {
        question: "The first non-human character to speak in all of Disney animated movie history was a:",
        answers: {
          a: "a cricket",
          b: "a dog",
          c: "a mouse",
          d: "a rabbit"
        },
        correctAnswer: "a"
      },
      {
        question: "Which movie was Michael Eisner's (former CEO of Disney) favorite?",
        answers: {
          a: "The Arisocats",
          b: "The Hunchback of Notre Dame",
          c: "Sword in the Stone",
          d: "A Goofy Movie"
        },
        correctAnswer: "b"
      },
      {
        question: "Which film was released to counter backlash that Disney films were becoming 'too dark'?",
        answers: {
          a: "Mulan",
          b: "Toy Story",
          c: "Tarzan",
          d: "Hercules"
        },
        correctAnswer: "d"
      },
      {
        question: "What is Pixar's longest film?",
        answers: {
          a: "Coco",
          b: "Monster's Inc.",
          c: "Toy Story 3",
          d: "Cars"
        },
        correctAnswer: "d"
      },
      {
        question: "Which movie was originally going to be called 'Kingdom of the Sun'?",
        answers: {
          a: "Brave",
          b: "The Emperor's New Groove",
          c: "The Jungle Book",
          d: "Aladdin"
        },
        correctAnswer: "b"
      },
      {
        question: "Which film was nominated for the 100 Funniest American Movies list?",
        answers: {
          a: "Aladdin",
          b: "Ratatouille",
          c: "Wreck It Ralph",
          d: "Chicken Little"
        },
        correctAnswer: "a"
      },
      {
        question: "Which of these movies takes place in America?",
        answers: {
          a: "Tangled",
          b: "Brother Bear",
          c: "Monster's University",
          d: "Beauty and the Beast"
        },
        correctAnswer: "b"
      },
      {
        question: "Which is the longest Disney movie?",
        answers: {
          a: "Moana",
          b: "The Good Dinosaur",
          c: "Zootopia",
          d: "101 Dalmations"
        },
        correctAnswer: "c"
      },
      {
        question: "A plushie of Dumbo is featured in which film?",
        answers: {
          a: "Lilo and Stitch",
          b: "The Princess and the Frog",
          c: "Inside Out",
          d: "Cinderella"
        },
        correctAnswer: "a"
      },
      {
        question: "This is the last Disney/Pixar film to be released on VHS:",
        answers: {
          a: "Moana",
          b: "WALL-E",
          c: "Up",
          d: "The Incredibles"
        },
        correctAnswer: "d"
      },
      {
        question: "Which film did Walt Disney himself intend to create after Snow White and the Seven Dwarfs?",
        answers: {
          a: "Beauty and the Beast",
          b: "Bambi",
          c: "The Little Mermaid",
          d: "Fantasia"
        },
        correctAnswer: "c"
      },
      {
        question: "In 1980, development for a film called 'High Score' began. In 1990 the name was changed to 'Joe Jump'. The name changed once again in the 2000s and the film was released as:",
        answers: {
          a: "Wreck It Ralph",
          b: "Bolt",
          c: "Big Hero 6",
          d: "The Incredibles"
        },
        correctAnswer: "a"
      },
      {
        question: "Which film misspells the original creator's name in the opening credits?",
        answers: {
          a: "Alice in Wonderland",
          b: "The Jungle Book",
          c: "Lady and the Tramp",
          d: "Pinocchio"
        },
        correctAnswer: "a"
      }
    ];

    var questionIndex = 0;
    var questionArray = [triviaQuestions[0], triviaQuestions[1], triviaQuestions[2], triviaQuestions[3], triviaQuestions[4], triviaQuestions[5], triviaQuestions[6], triviaQuestions[7], triviaQuestions[8], triviaQuestions[9], triviaQuestions[10], triviaQuestions[11], triviaQuestions[12], triviaQuestions[13], triviaQuestions[14]];

    function renderQuestions() {


        $('#playerScore').text(userTotal)





      //  if (questionIndex <= (questionArray.length) - 1) {
            $("#trivia-question").text = triviaQuestions[0];
    //    }
      //  else {
        //    $("#trivia-container").innerHTML = "Game Over!";
   //     }
    }

    // On Click Functions // 

    $(document).on('click', '#start', function() {
        //gameBegins();
        renderQuestions();
      });

     // $(document).on('click', '#correctAnswer', function() {
        
     // });

      $(document).on('click', '#play-again', function() {
        gameReset();
      });


      // This is the code for our game. // 

      function gameBegins() {
        $("button").remove("#start");
      }















}) // <--- This goes at the end of the game. 