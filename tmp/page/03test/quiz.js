// structure of weights:
//
//                prof0  , prof1  , prof2  , prof3  , prof4
//             [
// alternative0 [ weight0, weight1, weight2, weight3, weight4 ],
// alternative1 [ weight0, weight1, weight2, weight3, weight4 ],
//                                 ...
// alternativeN [ weight0, weight1, weight2, weight3, weight4 ]
//             ]

(function() {
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
  // QUESTIONS
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
  const myQuestions = [
    {
      question: "Você costuma poupar parte da sua renda?",
      answers: {
        0:"Sim.",
        1:"As vezes.",
        2:"Não."
      },
      weights       : [ 
                        [0.10, 0.20, 0.50, 0.80, 0.90],
                        [0.10, 0.40, 0.50, 0.80, 0.50],
                        [0.90, 0.60, 0.50, 0.20, 0.05]
                      ],
      img: "pig"
    },
    {
      question: "Como você prefere planejar os gastos?",
      answers: {
        0:"Todo meu planejamento é mental.",
        1:"Não me planejo, vivo um dia após o outro.",
        2:"Uso o computador e/ou celular para organizar minhas finanças.",
        3:"Sou velha-guarda, prefiro caneta e papel."
      },
      weights       : [ 
                        [0.40, 0.50, 0.50, 0.80, 0.60],
                        [0.90, 0.60, 0.50, 0.20, 0.05],
                        [0.10, 0.30, 0.40, 0.60, 0.90],
                        [0.10, 0.30, 0.50, 0.70, 0.80]
                      ],
      img: "pig"
    },{
      question: "Qual afirmação abaixo mais se aproxima da sua visão sobre o papel do dinheiro na vida das pessoas?",
      answers: {
        0:"Dinheiro é pra gastar!",
        1:"Dinheiro é uma necessidade pra se viver nos dias de hoje.",
        2:"Dinheiro é uma representação de valor.",
        3:"Dinheiro é uma ponte entre eu e meus desejos.",
      },
      weights       : [ [0.90, 0.60, 0.50, 0.30, 0.10],
                        [0.60, 0.70, 0.50, 0.40, 0.20],
                        [0.10, 0.40, 0.50, 0.70, 0.85],
                        [0.30, 0.50, 0.90, 0.70, 0.70]
                      ],
      img: "pig"
    }
  ];
  
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
  // QUIZ BUILDER
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
  function buildQuiz() {
    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answers = [];

      for (letter in currentQuestion.answers) {
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <img style="float: right; margin-right: 3em; width: 450px;" alt="" src="img/${currentQuestion.img}.png" />
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    quizContainer.innerHTML = output.join("");
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
  // RESULTS
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  function showResults() {
    // gather answer containers
    const answerContainers = quizContainer.querySelectorAll(".answers");

    const scoreboard = [];
    const profile    = [0.0, 0.0, 0.0, 0.0, 0.0];
    const persona    = [0, 0.0];

    // for question
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector        = `input[name=question${questionNumber}]:checked`;
      const userAnswer      = (answerContainer.querySelector(selector) || {}).value;
      const score           = currentQuestion.weights[userAnswer]
      
      scoreboard.splice( questionNumber, 0, score );
    });
    
    for ( const i of Array(5).keys() ) {
      var SUM = 0;
      
      for (var index = 0; index < scoreboard.length; index++) {
        SUM += scoreboard[index][i] ;
      };
      
      profile.splice(i, 1, SUM);
    };
    
    persona.splice( 0, 1, profile.indexOf(Math.max(...profile)) );
    persona.splice( 1, 1, Math.max(...profile) );
    
    console.log(profile);
    console.log(persona);

    resultsContainer.innerHTML = `Persona: ${persona[0]} <br/><br/>
                                  Scores:<br/>
                                          0:  ${profile[0]},<br/>
                                          1:  ${profile[1]},<br/>
                                          2:  ${profile[2]},<br/>
                                          3:  ${profile[3]},<br/>
                                          4:  ${profile[4]} <br/></br/><br/>
                                  FECHAR (falta implementar)`;
                                          
    var q = document.getElementById("quiz");
    q.style.display = "none";
    var r = document.getElementById("results");
    r.style.display = "block";
  }
  
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
  // MACHINERY
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
    var r = document.getElementById("results");
    r.style.display = "none";
    var q = document.getElementById("quiz");
    q.style.display = "block";
  }

  const quizContainer    = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton     = document.getElementById("submit");

  // display quiz
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton     = document.getElementById("next");
  const slides         = document.querySelectorAll(".slide");
  
  let currentSlide = 0;
  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();

