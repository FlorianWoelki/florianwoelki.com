interface ProjectModel {
  title: string;
  link: string;
  linkTitle: string;
  tags: (
    | string
    | typeof ProgrammingLanguageTag
    | typeof TechnologyTag
    | typeof TypeTag
  )[];
  description: string;
}

export const TypeTag = {
  Game: 'Game',
  DataScience: 'Data Science/AI',
  Backend: 'Backend',
  Frontend: 'Frontend',
  Mobile: 'Mobile',
};

export const ProgrammingLanguageTag = {
  JavaScript: 'JavaScript',
  TypeScript: 'TypeScript',
  Go: 'Go',
  Python: 'Python',
  Java: 'Java',
  Swift: 'Swift',
  SQL: 'SQL',
  Solidity: 'Solidity',
  Dart: 'Dart',
};

export const TechnologyTag = {
  Vue: 'Vue',
  Nuxt: 'Nuxt',
  GraphQL: 'GraphQL',
  gRPC: 'gRPC',
  Tailwind: 'Tailwind',
  Redis: 'Redis',
  PostgreSQL: 'PostgreSQL',
  React: 'React',
  ReactNative: 'React Native',
  Node: 'Node',
  Docker: 'Docker',
  SpringBoot: 'SpringBoot',
  MySQL: 'MySQL',
  MongoDB: 'MongoDB',
  Tensorflow: 'Tensorflow',
  Scikitlearn: 'Scikitlearn',
  Blockchain: 'Blockchain',
  IndexedDB: 'IndexedDB',
  Flutter: 'Flutter',
  Firebase: 'Firebase',
  Electron: 'Electron',
};

export default [
  {
    title: 'Hotel Room Booking Chatbot',
    link: 'https://github.com/FlorianWoelki/hotel-room-booking-chatbot',
    linkTitle: 'github.com/FlorianWoelki/hotel-room-booking-chatbot',
    tags: [
      TypeTag.Frontend,
      ProgrammingLanguageTag.JavaScript,
      ProgrammingLanguageTag.TypeScript,
      TechnologyTag.React,
      TechnologyTag.Tailwind,
    ],
    description: `This frontend application represents a simple Chatbot which role is to guide the user through
                the hotel room booking process. The chatbot is really easy to use and scalable in any way.`,
  },
  {
    title: 'Go Board Game',
    link: 'https://github.com/FlorianWoelki/go-board-game',
    linkTitle: 'github.com/FlorianWoelki/go-board-game',
    tags: [
      TypeTag.Mobile,
      TypeTag.Game,
      ProgrammingLanguageTag.JavaScript,
      ProgrammingLanguageTag.TypeScript,
      TechnologyTag.ReactNative,
    ],
    description: `Because I am a big fan of Go, I wanted to have a mobile game which is perfectly suited for playing Go with
                a friend or with an AI. Therefore, I've tried to recreate this game in react native.`,
  },
  {
    title: 'uwrite',
    link: 'https://github.com/FlorianWoelki/uwrite',
    linkTitle: 'github.com/FlorianWoelki/uwrite',
    tags: [
      TypeTag.Frontend,
      ProgrammingLanguageTag.JavaScript,
      ProgrammingLanguageTag.TypeScript,
      TechnologyTag.IndexedDB,
      TechnologyTag.React,
      TechnologyTag.Tailwind,
      TechnologyTag.Electron,
    ],
    description: `uwrite is described as a online editor to take notes and capture code snippets with focus, VIM, and LaTeX.
                This editor has a IndexedDb to efficiently store all the taken notes and code snippets locally.`,
  },
  {
    title: 'Course POC',
    link: 'https://github.com/FlorianWoelki/course-poc',
    linkTitle: 'github.com/FlorianWoelki/course-poc',
    tags: [
      TypeTag.Mobile,
      ProgrammingLanguageTag.Dart,
      TechnologyTag.Flutter,
      TechnologyTag.Firebase,
    ],
    description: `This project consists of an easy proof of concept for designing a flutter app that consists of a course page,
                animations, and an interactive and beautiful design. In addition, this app integrates Firebase, FirebaseAuth, and FirebaseStorage.`,
  },
  {
    title: 'kira',
    link: 'https://github.com/FlorianWoelki/kira',
    linkTitle: 'github.com/FlorianWoelki/kira',
    tags: [TypeTag.Backend, ProgrammingLanguageTag.Go, TechnologyTag.Docker],
    description: `A remote docker based sandbox code execution engine written in Go. The goal of this project was to create
                an environment for running code of various programming languages.`,
  },
  {
    title: 'Insta Clone',
    link: 'https://github.com/FlorianWoelki/insta-clone',
    linkTitle: 'github.com/FlorianWoelki/insta-clone',
    tags: [
      TypeTag.Frontend,
      TypeTag.Backend,
      ProgrammingLanguageTag.TypeScript,
      ProgrammingLanguageTag.Go,
      ProgrammingLanguageTag.JavaScript,
      TechnologyTag.React,
      TechnologyTag.PostgreSQL,
      TechnologyTag.Tailwind,
      TechnologyTag.gRPC,
      TechnologyTag.Docker,
    ],
    description: `A scalable Instagram clone written in React and powered by powerful microservices written in Golang (WIP).`,
  },
  {
    title: 'raylib-collision',
    link: 'https://github.com/FlorianWoelki/raylib-collision',
    linkTitle: 'github.com/FlorianWoelki/raylib-collision',
    tags: [TypeTag.Game, ProgrammingLanguageTag.Go],
    description: `raylib-collision is a simple Go library for the raylib library for simplifying collision
                detection and handling. There are a lot of predefined functions for easier collision
                detection with the raylib library`,
  },
  {
    title: 'VGQL',
    link: 'https://github.com/FlorianWoelki/vgql',
    linkTitle: 'github.com/FlorianWoelki/vgql',
    tags: [
      ProgrammingLanguageTag.TypeScript,
      TechnologyTag.GraphQL,
      TechnologyTag.Vue,
      TechnologyTag.Node,
    ],
    description: `A custom made Vue GraphQL CLI written in TypeScript. With the help of this CLI
                you can easily generate projects with the lovely preset of the Vue.js framework
                and GraphQL. The CLI will setup everything you need for this fullstack application.`,
  },
  {
    title: 'Pneumonia Detection',
    link: 'https://github.com/FlorianWoelki/pneumonia_detection',
    linkTitle: 'github.com/FlorianWoelki/pneumonia_detection',
    tags: [
      TypeTag.DataScience,
      ProgrammingLanguageTag.Python,
      TechnologyTag.Tensorflow,
    ],
    description: `A jupyter notebook that contains a exploratory analysis and transfer learning
                convulutional neural network detecting if a xray scan has pneumonia or not.
                Furthermore, I submitted this notebook to the official Kaggle competition.`,
  },
  {
    title: 'Lungcure',
    link: 'https://github.com/FlorianWoelki/lungcure',
    linkTitle: 'github.com/FlorianWoelki/lungcure',
    tags: [
      TypeTag.DataScience,
      ProgrammingLanguageTag.Python,
      ProgrammingLanguageTag.JavaScript,
      TechnologyTag.Tensorflow,
    ],
    description: `A fullstack project develop together with different contributors. This project
                includes a fullstack web application where you can classify different lung diseases
                with a stripe paywall integration.`,
  },
  {
    title: 'Vue Cirrus',
    link: 'https://github.com/FlorianWoelki/vue-cirrus',
    linkTitle: 'github.com/FlorianWoelki/vue-cirrus',
    tags: [
      TypeTag.Frontend,
      ProgrammingLanguageTag.JavaScript,
      TechnologyTag.Vue,
    ],
    description: `A Vue component library for the Cirrus CSS framework. It is really simple to use
                and lightweight as well.`,
  },
  {
    title: 'Daycademy',
    link: 'https://github.com/daycademy',
    linkTitle: 'github.com/daycademy',
    tags: [
      TypeTag.Frontend,
      TypeTag.Backend,
      ProgrammingLanguageTag.TypeScript,
      ProgrammingLanguageTag.JavaScript,
      TechnologyTag.GraphQL,
      TechnologyTag.Node,
      TechnologyTag.Tailwind,
      TechnologyTag.Docker,
    ],
    description: `Daycademy is a completly free to use german academy for learning how to code.
                On this self built end to end platform I teach how to code with interactive
                coding trainings and quizes.`,
  },
  {
    title: 'YouTube Account',
    link: 'https://www.youtube.com/channel/UC18qytfIhR9cNEjUcgGLl3A?view_as=subscriber',
    linkTitle: 'Code mit FloW',
    tags: [
      ProgrammingLanguageTag.Go,
      ProgrammingLanguageTag.Python,
      ProgrammingLanguageTag.JavaScript,
      TechnologyTag.GraphQL,
      TechnologyTag.Vue,
      TechnologyTag.Nuxt,
      TechnologyTag.Tailwind,
    ],
    description: `In addition to the academy I have created a german speaking YouTube channel
                for teaching how to code. These professional created videos are in the academy
                available as well.`,
  },
  {
    title: 'First published Game',
    link: 'https://gamejolt.com/games/way-to-love/135095',
    linkTitle: 'Way To Love',
    tags: [TypeTag.Game, ProgrammingLanguageTag.Java],
    description: `This is my first ever published game. The main goal of this game is to
                finish the jump and run with two characters that are mirrored. The game
                was written in Java with LibGDX.`,
  },
  {
    title: 'Competition Game #59',
    link: 'https://flowy.itch.io/revenge-of-the-clowns',
    linkTitle: 'Revenge of the Clowns',
    tags: [TypeTag.Game, ProgrammingLanguageTag.Java],
    description: `I've developed this game for the Beansjam event, where you need to develop
                a game with predefined themes. The goal is to throw or kill all the clowns from
                the plattform and level yourself up with powerups and upgrades. This game was written
                in pure Java without any additional library.`,
  },
  {
    title: 'Fake Graph',
    link: 'https://github.com/daycademy/fake-graph',
    linkTitle: 'github.com/daycademy/fake-graph',
    tags: [
      TypeTag.Backend,
      ProgrammingLanguageTag.TypeScript,
      ProgrammingLanguageTag.JavaScript,
      TechnologyTag.Node,
      TechnologyTag.GraphQL,
    ],
    description: `Fake Graph is a backend sitting on a custom server where you can send GraphQL queries,
                mutations or subscriptions and it will respond with some fake data. This project was
                originally inspired by jsonplaceholder fake backend. Fake Graph will be used in a course
                for Daycademy for learning GraphQL.`,
  },
  {
    title: 'Bryng',
    link: 'https://github.com/bryng-app',
    linkTitle: 'github.com/bryng-app',
    tags: [
      TypeTag.Frontend,
      TypeTag.Backend,
      ProgrammingLanguageTag.Swift,
      ProgrammingLanguageTag.JavaScript,
      ProgrammingLanguageTag.Python,
      TechnologyTag.GraphQL,
      TechnologyTag.Vue,
      TechnologyTag.Node,
    ],
    description: `Bryng was a small startup idea that I have while wondering why there is no app
                for having a service with freelance workers buying your groceries and bringing them to your home.
                The startup never came to life because somehow I have abandoned this project, but 
                you can see the beginnings with Swift, GraphQL and Vue.`,
  },
  {
    title: 'Obsidian Icon Folder',
    link: 'https://github.com/FlorianWoelki/obsidian-icon-folder',
    linkTitle: 'github.com/FlorianWoelki/obsidian-icon-folder',
    tags: [
      TypeTag.Frontend,
      ProgrammingLanguageTag.TypeScript,
      ProgrammingLanguageTag.JavaScript,
      TechnologyTag.Node,
    ],
    description: `Obsidian Icon Folder enables the user to have icons for their Obsidian Workspace. Obsidian
                is a Markdown Editor that is based on privacy and enables the user to have files locally. This
                repository is a plugin of this editor.`,
  },
  {
    title: 'Scode',
    link: 'https://github.com/FlorianWoelki/scode',
    linkTitle: 'github.com/FlorianWoelki/scode',
    tags: [
      TypeTag.Frontend,
      ProgrammingLanguageTag.TypeScript,
      ProgrammingLanguageTag.JavaScript,
      TechnologyTag.IndexedDB,
      TechnologyTag.Vue,
      TechnologyTag.Tailwind,
    ],
    description: `Scode is a prototype for creating a simple markdown parser. The project's goal was to
                create a snippet manager for your code snippets. With the help of this snippet manager, you can
                have your code snippets (using monaco editor) and add markdown simultaneously.`,
  },
  {
    title: 'YACSS',
    link: 'https://github.com/FlorianWoelki/YACSS',
    linkTitle: 'github.com/FlorianWoelki/YACSS',
    tags: [TypeTag.Frontend, ProgrammingLanguageTag.JavaScript],
    description: `Yet another CSS framework for the modern utility web. This framework contains a lot of
                utility classes to make things easier. This project is archived and not maintained anymore.`,
  },
  {
    title: 'Aerial Cactus CNN',
    link: 'https://github.com/FlorianWoelki/aerial_cactus_cnn',
    linkTitle: 'github.com/FlorianWoelki/aerial_cactus_cnn',
    tags: [
      TypeTag.DataScience,
      ProgrammingLanguageTag.Python,
      TechnologyTag.Tensorflow,
      TechnologyTag.Scikitlearn,
    ],
    description: `This jupyter notebook contains the code for building a CNN with Tensorflow for an aerial cactus
                classification competition.`,
  },
  {
    title: 'MNIST Fashion CNN',
    link: 'https://github.com/FlorianWoelki/mnist_fashion_cnn',
    linkTitle: 'github.com/FlorianWoelki/mnist_fashion_cnn',
    tags: [
      TypeTag.DataScience,
      ProgrammingLanguageTag.Python,
      TechnologyTag.Tensorflow,
    ],
    description: `This jupyter notebook contains the code for a classic classification problem based on the mnist
                fashion dataset. I've used a CNN to build the machine learning model.`,
  },
  {
    title: 'Titanic Classification',
    link: 'https://github.com/FlorianWoelki/titanic_classification',
    linkTitle: 'github.com/FlorianWoelki/titanic_classification',
    tags: [
      TypeTag.DataScience,
      ProgrammingLanguageTag.Python,
      TechnologyTag.Tensorflow,
    ],
    description: `A classic binary classification problem based on the titanic dataset. I've used Tensorflow to build
                a densed neural network to predict how many passengers survived.`,
  },
  {
    title: 'Neural Network Weed Detection',
    link: 'https://github.com/FlorianWoelki/neural-network-weed-detection',
    linkTitle: 'github.com/FlorianWoelki/neural-network-weed-detection',
    tags: [
      TypeTag.DataScience,
      ProgrammingLanguageTag.Python,
      TechnologyTag.Tensorflow,
    ],
    description: `This jupyter notebook contains a simple custom made neural network with two hidden layers. It can detect
                weed on images.`,
  },
  {
    title: 'Fashion MNIST GAN',
    link: 'https://github.com/FlorianWoelki/fashion_mnist_gan',
    linkTitle: 'github.com/FlorianWoelki/fashion_mnist_gan',
    tags: [
      TypeTag.DataScience,
      ProgrammingLanguageTag.Python,
      TechnologyTag.Tensorflow,
    ],
    description: `This repository was my first try with GANs. This GAN will generate clothes and it was trained on the fashion
                MNIST dataset which is a pretty popular one for a classification problem.`,
  },
  {
    title: 'Fraud Detection',
    link: 'https://github.com/FlorianWoelki/fraud_detection',
    linkTitle: 'github.com/FlorianWoelki/fraud_detection',
    tags: [
      TypeTag.DataScience,
      ProgrammingLanguageTag.Python,
      TechnologyTag.Scikitlearn,
    ],
    description: `This jupyter notebook was built for a kaggle challenge on fraud detection. I've used simple logistic regression
                to see what is possible for fraud detection.`,
  },
  {
    title: 'Digit Me',
    link: 'https://github.com/FlorianWoelki/digit-me',
    linkTitle: 'github.com/FlorianWoelki/digit-me',
    tags: [
      TypeTag.DataScience,
      TypeTag.Backend,
      TypeTag.Frontend,
      ProgrammingLanguageTag.Python,
      ProgrammingLanguageTag.JavaScript,
      TechnologyTag.Vue,
    ],
    description: `Digit Me is a online digit recognizer. It was trained in Python with Tensorflow and the frontend was built with JavaScript
                and Vue.js. For the backend I've used Python as well in combination with Flask.`,
  },
  {
    title: 'Watch Together Clone',
    link: 'https://github.com/FlorianWoelki/watch-together',
    linkTitle: 'github.com/FlorianWoelki/watch-together',
    tags: [
      TypeTag.Frontend,
      ProgrammingLanguageTag.JavaScript,
      TechnologyTag.Docker,
    ],
    description: `Watch Together is a simple and made with material design Watch2Gether clone.`,
  },
  {
    title: 'Nong',
    link: 'https://github.com/FlorianWoelki/Nong',
    linkTitle: 'github.com/FlorianWoelki/Nong',
    tags: [TypeTag.DataScience, ProgrammingLanguageTag.Java],
    description: `Nong is a pong game which is played by a neural network. You can see the training progress live while the AI tries to play Pong.`,
  },
  {
    title: 'Flow Lang',
    link: 'https://github.com/FlorianWoelki/Flow-Lang',
    linkTitle: 'github.com/FlorianWoelki/Flow-Lang',
    tags: [TypeTag.Backend, ProgrammingLanguageTag.Java],
    description: `This was my first attempt building a custom made programming language. The purpose of that language was to improve the learning experience
                of programming for beginners.`,
  },
  {
    title: 'TwoDEngine',
    link: 'https://github.com/FlorianWoelki/TwoDEngine',
    linkTitle: 'github.com/FlorianWoelki/TwoDEngine',
    tags: [TypeTag.Game, ProgrammingLanguageTag.Java],
    description: `This was my first custom 2D engine written in pure Java. It has features like lights, shadows, sfx system, or gfx system.`,
  },
  {
    title: 'Commu',
    link: 'https://github.com/FlorianWoelki/Commu',
    linkTitle: 'github.com/FlorianWoelki/Commu',
    tags: [TypeTag.Backend, ProgrammingLanguageTag.Java],
    description: `Commu is a basic chat client with a custom made packet system. The goal of the project was to learn basic networking principles.`,
  },
  {
    title: `Rec RTS (Working Title)`,
    link: 'https://github.com/FlorianWoelki/rec-rts',
    linkTitle: 'github.com/FlorianWoelki/rec-rts',
    tags: [
      TypeTag.Game,
      ProgrammingLanguageTag.JavaScript,
      ProgrammingLanguageTag.TypeScript,
    ],
    description: `This is a simple browser game. The main goal was to built a real time strategy game in the browser with pure JavaScript.`,
  },
] as ProjectModel[];
