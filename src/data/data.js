import { v1 as uuid } from "uuid";

import meanCert from "../assets/certificates/MEAN-course-certificate.jpg";
import flutterCert from "../assets/certificates/Flutter-course-certificate.jpg";

import mnMainScreen from "../assets/moody-notes/mn_main_screen.jpeg";
import mnDrawer from "../assets/moody-notes/mn_drawer.jpeg";
import mnCaption from "../assets/moody-notes/mn_caption.jpeg";
import mnBasicEmotions from "../assets/moody-notes/mn_basic_emotions.jpeg";
import mnDerivedEm from "../assets/moody-notes/mn_derived_emotions.jpeg";
import mnSpecificEm from "../assets/moody-notes/mn_specific_emotions.jpeg";
import mnLightMode from "../assets/moody-notes/mn_light_mode.jpeg";
import mnCalendar1 from "../assets/moody-notes/mn_calendar_1.jpeg";
import mnCalendar2 from "../assets/moody-notes/mn_calendar_2.jpeg";
import mnFilters from "../assets/moody-notes/mn_filters.jpeg";
import mnMainFiltered from "../assets/moody-notes/mn_main_with_filters.jpeg";

const techTypes = {
  framework: "Framework",
  language: "Language",
  database: "Database",
};

const courseStatus = {
  completed: "Completed",
  ongoing: "In progress",
};

const coursePlatforms = {
  udemy: "Udemy",
};

export const technologies = {
  flutter: { name: "Flutter", type: techTypes.framework },
  dart: { name: "Dart", type: techTypes.language },
  react: { name: "React", type: techTypes.framework },
  javascript: { name: "JavaScript", type: techTypes.language },
  angular: { name: "Angular", type: techTypes.framework },
  typescript: { name: "TypeScript", type: techTypes.language },
  java: { name: "Java", type: techTypes.language },
  csharp: { name: "C#", type: techTypes.language },
  javafx: { name: "JavaFX", type: techTypes.framework },
  nodejs: { name: "Node.js", type: techTypes.framework },
  sqlite: { name: "SQLite", type: techTypes.database },
  mongo: { name: "MongoDB", type: techTypes.database },
  postgres: { name: "PostgreSQL", type: techTypes.database },
  mysql: { name: "MySQL", type: techTypes.database },
  sqlserver: { name: "SQL Server", type: techTypes.database },
  firebase: { name: "Firebase", type: techTypes.database },
  files: { name: "Files", type: techTypes.database },
};

export const projects = [
  {
    id: uuid(),
    name: "Moody Notes",
    description:
      "Moody Notes is not your typical notes app. This is a personal project I started for people struggling with anxiety like myself. Moody Notes allows the user to submit notes, and also attach up to 72 emotions to each one. The notes are then displayed on the main screen and the user can choose to sort by oldest, newest, and even filter the list by group of emotions. Lastly, Moody Notes includes a calendar which lets the user keep track of the notes submitted each day.",
    language: [technologies.flutter, technologies.dart],
    database: [technologies.sqlite],
    images: [
      mnMainScreen,
      mnDrawer,
      mnCaption,
      mnBasicEmotions,
      mnDerivedEm,
      mnSpecificEm,
      mnLightMode,
      mnCalendar1,
      mnCalendar2,
      mnFilters,
      mnMainFiltered,
    ],
    repo: "https://github.com/saulprl/moody_notes",
  },
  {
    id: uuid(),
    name: "Candy Sun Web",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper interdum ligula vel suscipit. Curabitur id suscipit erat. Sed scelerisque lacus ac mi eleifend, ut.",
    language: [technologies.react, technologies.javascript],
    database: [technologies.firebase],
    images: [],
    repo: "https://github.com/saulprl/candy_sun_react",
  },
  {
    id: uuid(),
    name: "Candy Sun Mobile",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quam arcu, porta ut tempus quis.",
    language: [technologies.flutter, technologies.dart],
    database: [technologies.firebase],
    images: [],
    repo: "https://github.com/saulprl/candy_sun",
  },
  {
    id: uuid(),
    name: "Candy Sun v1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quam arcu, porta ut tempus quis.",
    language: [technologies.angular, technologies.typescript],
    database: [technologies.mongo],
    images: [],
    repo: "https://github.com/saulprl/candy-sun-angular",
  },
  {
    id: uuid(),
    name: "Flutter Calculator",
    description: "Lorem",
    language: [technologies.flutter, technologies.dart],
    database: [],
    images: [],
    repo: "https://github.com/saulprl/flutter_calculator",
  },
  {
    id: uuid(),
    name: "Ventas DS3",
    description: "Lorem",
    language: [technologies.java, technologies.javafx],
    database: [technologies.postgres],
    images: [],
    repo: "https://github.com/saulprl/VentasDS3",
  },
  {
    id: uuid(),
    name: "Library for Teachers",
    description: "Lorem",
    language: [technologies.java, technologies.javafx],
    database: [technologies.postgres],
    images: [],
    repo: "https://github.com/saulprl/Library-for-Teachers",
  },
  {
    id: uuid(),
    name: "ChatFX",
    description: "Lorem",
    language: [technologies.java, technologies.javafx],
    database: [technologies.mysql],
    images: [],
    repo: "https://github.com/saulprl/ChatFX",
  },
  {
    id: uuid(),
    name: "Styper",
    description: "Lorem",
    language: [technologies.csharp],
    database: [technologies.files],
    images: [],
    repo: "https://github.com/saulprl/Styper",
  },
  {
    id: uuid(),
    name: "Bus Station",
    description: "Lorem",
    language: [technologies.java],
    database: [technologies.files],
    images: [],
    repo: "https://github.com/saulprl/PIng-Final-Project",
  },
  {
    id: uuid(),
    name: "Kubergames",
    description: "Lorem",
    language: [technologies.react, technologies.javascript],
    database: [technologies.mysql],
    images: [],
    repo: "https://github.com/saulprl/kubergames-js",
  },
  {
    id: uuid(),
    name: "Kubergames API",
    description: "Lorem",
    language: [technologies.nodejs, technologies.javascript],
    database: [technologies.mysql],
    images: [],
    repo: "https://github.com/McFlyZero/api-kubergames",
  },
  {
    id: uuid(),
    name: "Maze Generator",
    description: "Lorem",
    language: [technologies.javascript],
    database: [],
    images: [],
    repo: "https://github.com/saulprl/Maze-generator",
  },
  {
    id: uuid(),
    name: "Space Invaders",
    description: "Lorem",
    language: [technologies.javascript],
    database: [],
    images: [],
    repo: "https://github.com/saulprl/Space-Invaders",
  },
  {
    id: uuid(),
    name: "Snake Game",
    description: "Lorem",
    language: [technologies.javascript],
    database: [],
    images: [],
    repo: "https://github.com/saulprl/Snake-game",
  },
  {
    id: uuid(),
    name: "Candy Sun v1 API",
    description: "Lorem",
    language: [technologies.nodejs, technologies.javascript],
    database: [technologies.mongo],
    images: [],
    repo: "https://github.com/saulprl/candy-sun-angular",
  },
];

export const courses = [
  {
    id: uuid(),
    name: "Flutter & Dart - The Complete Guide",
    platform: coursePlatforms.udemy,
    link: "https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/",
    totalHours: 42,
    status: courseStatus.completed,
    description:
      "I started this course near the end of the pandemic, after a pretty long hiatus from coding. This course on Flutter helped me pick programming back up and essentially taught all of the process from planning (on surface level) to deploying a mobile application.",
    certificate: flutterCert,
  },
  {
    id: uuid(),
    name: "Angular & NodeJS - The MEAN Stack Guide",
    platform: coursePlatforms.udemy,
    link: "https://www.udemy.com/course/angular-2-and-nodejs-the-practical-guide/",
    totalHours: 12.5,
    status: courseStatus.completed,
    description:
      "This one was the first online course I ever took. Even though it's pretty short, I remember it fondly since it taught me the basis for web development; specifically, declarative programming and REST APIs.",
    certificate: meanCert,
  },
  {
    id: uuid(),
    name: "React - The Complete Guide",
    platform: coursePlatforms.udemy,
    link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    totalHours: 49,
    status: courseStatus.ongoing,
    description:
      "This course is the one I'm currently focusing on the most, although I put it aside for a while to build some projects (like this one!) and practice.",
    certificate: null,
  },
  {
    id: uuid(),
    name: "NodeJS - The Complete Guide",
    platform: coursePlatforms.udemy,
    link: "https://www.udemy.com/course/nodejs-the-complete-guide/",
    totalHours: 40.5,
    status: courseStatus.ongoing,
    description:
      "Sort of a low priority course for me right now, since I'm focusing way more on front-end development, but I'll eventually get back to it because I love back-end programming!",
    certificate: null,
  },
];
