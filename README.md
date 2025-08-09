# Quiz App

Welcome to **Quiz App** – The Ultimate Quiz Experience!

Test your knowledge, challenge your mind, and have fun with this sleek and engaging quiz platform designed for learners, trivia lovers, and curious minds of all ages.

---

## Features

- **Diverse Question Formats**  
  Engage with multiple-choice, true/false, and short-answer questions across a variety of topics.

- **Real-Time Feedback**  
  Instantly see correct answers and explanations to boost your learning.

- **Progress Tracking**  
  Monitor your performance with scores and completion rates.

- **User-Friendly Interface**  
  Navigate effortlessly with a clean and intuitive design.

---

## Why Use Quiz App?

- **Interactive Learning**  
  Turn studying into a fun, interactive experience.

- **Personalized Challenges**  
  Quizzes adapt to your knowledge level and interests.

- **Accessible Anytime, Anywhere**  
  Learn at your own pace on any device.

---

## Tech Stack

- **React**  
- **TypeScript (TSX)**  
- **JavaScript**

---

## Get Started

Try it out now at:  
[https://quiz-app-c8g7-l33b0fau2-aadyas-projects-617a8309.vercel.app/](https://quiz-app-c8g7-l33b0fau2-aadyas-projects-617a8309.vercel.app/)

Whether you're preparing for exams, testing trivia knowledge, or just passing the time, Quiz App offers a fun and educational experience.


---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
