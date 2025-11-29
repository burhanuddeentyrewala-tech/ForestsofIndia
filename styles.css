:root {
  --bg: #02130b;
  --bg-soft: rgba(6, 46, 27, 0.92);
  --card-bg: rgba(8, 47, 35, 0.9);
  --accent: #4ade80;              /* bright green */
  --accent-soft: rgba(74, 222, 128, 0.27);
  --accent-secondary: #22c55e;
  --accent-warm: #facc15;         /* warm yellow */
  --accent-earth: #f97316;        /* earthy orange */
  --text: #ecfdf5;
  --muted: #a7f3d0;
  --danger: #fecaca;
  --success: #bbf7d0;
  --border-soft: rgba(16, 185, 129, 0.4);
  --radius-xl: 24px;
  --shadow-soft: 0 18px 45px rgba(2, 6, 23, 0.7);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  font-family: "Poppins", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  color: var(--text);
  background:
    radial-gradient(circle at top left, #064e3b, transparent 55%),
    radial-gradient(circle at bottom right, #022c22, transparent 55%),
    var(--bg);
  scroll-behavior: smooth;
}

/* Navbar */

.navbar {
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.5rem;
  margin: 0.75rem auto 0;
  max-width: 1150px;
  border-radius: 999px;
  backdrop-filter: blur(18px);
  border: 1px solid var(--border-soft);
  background: linear-gradient(120deg, rgba(6, 78, 59, 0.95), rgba(22, 101, 52, 0.85));
}

.navbar nav {
  display: flex;
  gap: 1rem;
  font-size: 0.9rem;
  flex-wrap: wrap;
}

.navbar a {
  text-decoration: none;
  color: var(--muted);
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  transition: background 0.2s, color 0.2s;
}

.navbar a:hover {
  background: var(--accent-soft);
  color: var(--text);
}

.logo {
  font-weight: 700;
  font-size: 1.1rem;
}

.teacher-chip {
  font-size: 0.7rem;
  padding: 0.35rem 0.8rem;
  border-radius: 999px;
  background: rgba(4, 120, 87, 0.9);
  border: 1px solid rgba(74, 222, 128, 0.6);
  color: #ecfdf5;
}

/* Hero */

.hero {
  min-height: 72vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem 2rem;
  position: relative;
  overflow: hidden;
}

.hero-bg-leaves {
  position: absolute;
  inset: -10%;
  background:
    radial-gradient(circle at 10% 10%, rgba(190, 242, 100, 0.12), transparent 55%),
    radial-gradient(circle at 90% 80%, rgba(52, 211, 153, 0.18), transparent 55%);
  opacity: 0.9;
  pointer-events: none;
}

.hero-content {
  max-width: 780px;
  text-align: center;
  animation: floatIn 0.8s ease-out;
  position: relative;
}

.hero-subtitle {
  font-size: 0.9rem;
  color: var(--muted);
  margin: 0;
}

.hero-teacher-name {
  font-weight: 600;
  color: var(--accent-warm);
  margin-top: 0.15rem;
  margin-bottom: 0.7rem;
}

.hero h1 {
  font-size: clamp(2.4rem, 4vw, 3.1rem);
  margin-bottom: 0.5rem;
}

.hero p {
  color: var(--muted);
  max-width: 560px;
  margin: 0 auto 1.5rem;
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1.25rem;
}

.hero-badges {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  font-size: 0.75rem;
}

.hero-badges span {
  padding: 0.25rem 0.7rem;
  border-radius: 999px;
  border: 1px solid rgba(34, 197, 94, 0.5);
  background: rgba(6, 95, 70, 0.85);
}

/* Sections */

.section {
  max-width: 1150px;
  margin: 0 auto;
  padding: 2rem 1rem 3rem;
}

.section-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.section-header h2 {
  font-size: 1.9rem;
  margin-bottom: 0.25rem;
}

/* Filters */

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: flex-start;
  margin-bottom: 1rem;
}

.filters label {
  font-size: 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  color: var(--muted);
}

.filters select,
.filters input {
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  border: 1px solid var(--border-soft);
  background: rgba(6, 78, 59, 0.9);
  color: var(--text);
}

/* Forest Grid */

.forest-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(235px, 1fr));
  gap: 1.1rem;
}

.forest-card {
  position: relative;
  border-radius: var(--radius-xl);
  border: 1px solid var(--border-soft);
  background: var(--card-bg);
  box-shadow: var(--shadow-soft);
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.forest-card::before {
  content: "";
  position: absolute;
  inset: -35%;
  background: radial-gradient(circle at top, rgba(74, 222, 128, 0.24), transparent 60%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.forest-card:hover {
  transform: translateY(-4px) scale(1.01);
  border-color: var(--accent);
  box-shadow: 0 25px 50px rgba(5, 46, 22, 0.9);
}

.forest-card:hover::before {
  opacity: 1;
}

.forest-image {
  height: 140px;
  background-size: cover;
  background-position: center;
  position: relative;
}

.forest-image::after {
  content: "Click to learn more";
  position: absolute;
  right: 0.6rem;
  bottom: 0.5rem;
  font-size: 0.7rem;
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.45);
  border: 1px solid rgba(248, 250, 252, 0.4);
}

.forest-body {
  padding: 0.8rem 0.9rem 0.9rem;
}

.forest-name {
  font-weight: 600;
  margin-bottom: 0.1rem;
}

.forest-state {
  font-size: 0.8rem;
  color: var(--muted);
  margin-bottom: 0.3rem;
}

.forest-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin-bottom: 0.4rem;
}

.tag {
  font-size: 0.7rem;
  padding: 0.18rem 0.5rem;
  border-radius: 999px;
  border: 1px solid rgba(45, 212, 191, 0.6);
  background: rgba(6, 78, 59, 0.9);
}

.forest-snippet {
  font-size: 0.75rem;
  color: var(--muted);
}

/* Games layout */

.games-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  gap: 1.5rem;
}

@media (max-width: 900px) {
  .games-layout {
    grid-template-columns: 1fr;
  }
}

/* Game cards */

.game-card {
  padding: 1.25rem;
  position: relative;
}

.game-card h3 {
  margin-top: 0;
  margin-bottom: 0.35rem;
}

.game-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top left, rgba(250, 204, 21, 0.18), transparent 70%);
  opacity: 0.8;
  pointer-events: none;
}

/* Quiz */

.quiz-progress {
  font-size: 0.8rem;
  color: var(--muted);
  margin-bottom: 0.4rem;
}

.quiz-question {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.quiz-options {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 0.5rem;
}

.quiz-option {
  border-radius: 999px;
  border: 1px solid var(--border-soft);
  padding: 0.35rem 0.75rem;
  background: rgba(6, 78, 59, 0.95);
  cursor: pointer;
  font-size: 0.85rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.2s, border-color 0.2s, transform 0.05s;
}

.quiz-option span {
  pointer-events: none;
}

.quiz-option:hover:not(.disabled) {
  background: var(--accent-soft);
  transform: translateY(-1px);
}

.quiz-option.correct {
  border-color: var(--success);
}

.quiz-option.wrong {
  border-color: var(--danger);
}

.quiz-option.disabled {
  opacity: 0.75;
  cursor: default;
}

.quiz-feedback {
  min-height: 1.2rem;
  font-size: 0.85rem;
}

.quiz-score {
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: var(--muted);
}

.quiz-controls {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

/* Guess game */

.guess-clue {
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
}

.guess-options {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 0.5rem;
}

.guess-btn {
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  border: 1px solid var(--border-soft);
  background: rgba(6, 78, 59, 0.95);
  font-size: 0.85rem;
  cursor: pointer;
  text-align: left;
  transition: background 0.2s, border-color 0.2s;
}

.guess-btn:hover:not(.disabled) {
  background: var(--accent-soft);
}

.guess-btn.disabled {
  opacity: 0.75;
  cursor: default;
}

.guess-feedback {
  min-height: 1.2rem;
  font-size: 0.85rem;
}

.guess-scoreboard {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  margin-top: 0.5rem;
}

/* Teacher Spotlight */

.teacher-spotlight-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  gap: 1.25rem;
}

@media (max-width: 900px) {
  .teacher-spotlight-grid {
    grid-template-columns: 1fr;
  }
}

.teacher-showcase {
  padding: 1.3rem 1.4rem;
  border-left: 4px solid var(--accent-warm);
}

.highlight-quote {
  margin-top: 0.7rem;
  font-size: 0.9rem;
  color: var(--accent-warm);
}

.teacher-highlight-points ul {
  padding-left: 1.1rem;
  margin: 0.5rem 0 0;
  font-size: 0.85rem;
}

.teacher-highlight-points li {
  margin-bottom: 0.35rem;
}

/* Teacher cards */

.teacher-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 1.25rem;
}

@media (max-width: 800px) {
  .teacher-grid {
    grid-template-columns: 1fr;
  }
}

.teacher-card ul {
  padding-left: 1.1rem;
  margin: 0.5rem 0 0;
  font-size: 0.85rem;
}

.teacher-card li {
  margin-bottom: 0.35rem;
}

/* Modal */

.modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 60;
}

.modal-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(6, 20, 11, 0.92);
}

.modal-content {
  position: relative;
  max-width: 500px;
  width: 92%;
  padding: 1.4rem 1.4rem 1.2rem;
  z-index: 70;
}

.modal-close {
  position: absolute;
  top: 0.6rem;
  right: 0.9rem;
  border: none;
  background: transparent;
  font-size: 1.6rem;
  color: var(--muted);
  cursor: pointer;
}

.modal-image-wrap {
  margin: 0.6rem 0 0.6rem;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(22, 163, 74, 0.6);
  max-height: 220px;
}

.modal-image-wrap img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fun-fact {
  margin-top: 0.7rem;
  font-size: 0.9rem;
  color: var(--accent-warm);
}

/* Generic */

.btn {
  padding: 0.45rem 0.95rem;
  border-radius: 999px;
  border: 1px solid transparent;
  font-size: 0.85rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  white-space: nowrap;
}

.btn.primary {
  background: linear-gradient(135deg, var(--accent), var(--accent-earth));
  border-color: transparent;
  color: #052e16;
  font-weight: 600;
}

.btn.secondary {
  background: rgba(6, 95, 70, 0.9);
  border-color: rgba(16, 185, 129, 0.7);
  color: var(--text);
}

.btn.tertiary {
  background: transparent;
  border-color: var(--border-soft);
  color: var(--muted);
}

.btn:disabled {
  opacity: 0.6;
  cursor: default;
}

.glass-card {
  background: var(--bg-soft);
  border-radius: var(--radius-xl);
  border: 1px solid var(--border-soft);
  box-shadow: var(--shadow-soft);
  backdrop-filter: blur(18px);
}

.muted {
  color: var(--muted);
  font-size: 0.84rem;
}

.hidden {
  display: none !important;
}

/* Scroll to top */

.scroll-top-btn {
  position: fixed;
  bottom: 1.25rem;
  right: 1.1rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 999px;
  border: 1px solid rgba(34, 197, 94, 0.65);
  background: rgba(6, 95, 70, 0.95);
  cursor: pointer;
  font-size: 1.1rem;
  box-shadow: var(--shadow-soft);
  z-index: 80;
}

/* Footer */

.site-footer {
  border-top: 1px solid rgba(22, 163, 74, 0.4);
  padding: 0.9rem 1.2rem;
  margin-top: 1rem;
  background: radial-gradient(circle at top, rgba(6, 95, 70, 0.9), rgba(2, 20, 12, 0.98));
}

.footer-inner {
  max-width: 1150px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  font-size: 0.8rem;
}

.footer-credit {
  text-align: right;
}

.footer-teacher-name {
  color: var(--accent-warm);
  font-weight: 600;
}

/* Animations */

@keyframes floatIn {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@media (max-width: 700px) {
  .navbar {
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}
