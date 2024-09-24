const questions = [
    { question: "Apa yang paling mendominasi dalam inti atom?", answers: ["Proton", "Neutron", "Elektron"], correct: 1 },
    { question: "Siapa penemu model atom yang berbasis inti?", answers: ["Dalton", "Rutherford", "Thomson"], correct: 1 },
    { question: "Apa muatan neutron?", answers: ["Positif", "Negatif", "Tidak ada"], correct: 2 },
    { question: "Apa partikel penyusun inti atom?", answers: ["Proton dan neutron", "Elektron", "Bahan bakar nuklir"], correct: 0 },
    { question: "Apa yang menyusun elektron?", answers: ["Kuantum", "Energi", "Gaya magnet"], correct: 0 },
    { question: "Apa yang disebut dengan isotop?", answers: ["Atom dengan neutron berbeda", "Atom dengan proton berbeda", "Atom dengan elektron berbeda"], correct: 0 },
    { question: "Berapa jumlah maksimum elektron pada kulit kedua?", answers: ["2", "8", "18"], correct: 1 },
    { question: "Apa itu ion?", answers: ["Atom bermuatan", "Atom netral", "Molekul"], correct: 0 },
    { question: "Apa yang terjadi pada elektron saat energi ditambahkan?", answers: ["Melepaskan energi", "Beralih ke tingkat energi lebih tinggi", "Menjadi neutron"], correct: 1 },
    { question: "Apa yang disebut dengan model atom Planck?", answers: ["Model partikel", "Model gelombang", "Model campuran"], correct: 1 },
    { question: "Siapa yang mengembangkan teori atom modern?", answers: ["Einstein", "Bohr", "Heisenberg"], correct: 1 },
    { question: "Berapa banyak proton dalam karbon?", answers: ["6", "12", "8"], correct: 0 },
    { question: "Apa yang disebut dengan muatan positif dalam atom?", answers: ["Neutron", "Proton", "Elektron"], correct: 1 },
    { question: "Apa yang membentuk ikatan ionik?", answers: ["Transfer elektron", "Berbagi elektron", "Interaksi magnetik"], correct: 0 },
    { question: "Apa yang terjadi pada atom saat radiasi terjadi?", answers: ["Berkurang massa", "Menjadi lebih stabil", "Menghasilkan energi"], correct: 2 },
    { question: "Apa itu elektron valensi?", answers: ["Elektron terluar", "Elektron dalam", "Proton"], correct: 0 },
    { question: "Siapa yang menemukan elektron?", answers: ["Rutherford", "Thomson", "Bohr"], correct: 1 },
    { question: "Apa itu model atom Dalton?", answers: ["Model bola pejal", "Model partikel", "Model gelombang"], correct: 0 },
    { question: "Apa yang menjelaskan sifat dualitas gelombang partikel?", answers: ["Teori relativitas", "Teori kuantum", "Teori elektromagnetik"], correct: 1 },
    { question: "Apa yang terjadi pada atom saat mengalami fusi nuklir?", answers: ["Atom bergabung", "Atom pecah", "Atom tetap"], correct: 0 },
    { question: "Berapa jumlah total partikel dalam inti atom hidrogen?", answers: ["1", "2", "3"], correct: 0 },
];

let currentQuestionIndex = 0;
let score = 0;
let playerName = "";
let darkMode = false;

document.getElementById("startQuiz").addEventListener("click", startQuiz);
document.getElementById("toggleTheme").addEventListener("click", toggleTheme);

function startQuiz() {
    playerName = document.getElementById("playerName").value.trim();
    if (playerName === "") {
        alert("Silakan masukkan nama Anda!");
        return;
    }
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("nameInputContainer").classList.add("hidden");
    document.getElementById("quizContainer").classList.remove("hidden");
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        endQuiz();
        return;
    }

    const question = questions[currentQuestionIndex];
    document.getElementById("questionTitle").textContent = `Pertanyaan ${currentQuestionIndex + 1}`;
    const questionContainer = document.getElementById("questionContainer");
    questionContainer.innerHTML = `<div class="question">${question.question}</div>`;
    question.answers.forEach((answer, index) => {
        questionContainer.innerHTML += `<div class="answer" onclick="checkAnswer(${index})">${answer}</div>`;
    });
}

function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    if (selectedIndex === question.correct) {
        score += 5;
    }
    currentQuestionIndex++;
    showQuestion();
}

function endQuiz() {
    document.getElementById("quizContainer").classList.add("hidden");
    const scoreContainer = document.getElementById("scoreContainer");
    scoreContainer.innerHTML = `Skor akhir ${playerName}: ${score}`;
    scoreContainer.classList.remove("hidden");
}

function toggleTheme() {
    darkMode = !darkMode;
    document.body.classList.toggle("dark-mode", darkMode);
    document.querySelector(".container").classList.toggle("dark-mode", darkMode);
    document.querySelectorAll("input").forEach(input => input.classList.toggle("dark-mode", darkMode));
    document.querySelectorAll("button").forEach(button => button.classList.toggle("dark-mode", darkMode));
    document.querySelectorAll(".answer").forEach(answer => answer.classList.toggle("dark-mode", darkMode));
    document.getElementById("toggleTheme").textContent = darkMode ? "Mode Terang" : "Mode Gelap";
}

