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
      question: "Você poupa?",
      answers: {

        0:"Sempre",

        1:"Às vezes",

        2:"Raramente",

        3:"Nunca" },

      weights: [

                    [0.0, 0.1, 0.2, 0.5, 0.7],

                    [0.1, 0.4, 0.4, 0.3, 0.2],

                    [0.3, 0.3, 0.3, 0.2, 0.1],

                    [0.6, 0.2, 0.1, 0.0, 0.0] ],
      img: "pig"
    },

{
      question: "Para que poupa?",
      answers: {

        0:"Reserva de emergencia",

        1:"Realizar sonhos",

        2:"Previdência privada" },

      weights: [

                    [0.0, 0.0, 0.1, 0.1, 0.2],

                    [0.1, 0.1, 0.3, 0.4, 0.5],

                    [0.0, 0.0, 0.1, 0.2, 0.3] ],
      img: "pig"
    },

{
      question: "Você poupa o máximo que pode?",
      answers: {

        0:"Poupo o máximo possível",

        1:"Poderia guardar mais",

        2:"Poderia começar a guardar mais vezes" },

      weights: [

                    [0.4, 0.4, 0.2, 0.5, 0.6],

                    [0.2, 0.3, 0.3, 0.3, 0.4],

                    [0.4, 0.3, 0.5, 0.2, 0.0] ],
      img: "pig"
    },

{
      question: "O que você usa do banco?",
      answers: {

        0:"Cheque especial",

        1:"Cartão",

        2:"Empréstimo",

        3:"Consórcio",

        4:"Financiamento" },

      weights: [

                    [0.4, 0.3, 0.2, 0.1, 0.0],

                    [0.1, 0.08, 0.02, 0.08, 0.1],

                    [0.3, 0.2, 0.1, 0.05, 0.05],

                    [0.05, 0.2, 0.3, 0.35, 0.1],

                    [0.2, 0.3, 0.35, 0.1, 0.05] ],
      img: "pig"
    },

{
      question: "Você entende os produtos que usa?",
      answers: {

        0:"Entendo exatamente",

        1:"Mais ou menos",

        2:"Não entendo direito" },

      weights: [

                    [0.0, 0.2, 0.3, 0.5, 0.8],

                    [0.2, 0.5, 0.4, 0.3, 0.2],

                    [0.8, 0.3, 0.3, 0.2, 0.0] ],
      img: "pig"
    },

{
      question: "Os produtos que você usa representam quanto do seu salário?",
      answers: {

        0:"0%",

        1:"25%",

        2:"50%",

        3:"75%",

        4:"100%" },

      weights: [

                    [0.0, 0.0, 0.1, 0.3, 0.6],

                    [0.0, 0.1, 0.2, 0.4, 0.5],

                    [0.25, 0.2, 0.2, 0.15, 0.15],

                    [0.4, 0.3, 0.25, 0.15, 0.05],

                    [0.6, 0.5, 0.2, 0.0, 0.0] ],
      img: "pig"
    },

{
      question: "Você paga suas contas em dia?",
      answers: {

        0:"Sempre",

        1:"Quase sempre",

        2:"Raramente",

        3:"Nunca" },

      weights: [

                    [0.0, 0.1, 0.2, 0.5, 0.7],

                    [0.1, 0.4, 0.4, 0.3, 0.2],

                    [0.3, 0.3, 0.3, 0.2, 0.1],

                    [0.6, 0.2, 0.1, 0.0, 0.0] ],
      img: "pig"
    },

{
      question: "Quanto tempo você demoraria para pagar suas parcelas?",
      answers: {

        0:"1 mês",

        1:"6 meses",

        2:"1 ano",

        3:"5 anos ou mais" },

      weights: [

                    [0.0, 0.1, 0.2, 0.5, 0.7],

                    [0.1, 0.4, 0.4, 0.3, 0.2],

                    [0.3, 0.3, 0.3, 0.2, 0.1],

                    [0.6, 0.2, 0.1, 0.0, 0.0] ],
      img: "pig"
    },

{
      question: "Suas contas fixas represetam quanto do seu salário?",
      answers: {

        0:"50% ou menos",

        1:"70%",

        2:"90%",

        3:"100%" },

      weights: [

                    [0.0, 0.0, 0.2, 0.3, 0.6],

                    [0.1, 0.3, 0.3, 0.5, 0.3],

                    [0.3, 0.3, 0.3, 0.2, 0.1],

                    [0.6, 0.4, 0.2, 0.0, 0.0] ],
      img: "pig"
    },

{
      question: "Você tem algum seguro?",
      answers: {

        0:"Imóvel",

        1:"Veículo",

        2:"Vida",

        3:"Convênio médico" },

      weights: [

                    [0.0, 0.0, 0.1, 0.3, 0.3],

                    [0.0, 0.1, 0.1, 0.4, 0.4],

                    [0.0, 0.0, 0.1, 0.3, 0.4],

                    [0.1, 0.1, 0.2, 0.4, 0.6] ],
      img: "pig"
    },

{
      question: "Você gasta mais do que ganha?",
      answers: {

        0:"Sim",

        1:"Não" },

      weights: [

                    [0.8, 0.7, 0.3, 0.2, 0.1],

                    [0.2, 0.3, 0.7, 0.8, 0.9] ],
      img: "pig"
    },

{
      question: "Como você organiza suas finanças?",
      answers: {

        0:"Com aplicativos",

        1:"Planilhas no computador",

        2:"Anotações",

        3:"Não organizo" },

      weights: [

                    [0.0, 0.1, 0.4, 0.5, 0.6],

                    [0.1, 0.2, 0.3, 0.5, 0.7],

                    [0.1, 0.2, 0.3, 0.5, 0.4],

                    [0.8, 0.5, 0.2, 0.1, 0.0] ],
      img: "pig"
    },

{
      question: "Você tem muitas dívidas?",
      answers: {

        0:"Não tenho",

        1:"Sim, mas estão sob controle",

        2:"Sim e estão me complicando",

        3:"Sim e não sei o que fazer!" },

      weights: [

                    [0.1, 0.3, 0.5, 0.6, 0.7],

                    [0.4, 0.6, 0.5, 0.4, 0.3],

                    [0.4, 0.4, 0.3, 0.2, 0.0],

                    [0.5, 0.1, 0.0, 0.0, 0.0] ],
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
          `<div style="display: table;">
             <div style="display: table-row;">
              <div style="display: table-cell;"><input type="radio" name="question${questionNumber}" value="${letter}" class="form-radio"></div>
              <div style="display: table-cell;"><p>${currentQuestion.answers[letter]}</p></div>
             </div>
           </div>
           <br/>`
        );
      }

      output.push(
        `<section>
           <div class="question"> <h1> ${currentQuestion.question} </h1> </div>
           <img style="float: right; margin-right: 3em; width: 450px;" alt="" src="img/${currentQuestion.img}.png" />
           <div class="answers"> ${answers.join("")} </div>
         </section>`
      );
    });
    
    output.push(
        `<section>
         <div id="results" class="resultsBox"></div>
         <div><button id="submit">ENVIAR</button></div>
         </section>`
    );
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
  }
  
  const quizContainer    = document.getElementById("quiz");
  // display quiz
  buildQuiz();
  
  const resultsContainer = document.getElementById("results");
  const submitButton     = document.getElementById("submit");
  submitButton.addEventListener("click", showResults);
})();

