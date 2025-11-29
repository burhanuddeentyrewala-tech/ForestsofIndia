// --- Data: Forests of India ---
// Each forest now has geography & image data.
const forests = [
  {
    id: "sundarbans",
    name: "Sundarbans Mangrove Forest",
    state: "West Bengal (and Bangladesh)",
    region: "East",
    type: "Mangrove forest & UNESCO World Heritage Site",
    area: "Covers about 10,000 km² across India and Bangladesh.",
    climate: "Tropical coastal climate with high humidity and heavy monsoon rainfall.",
    locationNote: "Situated in the Ganges–Brahmaputra–Meghna delta on the Bay of Bengal.",
    keySpecies: "Royal Bengal Tiger, saltwater crocodile, fishing cat, spotted deer.",
    bestTime: "November to March (drier and slightly cooler weather).",
    extra: "The mangroves protect coastal areas from cyclones and storm surges.",
    fact: "The Sundarbans is the world’s largest mangrove forest where tigers are strong swimmers.",
    image: "images/sundarbans.jpg"
  },
  {
    id: "gir",
    name: "Gir Forest",
    state: "Gujarat",
    region: "West",
    type: "Dry deciduous forest and savanna",
    area: "The protected area is about 1,412 km² including sanctuary and national park.",
    climate: "Hot summers and mild winters with a long dry season.",
    locationNote: "Located in the Saurashtra region of Gujarat, near the Kathiawar Peninsula.",
    keySpecies: "Asiatic lion, leopards, sambar, chital, nilgai.",
    bestTime: "December to March, when temperatures are more comfortable.",
    extra: "Gir is also home to many Maldhari pastoral communities living around the forest.",
    fact: "It is the only natural home of the Asiatic lion in the world.",
    image: "images/gir.jpg"
  },
  {
    id: "kaziranga",
    name: "Kaziranga National Park",
    state: "Assam",
    region: "Northeast",
    type: "Floodplain grasslands and subtropical forest",
    area: "Covers over 850 km² along the Brahmaputra floodplains.",
    climate: "Humid subtropical with heavy monsoon rains and short, mild winters.",
    locationNote: "Located on the banks of the Brahmaputra River in central Assam.",
    keySpecies: "Indian one-horned rhinoceros, wild water buffalo, swamp deer, tigers.",
    bestTime: "November to April (park normally closed during heavy monsoon months).",
    extra: "Kaziranga is also an Important Bird Area with many migratory birds.",
    fact: "Kaziranga holds about two-thirds of the world’s population of the one-horned rhinoceros.",
    image: "images/kaziranga.jpg"
  },
  {
    id: "nilgiri",
    name: "Nilgiri Biosphere Reserve",
    state: "Tamil Nadu, Kerala, Karnataka",
    region: "South",
    type: "Evergreen, moist deciduous, and shola forests",
    area: "Spreads over 5,500+ km² across the Western Ghats.",
    climate: "Cooler high-altitude climate with misty hills and heavy rainfall in monsoon.",
    locationNote: "Covers parts of the Western Ghats including Ooty, Wayanad, and Bandipur regions.",
    keySpecies: "Nilgiri tahr, lion-tailed macaque, Asian elephant, many endemic plants.",
    bestTime: "October to May, when the hills are lush and visibility is good.",
    extra: "It was the first biosphere reserve in India and is rich in endemic species.",
    fact: "Nilgiri means “Blue Mountains”, named after the bluish haze of the forests.",
    image: "images/nilgiri.jpg"
  },
  {
    id: "jim-corbett",
    name: "Jim Corbett National Park",
    state: "Uttarakhand",
    region: "North",
    type: "Sal forest, riverine belts, and grasslands",
    area: "Covers about 1,300 km² including core and buffer zones.",
    climate: "Subtropical with hot summers, cool winters, and monsoon rains.",
    locationNote: "Situated in the foothills of the Himalayas along the Ramganga River.",
    keySpecies: "Bengal tiger, elephants, gharial, hog deer, over 500 bird species.",
    bestTime: "November to February for pleasant weather; different zones open in different seasons.",
    extra: "It is part of the larger Corbett Tiger Reserve under Project Tiger.",
    fact: "It is India’s oldest national park, first established in 1936 as Hailey National Park.",
    image: "images/jim-corbett.jpg"
  },
  {
    id: "periyar",
    name: "Periyar Tiger Reserve",
    state: "Kerala",
    region: "South",
    type: "Tropical evergreen and moist deciduous forest",
    area: "Covers around 925 km² in the Western Ghats.",
    climate: "Tropical with heavy rainfall and cool temperatures at higher elevations.",
    locationNote: "Located in the Cardamom Hills of the southern Western Ghats.",
    keySpecies: "Elephants, tigers, gaur, lion-tailed macaque, Malabar giant squirrel.",
    bestTime: "October to February; boat safaris on the Periyar Lake are popular.",
    extra: "The artificial Periyar Lake, formed by the Mullaperiyar Dam, is now a wildlife hotspot.",
    fact: "Tourists often see elephant herds grazing near the lake’s edge.",
    image: "images/periyar.jpg"
  },
  {
    id: "kanha",
    name: "Kanha National Park",
    state: "Madhya Pradesh",
    region: "Central",
    type: "Moist and dry deciduous forest with meadows",
    area: "Spreads over 900+ km² as core tiger reserve area.",
    climate: "Tropical with cool winters and hot summers; dense forest keeps many areas pleasant.",
    locationNote: "Located in the Maikal range of the Satpuras in central India.",
    keySpecies: "Barasingha (swamp deer), tigers, wild dogs, leopards.",
    bestTime: "November to March for safaris and comfortable temperatures.",
    extra: "Kanha’s meadows inspired parts of Rudyard Kipling’s Jungle Book descriptions.",
    fact: "Its conservation programme brought the barasingha back from near extinction.",
    image: "images/kanha.jpg"
  },
  {
    id: "manas",
    name: "Manas National Park",
    state: "Assam",
    region: "Northeast",
    type: "Grassland and semi-evergreen forest",
    area: "Covers nearly 950 km² along the Himalayan foothills.",
    climate: "Subtropical with hot summers, monsoon rains, and cool winters.",
    locationNote: "Located along the Manas River, which forms a natural boundary with Bhutan.",
    keySpecies: "Golden langur, pygmy hog, clouded leopard, Indian rhinoceros.",
    bestTime: "November to April; post-monsoon period is especially scenic.",
    extra: "It is simultaneously a Tiger Reserve, Elephant Reserve, Biosphere Reserve and World Heritage Site.",
    fact: "Manas is one of the few places where the critically endangered pygmy hog still survives.",
    image: "images/manas.jpg"
  },
  {
    id: "dang-forest",
    name: "Dang Forest of Gujarat",
    state: "Dang District, Southern Gujarat",
    region: "West",
    type: "Moist deciduous and bamboo-rich forest in the Sahyadri (Western Ghats) hills",
    area: "Dang district has around 1,700 km² of dense forested land within a total area of about 1,764 km².",
    climate: "High-rainfall tropical monsoon climate with cool, misty hills during the monsoon.",
    locationNote: "Situated in southern Gujarat near the border with Maharashtra, forming part of the northern Sahyadri range.",
    keySpecies: "Leopards, Indian giant squirrels, various hornbills, gaurs, and rich plant diversity.",
    bestTime: "November to April; monsoon brings waterfalls but very heavy rain.",
    extra: "Home to vibrant tribal communities such as Bhil, Kokna and Warli, whose culture is closely linked with the forest.",
    fact: "The area is sometimes linked with the ‘Dandakaranya’ of ancient texts and is known as the densest forest region of Gujarat.",
    image: "images/dang-forest.jpg"
  }
];

// --- Quiz Questions ---
const quizQuestions = [
  {
    question: "Which forest is famous as the only natural home of the Asiatic lion?",
    options: ["Sundarbans", "Gir Forest", "Kanha", "Jim Corbett"],
    answerIndex: 1,
    explanation: "Gir Forest in Gujarat is the only natural home of the Asiatic lion."
  },
  {
    question: "Which forest is known for its mangroves and Royal Bengal tigers that can even swim?",
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
    explanation: "The Nilgiri Biosphere Reserve is part of the Western Ghats or Sahyadri range."
  },
  {
    question: "Which is India’s oldest national park?",
    options: ["Jim Corbett", "Kanha", "Gir", "Periyar"],
    answerIndex: 0,
    explanation: "Jim Corbett National Park in Uttarakhand is India’s oldest national park."
  },
  {
    question: "Which forested district in southern Gujarat is known as the densest forest region of the state?",
    options: ["Dang Forest", "Rann of Kutch", "Gir Forest", "Thar Desert edge"],
    answerIndex: 0,
    explanation: "Dang district is famous for its dense forest cover in southern Gujarat."
  },
  {
    question: "Manas National Park lies along the border between India and which country?",
    options: ["Nepal", "Bhutan", "Bangladesh", "Sri Lanka"],
    answerIndex: 1,
    explanation: "Manas lies along the India–Bhutan border, following the Manas River."
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
    clue: "I’m the first biosphere reserve in India, high up in the Western Ghats."
  },
  {
    forestId: "jim-corbett",
    clue: "I am India’s oldest national park and a popular tiger reserve in Uttarakhand."
  },
  {
    forestId: "periyar",
    clue: "I have a large lake formed by a dam in Kerala and I’m a well-known tiger reserve."
  },
  {
    forestId: "dang-forest",
    clue: "I am a dense, hilly forest district in southern Gujarat, famous for tribal culture and heavy monsoon rains."
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
  const modalArea = document.getElementById("modal-area");
  const modalClimate = document.getElementById("modal-climate");
  const modalSpecies = document.getElementById("modal-species");
  const modalBestTime = document.getElementById("modal-besttime");
  const modalExtra = document.getElementById("modal-extra");
  const modalFact = document.getElementById("modal-fact");
  const modalImageWrap = document.getElementById("modal-image-wrap");
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

      const imgUrl = forest.image || "";

      card.innerHTML = `
        <div class="forest-image" style="background-image:url('${imgUrl}')"></div>
        <div class="forest-body">
          <div class="forest-name">${forest.name}</div>
          <div class="forest-state">${forest.state}</div>
          <div class="forest-tags">
            <span class="tag">${forest.region} India</span>
            <span class="tag">${forest.type.split(" ")[0]} forest</span>
          </div>
          <div class="forest-snippet">
            ${forest.climate ? forest.climate : ""}<br/>
            <strong>Key species:</strong> ${forest.keySpecies.split(",")[0]} & more…
          </div>
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

      const combined = `${forest.name} ${forest.state} ${forest.type} ${forest.locationNote}`.toLowerCase();
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
    modalType.textContent = forest.type ? `Forest type: ${forest.type}` : "";
    modalArea.textContent = forest.area ? `Approximate area: ${forest.area}` : "";
    modalClimate.textContent = forest.climate ? `Climate: ${forest.climate}` : "";
    modalSpecies.textContent = forest.keySpecies ? `Key species: ${forest.keySpecies}` : "";
    modalBestTime.textContent = forest.bestTime ? `Best time to visit: ${forest.bestTime}` : "";
    modalExtra.textContent = forest.locationNote || forest.extra ? `${forest.locationNote || ""} ${forest.extra || ""}`.trim() : "";
    modalFact.textContent = forest.fact ? `Fun fact: ${forest.fact}` : "";

    modalImageWrap.innerHTML = "";
    if (forest.image) {
      const img = document.createElement("img");
      img.src = forest.image;
      img.alt = forest.name;
      modalImageWrap.appendChild(img);
    }

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

  applyFilters();   // renders forest cards
  renderQuestion(); // sets up quiz
  newGuessRound();  // starts guess game
});
