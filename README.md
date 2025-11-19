# ReactJS Quiz App Template

<div align="center">
  <img src="./src/assets/icons/app-logo.svg" width="100" alt="React Quiz App Logo" />
  <h1>🚀 React Quiz App Template</h1>
  <p>
    A modern, fully-featured quiz application template built with React, Vite, and Tailwind CSS. Perfect for developers looking to build and customize an interactive quiz platform with a premium, Apple-inspired UI.
  </p>
  <a href="https://react-quiz-app-template-self.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Live_Demo-View_Here-blue?style=for-the-badge&logo=vercel" alt="Live Demo" />
  </a>
</div>

<br />

![React Quiz App Template Cover Image](./src/assets/images/ReactJS-Quiz-App-Template.jpg)


## ✨ Features

This template provides a solid foundation with a rich set of features, allowing you to focus on what makes your quiz unique.

- 🎨 **Sleek, Modern UI**: Inspired by Apple Music, with smooth animations and transitions.
- 🌗 **Light & Dark Modes**: Seamless theme switching with a delightful toggle animation.
- 📚 **Multiple Question Types**: Supports MCQs, Multiple Answer Questions (MAQs), and True/False.
- 💻 **Code Snippets & Images**: Easily embed formatted code blocks and images within questions.
- ⏱️ **Interactive Timer**: Visual timer with a circular progress bar to create a sense of urgency.
- 📊 **Detailed Results**: Comprehensive results screen with score, time taken, and answer review.
- 📱 **Fully Responsive**: A beautiful and consistent experience on all devices.
- 🔧 **Easily Customizable**: Built with a modular structure for easy customization and extension.
- ⚡️ **Fast & Performant**: Built with Vite for a lightning-fast development experience and optimized builds.

## 🛠️ Tech Stack

This project leverages a modern, powerful tech stack to ensure a great developer experience and a high-quality end product.

- **React**: For building the user interface.
- **Vite**: As the build tool and development server.
- **TypeScript**: For static typing and improved code quality.
- **Tailwind CSS**: For utility-first styling and theming.
- **React Context**: For simple, effective state management

### Prerequisites

Make sure you have Node.js (version 18 or higher) and npm installed.

### Installation


1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/react-quiz-app-template.git
    cd react-quiz-app-template
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:5173`.

## 🎨 Customization

This template is designed to be easily customized. Here’s how you can tailor it to your needs.

### Changing the Theme

All theme colors and animations are defined as CSS custom properties in `src/index.css`. Modify the variables under the `@theme` and `@variant dark` rules to change the app's appearance.

```css
/* src/index.css */
@theme {
  /* Light Theme */
  --color-theme-color: #fa2d55;
  --color-card-bg: #ffffff;
  /* ...and more */
}

@variant dark {
  /* Dark Theme */
  --color-theme-color: #fa2d55;
  --color-card-bg: #1c1c1e;
  /* ...and more */
}
```
### Adding Quiz Topics

Modify the `src/data/quizTopics.tsx` file to add, remove, or edit quiz categories. Ensure the `title` matches the `topic` key in your question data files.

```tsx
// src/data/quizTopics.tsx
export const quizTopics: QuizTopic[] = [
  {
    title: 'React', // This must match the 'topic' in your question file
    icon: <ReactIcon />,
  },
  // ...
];
```
### Adding Questions

Quiz questions are located in the `src/data/QuizQuestions/` directory. You can create new files or edit existing ones. The structure supports question types, code snippets, images, and scoring.

## 🚀 Deployment

This Vite application is ready to deploy on any modern hosting platform that supports Node.js.

### Vercel

The easiest way to deploy is with Vercel. Simply connect your Git repository, and Vercel will automatically detect the Vite configuration and deploy your app.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📧 Contact

Ekky Spurgeon – spurgeonpaul11@outlook.com

This project is licensed under the MIT License. See the LICENSE file for details.
