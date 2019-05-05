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
      img: "saving",
      button: "r"
    },

{
      question: "Para que poupa?",
      answers: {

        0:"Reserva de emergencia",

        1:"Realizar sonhos",

        2:"Previdência privada",

        3:"Não poupo!" },

      weights: [

                    [0.0, 0.0, 0.1, 0.1, 0.2],

                    [0.1, 0.1, 0.3, 0.4, 0.5],

                    [0.0, 0.0, 0.1, 0.2, 0.3],

                    [0.8, 0.4, 0.15, 0.1, 0.05] ],
      img: "saving2",
      button: "c"
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
      img: "saving3",
      button: "r"
    },

{
      question: "Suas reservas cobrem quantos meses das suas despesas?",
      answers: {

        0:"12 meses ou mais",

        1:"mais ou menos 6 meses",

        2:"mais ou menos 3 meses",

        3:"mais ou menos 1 mês" },

      weights: [

                    [0.0, 0.1, 0.2, 0.4, 0.8],

                    [0.1, 0.2, 0.1, 0.35, 0.3],

                    [0.3, 0.3, 0.15, 0.25, 0.1],

                    [0.6, 0.4, 0.3, 0.0, 0.0] ],
      img: "shield",
      button: "r"
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
      img: "card",
      button: "c"
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
      img: "idea",
      button: "r"
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
      img: "balance",
      button: "r"
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
      img: "bill",
      button: "r"
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
      img: "calendar",
      button: "r"
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
      img: "balance2",
      button: "r"
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
      img: "insurance",
      button: "r"
    },

{
      question: "Você gasta mais do que ganha?",
      answers: {

        0:"Sim",

        1:"Não" },

      weights: [

                    [0.8, 0.7, 0.3, 0.2, 0.1],

                    [0.2, 0.3, 0.7, 0.8, 0.9] ],
      img: "management",
      button: "r"
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
      img: "analytics",
      button: "c"
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
      img: "debt",
      button: "r"
    }
    
  ];
  
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
  // QUIZ BUILDER
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
  function buildQuiz() {
    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answers = [];
      var button  = "radio";
      var bclass  = "form-radio";

      if (currentQuestion.button == "r") {
      		button = "radio";
      		bclass = "form-radio";
      }
      else {
      		button = "checkbox";
      		bclass = "form-check";
      }

      for (letter in currentQuestion.answers) {
        answers.push(
          `<div style="display: table;">
             <div style="display: table-row;">
              <div style="display: table-cell;"><input type="${button}" name="question${questionNumber}" value="${letter}" class="${bclass}"></div>
              <div style="display: table-cell;"><p>${currentQuestion.answers[letter]}</p></div>
             </div>
           </div>
           <br/>`
        );
      }

      output.push(
        `<section>
           <div class="question"> <h1> ${currentQuestion.question} </h1> </div>
           <img style="float: right; margin-right: 3em; height: 10%;" alt="" src="img/${currentQuestion.img}.png" />
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
      //const answerContainer = answerContainers[questionNumber];
      //const selector        = `input[name=question${questionNumber}]:checked`;
      //const userAnswer      = (answerContainer.querySelector(selector) || {}).value;
      //const score           = currentQuestion.weights[userAnswer];
      const tmpScore = [];
      const tmpProf  = [0.0, 0.0, 0.0, 0.0, 0.0];
      const checkboxes = document.querySelectorAll(`input[name=question${questionNumber}]`);
      
      for (var i=0; i<checkboxes.length; i++ ) {
      		if (checkboxes[i].checked) {
      			const val   = checkboxes[i].value;
      			const score = currentQuestion.weights[val];
      			tmpScore.splice( questionNumber, 0, score );
      		}
      }

      for ( const i of Array(5).keys() ) {
	      var SUM = 0;
	      
	      for (var index = 0; index < tmpScore.length; index++) {
	        SUM += tmpScore[index][i] ;
	      };
	      
	      tmpProf.splice(i, 1, SUM);
   	  };
      
      scoreboard.splice( questionNumber, 0, tmpProf );
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

    resultsContainer.innerHTML = `Persona: ${Number(persona[0].toFixed(2))} <br/><br/>
                                  Scores:<br/>
                                          0:  ${Number(profile[0].toFixed(2))},<br/>
                                          1:  ${Number(profile[1].toFixed(2))},<br/>
                                          2:  ${Number(profile[2].toFixed(2))},<br/>
                                          3:  ${Number(profile[3].toFixed(2))},<br/>
                                          4:  ${Number(profile[4].toFixed(2))} <br/></br/><br/>
                                  `;
  }
  
  const quizContainer    = document.getElementById("quiz");
  // display quiz
  buildQuiz();
  
  const resultsContainer = document.getElementById("results");
  const submitButton     = document.getElementById("submit");
  submitButton.addEventListener("click", showResults);
})();

