import { Question } from "../types/quiz";

export const quizQuestions: Question[] = [
  {
    id: 1,
    question:
      "What is considered the hypothetical 5th fundamental force of nature?",
    options: ["Gravity", "Dark Energy", "Quintessence", "Electroweak Force"],
    correctAnswer: 2,
    category: "Physics",
    difficulty: "hard",
  },
  {
    id: 2,
    question:
      "Which of the following could be a potential successor to silicon in future processors?",
    options: ["Copper", "Graphene", "Plastic", "Silicone"],
    correctAnswer: 1,
    category: "Technology",
    difficulty: "medium",
  },
  {
    id: 3,
    question:
      "In quantum computing, what is the basic unit of quantum information?",
    options: ["Bit", "Qubit", "Byte", "Entangle"],
    correctAnswer: 1,
    category: "Quantum Computing",
    difficulty: "medium",
  },
  {
    id: 4,
    question:
      "Which ancient structure is still not fully understood in terms of its construction method?",
    options: [
      "Eiffel Tower",
      "Great Pyramid of Giza",
      "Taj Mahal",
      "Colosseum",
    ],
    correctAnswer: 1,
    category: "History",
    difficulty: "easy",
  },
  {
    id: 5,
    question: "What does the Drake Equation attempt to estimate?",
    options: [
      "The weight of black holes",
      "The age of the universe",
      "The number of extraterrestrial civilizations",
      "The spread of viruses in populations",
    ],
    correctAnswer: 2,
    category: "Astrobiology",
    difficulty: "hard",
  },
  {
    id: 6,
    question:
      "Which mysterious particle is known for barely interacting with matter?",
    options: ["Photon", "Electron", "Neutrino", "Muon"],
    correctAnswer: 2,
    category: "Particle Physics",
    difficulty: "medium",
  },
  {
    id: 7,
    question:
      "Which phenomenon is theorized to connect distant points in spacetime?",
    options: ["Dark Matter", "Gravity Wells", "Wormholes", "String Tension"],
    correctAnswer: 2,
    category: "Astrophysics",
    difficulty: "medium",
  },
  {
    id: 8,
    question:
      "Which field studies the simulation of consciousness and emotions in machines?",
    options: [
      "Robotics",
      "Neuroscience",
      "Artificial General Intelligence",
      "Cybernetics",
    ],
    correctAnswer: 2,
    category: "AI",
    difficulty: "hard",
  },
  {
    id: 9,
    question:
      "Which concept suggests the universe may be a holographic projection?",
    options: [
      "Multiverse Theory",
      "Big Bounce",
      "Holographic Principle",
      "Cosmic Inflation",
    ],
    correctAnswer: 2,
    category: "Cosmology",
    difficulty: "hard",
  },
  {
    id: 10,
    question:
      "What could theoretically travel faster than light according to hypothetical particles?",
    options: ["Quasars", "Neutrinos", "Tachyons", "Pulsars"],
    correctAnswer: 2,
    category: "Theoretical Physics",
    difficulty: "hard",
  },
];
