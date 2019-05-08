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
      question: "Você costuma guardar uma graninha?",
      answers: {

        0:"Sim, sempre guardo uma parte, com disciplina.",

        1:"Geralmente, procuro manter a regularidade, mas as vezes dou uma pedalada.",

        2:"Eu tento, mas confesso que não é um hábito.",

        3:"Nunca sobra nada do meu salário para eu guardar!" },

      weights: [

                    [0.0, 0.1, 0.3, 0.4, 0.6],

                    [0.1, 0.2, 0.4, 0.5, 0.3],

                    [0.1, 0.5, 0.4, 0.3, 0.1],

                    [0.1, 0.4, 0.2, 0.0, 0.0] ],
      img: "saving",
      button: "r"
    },

{
      question: "Se você tem um dinheirinho guardado, o que planeja para ele?",
      answers: {

        0:"Planejo usar em uma emergência, nunca se sabe o que está por vir.",

        1:"Estou juntando para um sonho que quero realizar.",

        2:"Penso no futuro e guardo para minha aposentadoria.",

        3:"Estou só guardando, mas ainda não planejei nada específico.",

        4:"Não tenho dinheiro guardado." },

      weights: [

                    [0.0, 0.0, 0.1, 0.2, 0.5],

                    [0.1, 0.2, 0.4, 0.7, 0.3],

                    [0.0, 0.0, 0.1, 0.4, 0.4],

                    [0.1, 0.2, 0.3, 0.2, 0.1],

                    [0.4, 0.3, 0.1, 0.0, 0.0] ],
      img: "saving2",
      button: "c"
    },

{
      question: "Você poupa o máximo que pode?",
      answers: {

        0:"Sim, já fiz as contas e poupo o máximo possível.",

        1:"Acho que poderia guardar um pouco mais.",

        2:"Penso em adquirir esse hábito.",

        3:"Poxa, realmente não consigo poupar!" },

      weights: [

                    [0.4, 0.4, 0.2, 0.3, 0.6],

                    [0.1, 0.2, 0.3, 0.5, 0.3],

                    [0.2, 0.3, 0.5, 0.4, 0.2],

                    [0.4, 0.3, 0.5, 0.2, 0.0] ],
      img: "saving3",
      button: "r"
    },

{
      question: "Atualmente, quais dos produtos abaixo você usa?",
      answers: {

        0:"Cheque especial",

        1:"Cartão de crédito",

        2:"Empréstimo",

        3:"Consórcio",

        4:"Financiamento",

        5:"Não uso nenhum desses." },

      weights: [

                    [0.4, 0.3, 0.2, 0.1, 0.0],

                    [0.1, 0.2, 0.02, 0.3, 0.2],

                    [0.3, 0.2, 0.1, 0.05, 0.05],

                    [0.05, 0.2, 0.3, 0.6, 0.1],

                    [0.2, 0.3, 0.35, 0.1, 0.05],

                    [0.0, 0.0, 0.0, 0.0, 0.0] ],
      img: "card",
      button: "c"
    },

{
      question: "Sobre os produtos da pergunta anterior, quão bem você os entende?",
      answers: {

        0:"Entendo bem, sei exatamente como e quando usá-los corretamente.",

        1:"Entendo bem alguns deles, mas outros são um verdadeiro mistério.",

        2:"Não entendo direito, mas acabo usando conforme a necessidade." },

      weights: [

                    [0.0, 0.2, 0.3, 0.4, 0.6],

                    [0.2, 0.5, 0.4, 0.3, 0.2],

                    [0.4, 0.5, 0.3, 0.2, 0.0] ],
      img: "idea",
      button: "r"
    },

{
      question: "Você paga suas contas em dia?",
      answers: {

        0:"Sempre pago, não gosto de atrasar as contas!",

        1:"Quase sempre, as vezes esqueço de alguma.",

        2:"Raramente, eu sempre esqueço, mas quando lembro a tempo, corro e pago.",

        3:"Nunca, sempre me perco com as datas de vencimento das contas!" },

      weights: [

                    [0.0, 0.1, 0.2, 0.5, 0.7],

                    [0.1, 0.4, 0.5, 0.4, 0.2],

                    [0.3, 0.5, 0.3, 0.2, 0.1],

                    [0.6, 0.2, 0.1, 0.0, 0.0] ],
      img: "bill",
      button: "r"
    },

{
      question: "Quanto tempo você demoraria para pagar todos os seus parcelamentos atuais?",
      answers: {

        0:"Entre 1mês e 6 meses..",

        1:"Entre 6 meses e 1 ano.",

        2:"Entre 1 e 5 anos.",

        3:"Mais de 5 anos." },

      weights: [

                    [0.0, 0.1, 0.2, 0.5, 0.7],

                    [0.1, 0.4, 0.4, 0.7, 0.2],

                    [0.3, 0.5, 0.3, 0.2, 0.1],

                    [0.7, 0.2, 0.1, 0.0, 0.0] ],
      img: "calendar",
      button: "r"
    },

{
      question: "Suas contas fixas represetam quanto do seu salário?",
      answers: {

        0:"25% ou menos.",

        1:"Entre 25% e 50%.",

        2:"Entre 50% e 75%.",

        3:"Mais de 75%." },

      weights: [

                    [0.0, 0.0, 0.2, 0.3, 0.6],

                    [0.1, 0.3, 0.3, 0.5, 0.3],

                    [0.3, 0.4, 0.6, 0.4, 0.1],

                    [0.7, 0.6, 0.3, 0.1, 0.0] ],
      img: "balance2",
      button: "r"
    },

{
      question: "Você tem algum tipo de seguro contratado atualmente?",
      answers: {

        0:"Imóvel",

        1:"Veículo",

        2:"Vida",

        3:"Convênio médico",

        4:"Não tenho." },

      weights: [

                    [0.0, 0.0, 0.1, 0.3, 0.6],

                    [0.0, 0.1, 0.1, 0.4, 0.5],

                    [0.0, 0.0, 0.1, 0.3, 0.5],

                    [0.1, 0.1, 0.5, 0.4, 0.6],

                    [0.7, 0.7, 0.4, 0.3, 0.0] ],
      img: "insurance",
      button: "c"
    },

{
      question: "Você gasta mais do que ganha?",
      answers: {

        0:"Sim, um aumentinho de salário cairia bem…",

        1:"Não, consigo manter a disciplina." },

      weights: [

                    [0.8, 0.7, 0.3, 0.2, 0.1],

                    [0.2, 0.3, 0.7, 0.4, 0.4] ],
      img: "management",
      button: "r"
    },

{
      question: "Como você organiza suas finanças?",
      answers: {

        0:"Gosto de tecnologia, uso aplicativos e/ou ferramentas feitas pra isso!",

        1:"Minha querida planilha me ajuda com isso.",

        2:"Sou old school, caneta, papel e calculadora é tudo que eu preciso.",

        3:"Não costumo organizar de jeito nenhum." },

      weights: [

                    [0.0, 0.1, 0.4, 0.6, 0.5],

                    [0.1, 0.2, 0.3, 0.6, 0.5],

                    [0.1, 0.2, 0.3, 0.6, 0.5],

                    [0.8, 0.5, 0.2, 0.1, 0.0] ],
      img: "analytics",
      button: "c"
    },

{
      question: "Você tem muitas dívidas?",
      answers: {

        0:"Digo com orgulho: não!",

        1:"Tenho, mas está tudo sob controle, sei o que estou fazendo.",

        2:"Sim, tenho e sinceramente estou perdendo o controle.",

        3:"Tenho e já nem sei o que está acontecendo, acho que preciso de ajuda!" },

      weights: [

                    [0.1, 0.3, 0.5, 0.6, 0.7],

                    [0.4, 0.6, 0.6, 0.6, 0.7],

                    [0.4, 0.4, 0.3, 0.2, 0.0],

                    [0.5, 0.1, 0.0, 0.0, 0.0] ],
      img: "debt",
      button: "r"
    },

{
      question: "Se você parasse de trabalhar hoje, por quanto tempo conseguiria viver no seu padrão de vida atual?",
      answers: {

        0:"Mais ou menos 1 ano, o suficiente para encontrar um novo emprego.",

        1:"Conseguiria me manter por uns 6 meses, não dá pra vacilar.",

        2:"Viveria do jeito que vivo agora por uns 3 meses, depois teria que apertar o cinto.",

        3:"Me manteria apenas por 1 mês, teria que achar um novo emprego bem rápido!" },

      weights: [

                    [0.0, 0.1, 0.3, 0.4, 0.7],

                    [0.0, 0.2, 0.5, 0.7, 0.3],

                    [0.1, 0.6, 0.7, 0.4, 0.2],

                    [0.6, 0.6, 0.4, 0.1, 0.0] ],
      img: "shield",
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
           <img style="float: right; margin-left: 3em; height: 10%;" alt="" src="img/${currentQuestion.img}.png" />
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

