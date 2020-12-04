import { ProjectModel } from './models/Project';
import ProjectType from './models/ProjectTag';

export default [
  {
    title: 'VGQL',
    link: 'https://github.com/FlorianWoelki/vgql',
    linkTitle: 'github.com/FlorianWoelki/vgql',
    tags: [ProjectType.GraphQL, ProjectType.TypeScript, ProjectType.Vue, ProjectType.Git, ProjectType.Node],
    description: `A custom made Vue GraphQL CLI written in TypeScript. With the help of this CLI
              you can easily generate projects with the lovely preset of the Vue.js framework
              and GraphQL. The CLI will setup everything you need for this fullstack application.`,
  },
  {
    title: 'Pneumonia Detection',
    link: 'https://github.com/FlorianWoelki/pneumonia_detection',
    linkTitle: 'github.com/FlorianWoelki/pneumonia_detection',
    tags: [ProjectType.Python, ProjectType.PythonLibs, ProjectType.Jupyter, ProjectType.Tensorflow, ProjectType.Git],
    description: `A jupyter notebook that contains a exploratory analysis and transfer learning
              convulutional neural network detecting if a xray scan has pneumonia or not.
              Furthermore, I submitted this notebook to the official Kaggle competition.`,
  },
  {
    title: 'Lungcure',
    link: 'https://github.com/FlorianWoelki/lungcure',
    linkTitle: 'github.com/FlorianWoelki/lungcure',
    tags: [ProjectType.Python, ProjectType.PythonLibs, ProjectType.Jupyter, ProjectType.Tensorflow, ProjectType.Git, ProjectType.JavaScript, ProjectType.CSS],
    description: `A fullstack project develop together with different contributors. This project
              includes a fullstack web application where you can classify different lung diseases
              with a stripe paywall integration.`,
  },
  {
    title: 'Vue Cirrus',
    link: 'https://github.com/FlorianWoelki/vue-cirrus',
    linkTitle: 'github.com/FlorianWoelki/vue-cirrus',
    tags: [ProjectType.Vue, ProjectType.JavaScript, ProjectType.CSS, ProjectType.Git],
    description: `A Vue component library for the Cirrus CSS framework. It is really simple to use
              and lightweight as well.`,
  },
  {
    title: 'Daycademy',
    link: 'https://github.com/daycademy',
    linkTitle: 'github.com/daycademy',
    tags: [ProjectType.TypeScript, ProjectType.JavaScript, ProjectType.CSS, ProjectType.Git, ProjectType.GraphQL, ProjectType.Node, ProjectType.Tailwind],
    description: `Daycademy is a completly free to use german academy for learning how to code.
              On this self built end to end platform I teach how to code with interactive
              coding trainings and quizes.`,
  },
  {
    title: 'YouTube Account',
    link: 'https://www.youtube.com/channel/UC18qytfIhR9cNEjUcgGLl3A?view_as=subscriber',
    linkTitle: 'Code mit FloW',
    tags: [ProjectType.Go, ProjectType.Python, ProjectType.JavaScript, ProjectType.GraphQL, ProjectType.Vue, ProjectType.Nuxt, ProjectType.Tailwind],
    description: `In addition to the academy I have created a german speaking YouTube channel
              for teaching how to code. These professional created videos are in the academy
              available as well.`,
  },
  {
    title: 'First published Game',
    link: 'https://gamejolt.com/games/way-to-love/135095',
    linkTitle: 'Way To Love',
    tags: [ProjectType.Java],
    description: `This is my first ever published game. The main goal of this game is to
              finish the jump and run with two characters that are mirrored. The game
              was written in Java with LibGDX.`,
  },
  {
    title: 'Competition Game #59',
    link: 'https://flowy.itch.io/revenge-of-the-clowns',
    linkTitle: 'Revenge of the Clowns',
    tags: [ProjectType.Java],
    description: `I've developed this game for the Beansjam event, where you need to develop
              a game with predefined themes. The goal is to throw or kill all the clowns from
              the plattform and level yourself up with powerups and upgrades. This game was written
              in pure Java without any additional library.`,
  },
  {
    title: 'Fake Graph',
    link: 'https://github.com/daycademy/fake-graph',
    linkTitle: 'github.com/daycademy/fake-graph',
    tags: [ProjectType.Node, ProjectType.GraphQL, ProjectType.TypeScript, ProjectType.JavaScript],
    description: `Fake Graph is a backend sitting on a custom server where you can send GraphQL queries,
              mutations or subscriptions and it will respond with some fake data. This project was
              originally inspired by jsonplaceholder fake backend. Fake Graph will be used in a course
              for Daycademy for learning GraphQL.`,
  },
] as ProjectModel[];
