interface ProjectModel {
  title: string;
  link: string;
  linkTitle: string;
  tags: (string | typeof ProgrammingLanguageTag | typeof TechnologyTag)[];
  description: string;
}

export const ProgrammingLanguageTag = {
  JavaScript: 'JavaScript',
  TypeScript: 'TypeScript',
  Go: 'Go',
  Python: 'Python',
  Java: 'Java',
  Swift: 'Swift',
  SQL: 'SQL',
  Solidity: 'Solidity',
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
  Node: 'Node',
  Docker: 'Docker',
  SpringBoot: 'SpringBoot',
  MySQL: 'MySQL',
  MongoDB: 'MongoDB',
  Tensorflow: 'Tensorflow',
  Scikitlearn: 'Scikitlearn',
  Blockchain: 'Blockchain',
};

export default [
  {
    title: 'raylib-collision',
    link: 'https://github.com/FlorianWoelki/raylib-collision',
    linkTitle: 'github.com/FlorianWoelki/raylib-collision',
    tags: [ProgrammingLanguageTag.Go],
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
    tags: [ProgrammingLanguageTag.Python, TechnologyTag.Tensorflow],
    description: `A jupyter notebook that contains a exploratory analysis and transfer learning
                convulutional neural network detecting if a xray scan has pneumonia or not.
                Furthermore, I submitted this notebook to the official Kaggle competition.`,
  },
  {
    title: 'Lungcure',
    link: 'https://github.com/FlorianWoelki/lungcure',
    linkTitle: 'github.com/FlorianWoelki/lungcure',
    tags: [
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
    tags: [ProgrammingLanguageTag.JavaScript, TechnologyTag.Vue],
    description: `A Vue component library for the Cirrus CSS framework. It is really simple to use
                and lightweight as well.`,
  },
  {
    title: 'Daycademy',
    link: 'https://github.com/daycademy',
    linkTitle: 'github.com/daycademy',
    tags: [
      ProgrammingLanguageTag.TypeScript,
      ProgrammingLanguageTag.JavaScript,
      TechnologyTag.GraphQL,
      TechnologyTag.Node,
      TechnologyTag.Tailwind,
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
    tags: [ProgrammingLanguageTag.Java],
    description: `This is my first ever published game. The main goal of this game is to
                finish the jump and run with two characters that are mirrored. The game
                was written in Java with LibGDX.`,
  },
  {
    title: 'Competition Game #59',
    link: 'https://flowy.itch.io/revenge-of-the-clowns',
    linkTitle: 'Revenge of the Clowns',
    tags: [ProgrammingLanguageTag.Java],
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
      ProgrammingLanguageTag.TypeScript,
      ProgrammingLanguageTag.JavaScript,
      TechnologyTag.Node,
    ],
    description: `Obsidian Icon Folder enables the user to have icons for their Obsidian Workspace. Obsidian
                is a Markdown Editor that is based on privacy and enables the user to have files locally. This
                repository is a plugin of this editor.`,
  },
] as ProjectModel[];
