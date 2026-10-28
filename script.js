// Main Quiz Logic - Simple & Fast

let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let selectedCategory = "";
let answered = false;

// Screens
const homeScreen = document.getElementById("home-screen");
const subScreen = document.getElementById("sub-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

function hideAll() {
    homeScreen.classList.add("hidden");
    subScreen.classList.add("hidden");
    quizScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
}

function goHome() {
    hideAll();
    homeScreen.classList.remove("hidden");
    // Reset
    currentQuestions = [];
    currentIndex = 0;
    score = 0;
    answered = false;
}

function showSubCategories(type) {
    hideAll();
    subScreen.classList.remove("hidden");
    
    const title = document.getElementById("sub-title");
    const list = document.getElementById("sub-list");
    
    if (type === "cbse") title.textContent = "CBSE Topics Choose Karo";
    else if (type === "state") title.textContent = "State Board / Common Topics";
    else title.textContent = "Competitive Exam Choose Karo";
    
    list.innerHTML = "";
    
    const items = subCategories[type] || [];
    items.forEach(item => {
        const card = document.createElement("div");
        card.className = "category-card";
        card.innerHTML = `
            <span class="icon">${item.icon}</span>
            <h3>${item.name}</h3>
            <p>10 Questions • Easy Explanation</p>
        `;
        card.onclick = () => startQuiz(item.id);
        list.appendChild(card);
    });
}

function startQuiz(categoryId) {
    selectedCategory = categoryId;
    currentQuestions = [...(questionBank[categoryId] || questionBank["general"])];
    
    // Shuffle for variety
    currentQuestions = shuffleArray(currentQuestions).slice(0, 10);
    
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
    
    document.getElementById("question-counter").textContent = `Question ${currentIndex + 1}/10`;
    document.getElementById("score-display").textContent = `Score: ${score}`;
    document.getElementById("progress-fill").style.width = `${((currentIndex) / 10) * 100}%`;
    
    document.getElementById("question-text").textContent = q.q;
    
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";
    
    const letters = ["A", "B", "C", "D"];
    q.options.forEach((opt, idx) => {
        const div = document.createElement("div");
        div.className = "option";
        div.innerHTML = `
            <span class="opt-letter">${letters[idx]}</span>
            <span>${opt}</span>
        `;
        div.onclick = () => selectOption(idx);
        optionsContainer.appendChild(div);
    });
    
    // Hide explanation
    document.getElementById("explanation-box").classList.add("hidden");
}

function selectOption(selectedIdx) {
    if (answered) return;
    answered = true;
    
    const q = currentQuestions[currentIndex];
    const options = document.querySelectorAll(".option");
    
    options.forEach((opt, idx) => {
        opt.onclick = null; // disable further clicks
        if (idx === q.correct) {
            opt.classList.add("correct");
        } else if (idx === selectedIdx) {
            opt.classList.add("wrong");
        }
    });
    
    const expBox = document.getElementById("explanation-box");
    const resultTitle = document.getElementById("result-title");
    const expText = document.getElementById("explanation-text");
    
    expBox.classList.remove("hidden", "correct-ans", "wrong-ans");
    
    if (selectedIdx === q.correct) {
        score++;
        resultTitle.textContent = "✅ Sahi Jawaab! Bahut Badhiya 🎉";
        expBox.classList.add("correct-ans");
        expText.textContent = q.explain;
    } else {
        resultTitle.textContent = "❌ Galat Jawaab";
        expBox.classList.add("wrong-ans");
        expText.innerHTML = `<strong>Sahi answer:</strong> ${q.options[q.correct]}<br><br>${q.explain}`;
    }
    
    document.getElementById("score-display").textContent = `Score: ${score}`;
    
    // Last question pe button text change
    const nextBtn = document.getElementById("next-btn");
    if (currentIndex === 9) {
        nextBtn.textContent = "Result Dekho →";
    } else {
        nextBtn.textContent = "Next Question →";
    }
}

function nextQuestion() {
    currentIndex++;
    
    if (currentIndex >= 10) {
        showResult();
    } else {
        showQuestion();
    }
}

function showResult() {
    hideAll();
    resultScreen.classList.remove("hidden");
    
    document.getElementById("final-score").textContent = score;
    
    const msg = document.getElementById("result-message");
    if (score >= 9) {
        msg.textContent = "🔥 Outstanding! Topper material ho tum!";
    } else if (score >= 7) {
        msg.textContent = "👏 Bahut accha! Thoda aur practice karo.";
    } else if (score >= 5) {
        msg.textContent = "😊 Theek hai, concepts clear karo aur dobara try karo.";
    } else {
        msg.textContent = "💪 Koi baat nahi! Explanation padho aur phir se try karo. Seekhna important hai.";
    }
}

function restartQuiz() {
    startQuiz(selectedCategory);
}

// Initial
goHome();
