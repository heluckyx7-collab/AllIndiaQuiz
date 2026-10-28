// Updated Quiz Logic with Language, Board, Subject, Count

let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let totalQuestions = 10;
let selectedLanguage = "hindi";
let selectedBoard = "cbse";
let selectedSubject = "maths";
let answered = false;

const homeScreen = document.getElementById("home-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

function selectOption(btn, type) {
    const group = btn.parentElement;
    group.querySelectorAll(".select-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    if (type === "language") selectedLanguage = btn.dataset.value;
    if (type === "count") totalQuestions = parseInt(btn.dataset.value);
}

function hideAll() {
    homeScreen.classList.add("hidden");
    quizScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
}

function goHome() {
    hideAll();
    homeScreen.classList.remove("hidden");
    currentQuestions = [];
    currentIndex = 0;
    score = 0;
    answered = false;
}

function startQuiz() {
    selectedBoard = document.getElementById("board-select").value;
    selectedSubject = document.getElementById("subject-select").value;

    // Build key for question bank
    let key = selectedBoard + "-" + selectedSubject;
    if (!questionBank[key]) {
        key = "cbse-maths"; // fallback
    }

    let pool = [...(questionBank[key] || questionBank["cbse-maths"])];

    // Filter by language preference
    if (selectedLanguage === "hindi") {
        pool = pool.filter(q => q.lang === "hi" || q.lang === "both");
    } else if (selectedLanguage === "english") {
        pool = pool.filter(q => q.lang === "en" || q.lang === "both");
    }

    // Shuffle and take required number
    pool = shuffleArray(pool);
    currentQuestions = pool.slice(0, Math.min(totalQuestions, pool.length));

    if (currentQuestions.length === 0) {
        alert("Is combination ke liye abhi questions kam hain. Koi aur subject try karo.");
        return;
    }

    currentIndex = 0;
    score = 0;
    answered = false;

    hideAll();
    quizScreen.classList.remove("hidden");
    showQuestion();
}

function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function showQuestion() {
    answered = false;
    const q = currentQuestions[currentIndex];
    const total = currentQuestions.length;

    document.getElementById("question-counter").textContent = `Q ${currentIndex + 1}/${total}`;
    document.getElementById("score-display").textContent = `Score: ${score}`;
    document.getElementById("progress-fill").style.width = `${(currentIndex / total) * 100}%`;

    // Show question according to language
    let questionText = q.q;
    if (selectedLanguage === "both" && q.q_hi) {
        questionText = q.q + "<br><br><small style='color:#94a3b8'>" + q.q_hi + "</small>";
    } else if (selectedLanguage === "hindi" && q.q_hi) {
        questionText = q.q_hi;
    }

    document.getElementById("question-text").innerHTML = questionText;

    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    const letters = ["A", "B", "C", "D"];
    const opts = (selectedLanguage === "hindi" && q.options_hi) ? q.options_hi : q.options;

    opts.forEach((opt, idx) => {
        const div = document.createElement("div");
        div.className = "option";
        div.innerHTML = `<span class="opt-letter">${letters[idx]}</span><span>${opt}</span>`;
        div.onclick = () => selectOptionAnswer(idx);
        optionsContainer.appendChild(div);
    });

    document.getElementById("explanation-box").classList.add("hidden");
}

function selectOptionAnswer(selectedIdx) {
    if (answered) return;
    answered = true;

    const q = currentQuestions[currentIndex];
    const options = document.querySelectorAll(".option");

    options.forEach((opt, idx) => {
        opt.onclick = null;
        if (idx === q.correct) opt.classList.add("correct");
        else if (idx === selectedIdx) opt.classList.add("wrong");
    });

    const expBox = document.getElementById("explanation-box");
    const resultTitle = document.getElementById("result-title");
    const expText = document.getElementById("explanation-text");

    expBox.classList.remove("hidden", "correct-ans", "wrong-ans");

    let explanation = q.explain;
    if (selectedLanguage === "hindi" && q.explain_hi) explanation = q.explain_hi;
    if (selectedLanguage === "both" && q.explain_hi) {
        explanation = q.explain + "<br><br>" + q.explain_hi;
    }

    if (selectedIdx === q.correct) {
        score++;
        resultTitle.textContent = selectedLanguage === "hindi" ? "✅ सही जवाब! बहुत बढ़िया 🎉" : "✅ Correct! Great job 🎉";
        expBox.classList.add("correct-ans");
        expText.innerHTML = explanation;
    } else {
        resultTitle.textContent = selectedLanguage === "hindi" ? "❌ गलत जवाब" : "❌ Wrong Answer";
        expBox.classList.add("wrong-ans");
        const correctOpt = (selectedLanguage === "hindi" && q.options_hi) ? q.options_hi[q.correct] : q.options[q.correct];
        expText.innerHTML = `<strong>Sahi Answer:</strong> ${correctOpt}<br><br>${explanation}`;
    }

    document.getElementById("score-display").textContent = `Score: ${score}`;

    const nextBtn = document.getElementById("next-btn");
    if (currentIndex === currentQuestions.length - 1) {
        nextBtn.textContent = selectedLanguage === "hindi" ? "Result देखो →" : "See Result →";
    } else {
        nextBtn.textContent = selectedLanguage === "hindi" ? "Next →" : "Next →";
    }
}

function nextQuestion() {
    currentIndex++;
    if (currentIndex >= currentQuestions.length) {
        showResult();
    } else {
        showQuestion();
    }
}

function showResult() {
    hideAll();
    resultScreen.classList.remove("hidden");

    const total = currentQuestions.length;
    document.getElementById("final-score").textContent = `${score}/${total}`;

    const msg = document.getElementById("result-message");
    const percent = (score / total) * 100;

    if (percent >= 90) msg.textContent = "🔥 Outstanding! Topper material!";
    else if (percent >= 70) msg.textContent = "👏 Bahut accha! Thoda aur practice karo.";
    else if (percent >= 50) msg.textContent = "😊 Theek hai, concepts clear karo.";
    else msg.textContent = "💪 Koi baat nahi! Explanation padho aur phir try karo.";
}

function restartQuiz() {
    startQuiz();
}

// Init
goHome();
