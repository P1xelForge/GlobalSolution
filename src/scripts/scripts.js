const imagens = [
      '/src/assets/enchentes1.jpeg',
      '/src/assets/enchentes2.jpeg',
      '/src/assets/enchentes3.jpeg'
    ];

    let index = 0;
    const slideshow = document.querySelector('.slideshow-container');

    function trocarImagem() {
      slideshow.style.backgroundImage = `url('${imagens[index]}')`;
      index = (index + 1) % imagens.length;
    }

    trocarImagem();
    setInterval(trocarImagem, 5000);
//PARTE A SER MUDADA DO MENÚ HAMBURGUER
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  toggle.addEventListener("click", function () {
    menu.classList.toggle("show");
  });
});
//PARTE A SER MUDADA DO MENÚ HAMBURGUER

//CODIGO DO QUIZ
const quizData = [
  {
    question: "O que é uma enchente?",
    choices: [
      "Acúmulo de poeira",
      "Acúmulo de água em áreas urbanas",
      "Queda de granizo",
      "Tempestades solares"
    ],
    answer: 1
  },
  {
    question: "Qual destes fatores contribui para enchentes urbanas?",
    choices: [
      "Plantio de árvores",
      "Pavimentação excessiva",
      "Menor uso de carros",
      "Aumento da vegetação"
    ],
    answer: 1
  },
  {
    question: "Qual a melhor atitude em caso de enchente iminente?",
    choices: [
      "Ficar em casa no térreo",
      "Procurar abrigo em locais altos",
      "Entrar na água para resgatar objetos",
      "Esperar o alarme tocar"
    ],
    answer: 1
  },
  {
    question: "Como o lixo contribui para as enchentes?",
    choices: [
      "Ajuda a secar o solo",
      "Obstrui bueiros e impede o escoamento da água",
      "Atrai animais peçonhentos",
      "Absorve a água da chuva"
    ],
    answer: 1
  },
  {
    question: "Qual órgão é responsável pela defesa civil no Brasil?",
    choices: [
      "Detran",
      "IBGE",
      "Defesa Civil",
      "Corpo de Bombeiros"
    ],
    answer: 2
  },
  {
    question: "O que são áreas de risco?",
    choices: [
      "Locais turísticos",
      "Regiões com alta chance de desastres",
      "Parques públicos",
      "Bairros planejados"
    ],
    answer: 1
  },
  {
    question: "O que pode ajudar a evitar enchentes?",
    choices: [
      "Jogar lixo na rua",
      "Desmatar margens de rios",
      "Criar jardins de chuva e áreas permeáveis",
      "Construir em áreas alagadas"
    ],
    answer: 2
  },
  {
    question: "O que fazer após uma enchente?",
    choices: [
      "Voltar imediatamente para casa",
      "Beber água de poças",
      "Evitar contato com água contaminada",
      "Ligar o ar condicionado"
    ],
    answer: 2
  },
  {
    question: "Qual desses é sinal de risco de deslizamento?",
    choices: [
      "Sol rachado",
      "Árvores inclinadas e trincas no solo",
      "Presença de animais",
      "Tempo seco"
    ],
    answer: 1
  },
  {
    question: "Enchentes podem causar:",
    choices: [
      "Melhoria no trânsito",
      "Aumento de energia elétrica",
      "Perdas materiais e mortes",
      "Resfriamento global"
    ],
    answer: 2
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

function showQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  choicesEl.innerHTML = "";
  q.choices.forEach((choice, index) => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.onclick = () => selectAnswer(index);
    const li = document.createElement("li");
    li.appendChild(btn);
    choicesEl.appendChild(li);
  });
}

function selectAnswer(choice) {
  if (choice === quizData[currentQuestion].answer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  resultEl.classList.remove("hidden");
  scoreEl.textContent = score;
}

showQuestion();
//CODIGO DO QUIZ

//CODIGO DOS BOTÕES PARA MUDAR AS CORES DO QUIZ
function changeQuizColor(color) {
  const quizContainer = document.querySelector('.quiz-container');
  quizContainer.style.backgroundColor = color;
}

//CODIGO DO LOGIN DE USUARIO
function toggleLogin() {
  const loginBox = document.getElementById("login-box");
  loginBox.classList.toggle("hidden2");
}

function validateLogin() {
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const errorMsg = document.getElementById("error-msg");

  if (email === "" || senha === "") {
    errorMsg.textContent = "Preencha todos os campos.";
    return false;
  }

  errorMsg.textContent = ""; // Limpa erros
  alert("Login enviado!");
  return true;
}
//CODIGO DO LOGIN DE USUARIO

function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  menu.classList.toggle("open");
}