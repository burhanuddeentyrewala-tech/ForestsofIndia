// --- Data: Forests of India ---
// You and your students can easily add more forests here.
const forests = [
  {
    id: "sundarbans",
    name: "Sundarbans Mangrove Forest",
    state: "West Bengal",
    region: "East",
    type: "Mangrove forest & UNESCO World Heritage Site",
    keySpecies: "Royal Bengal Tiger, saltwater crocodile, fishing cats",
    fact: "It is the largest mangrove forest in the world and is shared by India and Bangladesh."
  },
  {
    id: "gir",
    name: "Gir Forest",
    state: "Gujarat",
    region: "West",
    type: "Dry deciduous forest and savanna",
    keySpecies: "Asiatic lion, leopards, sambar, chital",
    fact: "Gir is the only natural home of the Asiatic lion in the world."
  },
  {
    id: "kaziranga",
    name: "Kaziranga National Park",
    state: "Assam",
    region: "Northeast",
    type: "Floodplain grasslands and forests",
    keySpecies: "Indian one-horned rhinoceros, wild water buffalo, swamp deer",
    fact: "Kaziranga holds about two-thirds of the world’s population of the one-horned rhinoceros."
  },
  {
    id: "nilgiri",
    name: "Nilgiri Biosphere Reserve",
    state: "Tamil Nadu, Kerala, Karnataka",
    region: "South",
    type: "Evergreen, moist deciduous, and shola forests",
    keySpecies: "Nilgiri tahr, lion-tailed macaque, elephants",
    fact: "It was the first biosphere reserve in India and is part of the Western Ghats."
  },
  {
    id: "jim-corbett",
    name: "Jim Corbett National Park",
    state: "Uttarakhand",
    region: "North",
    type: "Sal forest, riverine belts, and grasslands",
    keySpecies: "Bengal tiger, elephants, gharial, many bird species",
    fact: "It is India’s oldest national park and was first established as Hailey National Park in 1936."
  },
  {
    id: "periyar",
    name: "Periyar Tiger Reserve",
    state: "Kerala",
    region: "South",
    type: "Tropical evergreen and moist deciduous forest",
    keySpecies: "Elephants, tigers, gaur, lion-tailed macaque",
    fact: "It is famous for its artificial lake created by the Mullaperiyar Dam, which is now a wildlife hotspot."
  },
  {
    id: "kanha",
    name: "Kanha National Park",
    state: "Madhya Pradesh",
    region: "Central",
    type: "Moist and dry deciduous forest with meadows",
    keySpecies: "Barasingha (swamp deer), tiger, wild dogs",
    fact: "Kanha’s successful conservation programme brought the barasingha back from near extinction."
  },
  {
    id: "manas",
    name: "Manas National Park",
    state: "Assam",
    region: "Northeast",
    type: "Grassland and semi-evergreen forest",
    keySpecies: "Golden langur, pygmy hog, clouded leopard",
    fact: "It is a UNESCO World Heritage Site and also a Project Tiger reserve, elephant reserve, and biosphere reserve."
  }
];

// --- Quiz Questions ---
// Questions are loosely based on the forest data above.
const quizQuestions = [
  {
    question: "Which forest is famous as the only natural home of the Asiatic lion?",
    options: ["Sundarbans", "Gir Forest", "Kanha", "Jim Corbett"],
    answerIndex: 1,
    explanation: "Gir Forest in Gujarat is the only natural home of the Asiatic lion."
  },
  {
    question: "Which forest is known for its mangroves and Royal Bengal Tigers?",
    options: ["Periyar", "Kaziranga", "Sundarbans", "Manas"],
    answerIndex: 2,
    explanation: "The Sundarbans is the world’s largest mangrove forest and home to the Royal Bengal Tiger."
  },
  {
    question: "Kaziranga National Park is best known for which animal?",
    options: ["Asiatic lion", "One-horned rhinoceros", "Snow leopard", "Red panda"],
    answerIndex: 1,
    explanation: "Kaziranga holds a large population of the Indian one-horned rhinoceros."
  },
  {
    question: "Nilgiri Biosphere Reserve is part of which mountain range?",
    options: ["Himalayas", "Aravallis", "Western Ghats", "Eastern Ghats"],
    answerIndex: 2,
    explanation: "The Nilgiri Biosphere Reserve is part of the Western Ghats."
  },
  {
    question: "Which is India’s oldest national park?",
    options: ["Jim Corbett", "Kanha", "Gir", "Periyar"],
    answerIndex: 0,
    explanation: "Jim Corbett National Park in Uttarakhand is India’s oldest national park."
  },
  {
    question: "Which forest is spread across Tamil Nadu, Kerala, and Karnataka?",
    options: ["Nilgiri Biosphere Reserve", "Manas", "Kanha", "Gir"],
    answerIndex: 0,
    explanation: "The Nilgiri Biosphere Reserve spans three southern states."
  }
];

// --- Guess-the-Forest clues ---
const guessClues = [
  {
    forestId: "sundarbans",
    clue: "I am a mangrove forest shared by India and Bangladesh, home to swimming tigers."
  },
  {
    forestId: "gir",
    clue: "If you want to see the Asiatic lion in the wild, you must visit me in Gujarat."
  },
  {
    forestId: "kaziranga",
    clue: "I’m famous for one-horned rhinoceroses and floodplains in Assam."
  },
  {
    forestId: "nilgiri",
    clue: "I’m the first biosphere reserve in India, located in the Western Ghats."
  },
  {
    forestId: "jim-corbett",
    clue: "I am India’s oldest national park and a popular tiger reserve in Uttarakhand."
  },
  {
    forestId: "periyar",
    clue: "I have a lake formed by a dam in Kerala and I’m a well-known tiger reserve."
  }
];

document.addEventListener("DOMContentLoaded", () => {
  // DOM references
  const forestGrid = document.getElementById("forest-grid");
  const regionFilter = document.getElementById("region-filter");
  const searchInput = document.getElementById("search-input");
  const noResultsText = document.getElementById("no-results");

  const forestModal = document.getElementById("forest-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalLocation = document.getElementById("modal-location");
  const modalType = document.getElementById("modal-type");
  const modalSpecies = document.getElementById("modal-species");
  const modalFact = document.getElementById("modal-fact");
  const modalCloseBtn = document.getElementById("modal-close-btn");

  const startExploringBtn = document.getElementById("start-exploring-btn");
  const jumpToQuizBtn = document.getElementById("jump-to-quiz-btn");

  const scrollTopBtn = document.getElementById("scroll-top-btn");

  // Quiz DOM
  const quizQuestionEl = document.getElementById("quiz-question");
  const quizOptionsEl = document.getElementById("quiz-options");
  const quizProgressEl = document.getElementById("quiz-progress");
  const quizFeedbackEl = document.getElementById("quiz-feedback");
  const quizScoreEl = document.getElementById("quiz-score");
  const quizNextBtn = document.getElementById("quiz-next-btn");
  const quizRestartBtn = document.getElementById("quiz-restart-btn");

  // Guess game DOM
  const guessClueEl = document.getElementById("guess-clue");
  const guessOptionsEl = document.getElementById("guess-options");
  const guessFeedbackEl = document.getElementById("guess-feedback");
  const guessNewRoundBtn = document.getElementById("guess-new-round-btn");
  const guessCorrectCountEl = document.getElementById("guess-correct-count");
  const guessWrongCountEl = document.getElementById("guess-wrong-count");

  // State
  let filteredForests = [...forests];

  let currentQuestionIndex = 0;
  let quizScore = 0;
  let optionSelected = false;

  let guessCorrectCount = 0;
  let guessWrongCount = 0;
  let currentGuessAnswerId = null;

  // --- Utility functions ---

  function smoothScrollTo(hash) {
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  // --- Forest cards rendering & filtering ---

  function renderForestCards() {
    forestGrid.innerHTML = "";
    if (!filteredForests.length) {
      noResultsText.classList.remove("hidden");
      return;
    }
    noResultsText.classList.add("hidden");

    filteredForests.forEach((forest) => {
      const card = document.createElement("article");
      card.className = "forest-card";
      card.dataset.id = forest.id;

      card.innerHTML = `
        <div class="forest-name">${forest.name}</div>
        <div class="forest-state">${forest.state}</div>
        <div class="forest-tags">
          <span class="tag">${forest.region} India</span>
          <span class="tag">${forest.type.split(" ")[0]} forest</span>
        </div>
        <div class="forest-snippet">
          Key species: ${forest.keySpecies.split(",")[0]} & more…
        </div>
      `;

      card.addEventListener("click", () => openForestModal(forest.id));
      forestGrid.appendChild(card);
    });
  }

  function applyFilters() {
    const regionValue = regionFilter.value;
    const searchValue = searchInput.value.toLowerCase().trim();

    filteredForests = forests.filter((forest) => {
      const matchesRegion =
        regionValue === "all" ||
        forest.region.toLowerCase() === regionValue.toLowerCase();

      const combined = `${forest.name} ${forest.state} ${forest.type}`.toLowerCase();
      const matchesSearch = combined.includes(searchValue);

      return matchesRegion && matchesSearch;
    });

    renderForestCards();
  }

  // --- Modal logic ---

  function openForestModal(forestId) {
    const forest = forests.find((f) => f.id === forestId);
    if (!forest) return;

    modalTitle.textContent = forest.name;
    modalLocation.textContent = `${forest.state} • ${forest.region} India`;
    modalType.textContent = `Forest type: ${forest.type}`;
    modalSpecies.textContent = `Key species: ${forest.keySpecies}.`;
    modalFact.textContent = `Fun fact: ${forest.fact}`;

    forestModal.classList.remove("hidden");
  }

  function closeForestModal() {
    forestModal.classList.add("hidden");
  }

  // Close modal on backdrop click
  forestModal.addEventListener("click", (e) => {
    if (e.target === forestModal || e.target.classList.contains("modal-backdrop")) {
      closeForestModal();
    }
  });

  modalCloseBtn.addEventListener("click", closeForestModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !forestModal.classList.contains("hidden")) {
      closeForestModal();
    }
  });

  // --- Quiz logic ---

  function renderQuestion() {
    const total = quizQuestions.length;
    quizProgressEl.textContent = `Question ${currentQuestionIndex + 1} / ${total}`;

    const q = quizQuestions[currentQuestionIndex];
    quizQuestionEl.textContent = q.question;
    quizOptionsEl.innerHTML = "";
    quizFeedbackEl.textContent = "";
    optionSelected = false;
    quizNextBtn.disabled = true;

    q.options.forEach((optionText, index) => {
      const btn = document.createElement("button");
      btn.className = "quiz-option";
      btn.innerHTML = `<span>${optionText}</span>`;
      btn.addEventListener("click", () => handleOptionClick(btn, index));
      quizOptionsEl.appendChild(btn);
    });

    quizScoreEl.textContent = `Score: ${quizScore} / ${total}`;
  }

  function handleOptionClick(button, index) {
    if (optionSelected) return;
    optionSelected = true;

    const q = quizQuestions[currentQuestionIndex];

    const optionButtons = quizOptionsEl.querySelectorAll(".quiz-option");
    optionButtons.forEach((btn, i) => {
      btn.classList.add("disabled");
      if (i === q.answerIndex) {
        btn.classList.add("correct");
      }
      if (i === index && i !== q.answerIndex) {
        btn.classList.add("wrong");
      }
    });

    if (index === q.answerIndex) {
      quizScore++;
      quizFeedbackEl.textContent = randomPositiveFeedback() + " " + q.explanation;
    } else {
      quizFeedbackEl.textContent =
        randomTryAgainMessage() + " " + q.explanation;
    }

    quizScoreEl.textContent = `Score: ${quizScore} / ${quizQuestions.length}`;
    quizNextBtn.disabled = false;

    if (currentQuestionIndex === quizQuestions.length - 1) {
      quizNextBtn.textContent = "Finish 🎉";
    } else {
      quizNextBtn.textContent = "Next ▶";
    }
  }

  function nextQuestion() {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      currentQuestionIndex++;
      renderQuestion();
    } else {
      showQuizSummary();
    }
  }

  function showQuizSummary() {
    quizQuestionEl.textContent = "Quiz complete! 🎉";
    quizOptionsEl.innerHTML = "";
    quizFeedbackEl.textContent = "";
    quizNextBtn.disabled = true;

    const total = quizQuestions.length;
    const percentage = Math.round((quizScore / total) * 100);
    let message = "";

    if (percentage === 100) {
      message = "Perfect score! You’re a true Forest Ranger! 🌳🦁";
    } else if (percentage >= 60) {
      message = "Well done! You know your forests quite well. 🌿";
    } else {
      message = "Nice try! Review the cards and try again. 📚";
    }

    quizScoreEl.textContent = `Final score: ${quizScore} / ${total} (${percentage}%)`;
    quizFeedbackEl.textContent = message;
    quizRestartBtn.classList.remove("hidden");
  }

  function restartQuiz() {
    currentQuestionIndex = 0;
    quizScore = 0;
    quizRestartBtn.classList.add("hidden");
    renderQuestion();
  }

  function randomPositiveFeedback() {
    const messages = [
      "Correct! 🌟",
      "Nice one! ✅",
      "Great job! 💚",
      "You got it! 🎯"
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  }

  function randomTryAgainMessage() {
    const messages = [
      "Not quite, but you’re learning! 🙂",
      "Close! Keep going. 🌱",
      "Good attempt! Let’s see the explanation. 📘"
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  }

  // --- Guess-the-Forest game ---

  function newGuessRound() {
    guessOptionsEl.innerHTML = "";
    guessFeedbackEl.textContent = "";

    // Pick a random clue
    const clue = guessClues[Math.floor(Math.random() * guessClues.length)];
    currentGuessAnswerId = clue.forestId;
    guessClueEl.textContent = clue.clue;

    // Build options: correct + 3 random different forests
    const answerForest = forests.find((f) => f.id === clue.forestId);
    const otherForests = forests.filter((f) => f.id !== clue.forestId);

    shuffleArray(otherForests);

    const options = [answerForest, ...otherForests.slice(0, 3)];
    shuffleArray(options);

    options.forEach((forest) => {
      const btn = document.createElement("button");
      btn.className = "guess-btn";
      btn.textContent = forest.name;
      btn.addEventListener("click", () => handleGuessClick(btn, forest.id));
      guessOptionsEl.appendChild(btn);
    });
  }

  function handleGuessClick(button, forestId) {
    const buttons = guessOptionsEl.querySelectorAll(".guess-btn");
    buttons.forEach((btn) => btn.classList.add("disabled"));

    if (forestId === currentGuessAnswerId) {
      guessCorrectCount++;
      guessFeedbackEl.textContent = "Correct! 🌟 You picked the right forest.";
    } else {
      guessWrongCount++;
      const answerForest = forests.find((f) => f.id === currentGuessAnswerId);
      guessFeedbackEl.textContent =
        `Nice try! The correct answer was: ${answerForest ? answerForest.name : "the correct forest"}.`;
    }

    guessCorrectCountEl.textContent = String(guessCorrectCount);
    guessWrongCountEl.textContent = String(guessWrongCount);
  }

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // --- Scroll top button ---

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.remove("hidden");
    } else {
      scrollTopBtn.classList.add("hidden");
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // --- Event bindings ---

  regionFilter.addEventListener("change", applyFilters);
  searchInput.addEventListener("input", applyFilters);

  startExploringBtn.addEventListener("click", () => smoothScrollTo("#forests"));
  jumpToQuizBtn.addEventListener("click", () => smoothScrollTo("#games"));

  quizNextBtn.addEventListener("click", nextQuestion);
  quizRestartBtn.addEventListener("click", restartQuiz);

  guessNewRoundBtn.addEventListener("click", newGuessRound);

  // --- Initial render ---

  applyFilters(); // renders forest cards
  renderQuestion(); // sets up quiz
  newGuessRound(); // starts guess game
});
