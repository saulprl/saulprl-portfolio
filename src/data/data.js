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
    id: "p1",
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
    id: "p2",
    name: "Candy Sun Web",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper interdum ligula vel suscipit. Curabitur id suscipit erat. Sed scelerisque lacus ac mi eleifend, ut.",
    language: [technologies.react, technologies.javascript],
    database: [technologies.firebase],
    images: [],
    repo: "https://github.com/saulprl/candy_sun_react",
  },
  {
    id: "p3",
    name: "Candy Sun Mobile",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quam arcu, porta ut tempus quis.",
    language: [technologies.flutter, technologies.dart],
    database: [technologies.firebase],
    images: [],
    repo: "https://github.com/saulprl/candy_sun",
  },
  {
    id: "p4",
    name: "Candy Sun v1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quam arcu, porta ut tempus quis.",
    language: [technologies.angular, technologies.typescript],
    database: [technologies.mongo],
    images: [],
    repo: "https://github.com/saulprl/candy-sun-angular",
  },
  {
    id: "p5",
    name: "Flutter Calculator",
    description: "Lorem",
    language: [technologies.flutter, technologies.dart],
    database: [],
    images: [],
    repo: "https://github.com/saulprl/flutter_calculator",
  },
  {
    id: "p6",
    name: "Ventas DS3",
    description: "Lorem",
    language: [technologies.java, technologies.javafx],
    database: [technologies.postgres],
    images: [],
    repo: "https://github.com/saulprl/VentasDS3",
  },
  {
    id: "p7",
    name: "Library for Teachers",
    description: "Lorem",
    language: [technologies.java, technologies.javafx],
    database: [technologies.postgres],
    images: [],
    repo: "https://github.com/saulprl/Library-for-Teachers",
  },
  {
    id: "p8",
    name: "ChatFX",
    description: "Lorem",
    language: [technologies.java, technologies.javafx],
    database: [technologies.mysql],
    images: [],
    repo: "https://github.com/saulprl/ChatFX",
  },
  {
    id: "p9",
    name: "Styper",
    description: "Lorem",
    language: [technologies.csharp],
    database: [technologies.files],
    images: [],
    repo: "https://github.com/saulprl/Styper",
  },
  {
    id: "p10",
    name: "Bus Station",
    description: "Lorem",
    language: [technologies.java],
    database: [technologies.files],
    images: [],
    repo: "https://github.com/saulprl/PIng-Final-Project",
  },
  {
    id: "p11",
    name: "Kubergames",
    description: "Lorem",
    language: [technologies.react, technologies.javascript],
    database: [technologies.mysql],
    images: [],
    repo: "https://github.com/saulprl/kubergames-js",
  },
  {
    id: "p12",
    name: "Kubergames API",
    description: "Lorem",
    language: [technologies.nodejs, technologies.javascript],
    database: [technologies.mysql],
    images: [],
    repo: "https://github.com/McFlyZero/api-kubergames",
  },
  {
    id: "p13",
    name: "Maze Generator",
    description: "Lorem",
    language: [technologies.javascript],
    database: [],
    images: [],
    repo: "https://github.com/saulprl/Maze-generator",
  },
  {
    id: "p14",
    name: "Space Invaders",
    description: "Lorem",
    language: [technologies.javascript],
    database: [],
    images: [],
    repo: "https://github.com/saulprl/Space-Invaders",
  },
  {
    id: "p15",
    name: "Snake Game",
    description: "Lorem",
    language: [technologies.javascript],
    database: [],
    images: [],
    repo: "https://github.com/saulprl/Snake-game",
  },
  {
    id: "p16",
    name: "Candy Sun v1 API",
    description: "Lorem",
    language: [technologies.nodejs, technologies.javascript],
    database: [technologies.mongo],
    images: [],
    repo: "https://github.com/saulprl/candy-sun-angular",
  },
];
