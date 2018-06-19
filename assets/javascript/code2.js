// This is the TEST code. // 

$(document).ready(function () {

  var triviaQuestions = [

    {
      "question": "What was Pixar's first short called?",

      "option1": "The Adventures of André & Wally B.",
      "option2": "Luxo Jr.",
      "option3": "Tin Toy",
      "option4": "Geri's Game",

      "answer": "a"
    },

    {
      "question": "Which movie was expected to bomb at the box office, but turned out to be extremely successful?",

      "option1": "Peter Pan",
      "option2": "The Black Cauldron",
      "option3": "Snow White and the Seven Dwarfs",
      "option4": "Frozen",

      "answer": "c"
    },
    {
      "question": "The first non-human creature to speak in all of Disney animated movie history was a:",

      "option1": "a cricket",
      "option2": "a dog",
      "option3": "a mouse",
      "option4": "a rabbit",

      "answer": "a"
    },
    {
      "question": "Which movie was Michael Eisner's (former CEO of Disney) favorite?",

      "option1": "The Arisocats",
      "option2": "The Hunchback of Notre Dame",
      "option3": "Sword in the Stone",
      "option4": "A Goofy Movie",

      "answer": "b"
    },
    {
      "question": "Which film was released to counter backlash that Disney films were becoming 'too dark'?",

      "option1": "Mulan",
      "option2": "Toy Story",
      "option3": "Tarzan",
      "option4": "Hercules",

      "answer": "d"
    },
    {
      "question": "What is Pixar's longest film?",

      "option1": "Coco",
      "option2": "Monster's Inc.",
      "option3": "Toy Story 3",
      "option4": "Cars",

      "answer": "d"
    },
    {
      "question": "Which movie was originally going to be called 'Kingdom of the Sun'?",

      "option1": "Brave",
      "option2": "The Emperor's New Groove",
      "option3": "The Jungle Book",
      "option4": "Aladdin",

      "answer": "b"
    },
    {
      "question": "Which film was nominated for the 100 Funniest American Movies list?",

      "option1": "Aladdin",
      "option2": "Ratatouille",
      "option3": "Wreck It Ralph",
      "option4": "Chicken Little",

      "answer": "a"
    },
    {
      "question": "Which of these movies takes place in America?",

      "option1": "Tangled",
      "option2": "Brother Bear",
      "option3": "Monster's University",
      "option4": "Beauty and the Beast",

      "answer": "b"
    },
    {
      "question": "Which is the longest Disney movie?",

      "option1": "Moana",
      "option2": "The Good Dinosaur",
      "option3": "Zootopia",
      "option4": "101 Dalmations",

      "answer": "c"
    },
    {
      "question": "A plushie of Dumbo is featured in which film?",

      "option1": "Lilo and Stitch",
      "option2": "The Princess and the Frog",
      "option3": "Inside Out",
      "option4": "Cinderella",

      "answer": "a"
    },
    {
      "question": "This is the last Disney/Pixar film to be released on VHS:",

      "option1": "Moana",
      "option2": "WALL-E",
      "option3": "Up",
      "option4": "The Incredibles",

      "answer": "d"
    },
    {
      "question": "Which film did Walt Disney himself intend to create after Snow White and the Seven Dwarfs?",

      "option1": "Beauty and the Beast",
      "option2": "Bambi",
      "option3": "The Little Mermaid",
      "option4": "Fantasia",

      "answer": "c"
    },
    {
      "question": "In 1980, development for a film called 'High Score' began. In 1990 the name was changed to 'Joe Jump'. The name changed once again in the 2000s and the film was released as:",

      "option1": "Wreck It Ralph",
      "option2": "Bolt",
      "option3": "Big Hero 6",
      "option4": "The Incredibles",

      "answer": "a"
    },
    {
      "question": "Which film misspells the original creator's name in the opening credits?",

      "option1": "Alice in Wonderland",
      "option2": "The Jungle Book",
      "option3": "Lady and the Tramp",
      "option4": "Pinocchio",

      "answer": "a"
    }
  ]

  // Song Files // 

  var oops = new Audio('./assets/sounds/oops.mp3');
  var hotdog = new Audio('./assets/sounds/hotdog.mp3');
  var letsgo = new Audio('./assets/sounds/herewego.mp3');

  // - - - - - - //

  var currentQuestion = 0;
  var score = 0;
  var totalQuestions = triviaQuestions.length;

  var container = $("#trivia-container");
  var questionEl = $("#trivia-question");

  var opt1 = $("#opt1");
  var opt2 = $("#opt2"); 
  var opt3 = $("#opt3"); 
  var opt4 = $("#opt4");

  var nextButton = $("#nextQuestion");
  var resultContainer = $("#result");


  $(document).on('click', '#start', function () {
    $("button").remove("#start");
    $(".mickey").hide();
    $("#timerStart").show();
    letsgo.play();
   // setTimeout(myFunction, 3000);
   
  });

  function loadQuestion(triviaQuestionIndex) {
    var i = triviaQuestions[triviaQuestionIndex];
    questionEl.textContent = (triviaQuestionIndex + 1) + ". " +  i.trivia-question;

    opt1.innerHTML = i.option1;
    opt2.innerHTML = i.option2;
    opt3.innerHTML = i.option3;
    opt4.innerHTML = i.option4;
    
};

function loadQuestion() {
  var selectedOption = document.querySelector('input[type=radio]:checked');
  if(!selectedOption) {
    oops.play();
    alert("Please select an answer.");
    return;
  }

  var answer = selectedOption.value
  if(triviaQuestions[currentQuestion].answer == answer) {
    hotdog.play(); 
    score += 1;
  }
  selectedOption.checked = false;
  currentQuestion++;
  
  if (currentQuestion == totalQuestions - 1) {
    nextButton.textContent = 'End';
  }
  if (currentQuestion == totalQuestions) {
    $("container").hide();
    $("resultContainer").show();
    $("resultContainer").innerHTML = score;
    return;
  }
  loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);





}); // <--- End of JavaScript