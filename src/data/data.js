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

import csrDashboard from "../assets/candy-sun-react/csun-dashboard.jpeg";
import csrEmployees from "../assets/candy-sun-react/csun-employees.jpeg";
import csrProductsMobile from "../assets/candy-sun-react/csun-products-mobile.jpeg";
import csrProducts from "../assets/candy-sun-react/csun-products.jpeg";
import csrSalesMobile from "../assets/candy-sun-react/csun-sales-mobile.jpeg";
import csrSales from "../assets/candy-sun-react/csun-sales.jpeg";
import csrSearch from "../assets/candy-sun-react/csun-search.jpeg";

import csmAddProductV from "../assets/candy-sun-mobile/add-product-validation.jpg";
import csmAddProduct from "../assets/candy-sun-mobile/add-product.jpg";
import csmDrawer from "../assets/candy-sun-mobile/app-drawer.jpg";
import csmEditProduct from "../assets/candy-sun-mobile/edit-product-form.jpg";
import csmLoginValid from "../assets/candy-sun-mobile/error-validation.jpg";
import csmLoginScreen from "../assets/candy-sun-mobile/login-screen.jpg";
import csmProductDetails from "../assets/candy-sun-mobile/product-details.jpg";
import csmProductsList2 from "../assets/candy-sun-mobile/products-list-expanded.jpg";
import csmProductsList1 from "../assets/candy-sun-mobile/products-list.jpg";
import csmSalesList2 from "../assets/candy-sun-mobile/sales-list-expanded.jpg";
import csmSalesList1 from "../assets/candy-sun-mobile/sales-list.jpg";
import csmSignupScreen from "../assets/candy-sun-mobile/signup-screen.jpg";

import csaAddCategory from "../assets/candy-sun-angular/add-category.png";
import csaAddEmployee from "../assets/candy-sun-angular/add-employee-form.png";
import csaAddProduct from "../assets/candy-sun-angular/add-product.png";
import csaCategoryTable from "../assets/candy-sun-angular/category-grid.png";
import csaDeleteCategory from "../assets/candy-sun-angular/delete-category.png";
import csaDeleteProduct from "../assets/candy-sun-angular/delete-product.png";
import csaEditCategory from "../assets/candy-sun-angular/edit-category.png";
import csaEditProduct from "../assets/candy-sun-angular/edit-product-form.png";
import csaLoggedIn from "../assets/candy-sun-angular/logged-in.png";
import csaLoginScreen from "../assets/candy-sun-angular/login-screen.png";
import csaProductsFilter from "../assets/candy-sun-angular/products-filter.png";
import csaProductsMenu from "../assets/candy-sun-angular/products-grid-menu.png";
import csaProductsTable from "../assets/candy-sun-angular/products-grid.png";
import csaStartingPage from "../assets/candy-sun-angular/starting-page.png";

import kbgHome from "../assets/kubergames/home-page.jpeg";
import kbgSpace from "../assets/kubergames/space-invaders.jpeg";
import kbgSnake from "../assets/kubergames/snake-game.jpeg";
import kbgSweeper from "../assets/kubergames/minesweeper.jpeg";
import kbgBird from "../assets/kubergames/flappy-bird.jpeg";
import kbgApi from "../assets/kubergames/api-response.jpeg";
import kbgKuber from "../assets/kubergames/kubernetes.jpeg";

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
      "Candy Sun Web is the latest iteration of my Candy Sun project. It consists of a React web app directed to managing a real microbusiness. It keeps track of products, employees (app users, authentication), and sales, even though it's not a point-of-sale per se.",
    language: [technologies.react, technologies.javascript],
    database: [technologies.firebase],
    images: [
      csrDashboard,
      csrEmployees,
      csrProducts,
      csrProductsMobile,
      csrSales,
      csrSalesMobile,
      csrSearch,
    ],
    repo: "https://github.com/saulprl/candy_sun_react",
  },
  {
    id: uuid(),
    name: "Candy Sun Mobile",
    description:
      "Candy Sun Mobile is the mobile version for my Candy Sun project. It was built while I was learning Flutter and it allowed me to practice a lot of the new stuff I was learning since I had never worked on mobile applications before.",
    language: [technologies.flutter, technologies.dart],
    database: [technologies.firebase],
    images: [
      csmLoginScreen,
      csmLoginValid,
      csmSignupScreen,
      csmDrawer,
      csmProductsList1,
      csmProductsList2,
      csmProductDetails,
      csmAddProduct,
      csmAddProductV,
      csmEditProduct,
      csmSalesList1,
      csmSalesList2,
    ],
    repo: "https://github.com/saulprl/candy_sun",
  },
  {
    id: uuid(),
    name: "Flutter Calculator",
    description:
      "Flutter Calculator was a small project I started just for practicing. It was based on the Windows 10 standard calculator and it used in-fix to post-fix conversion and resolution, so it would be able to take operand hierarchy into account.",
    language: [technologies.flutter, technologies.dart],
    database: [],
    images: [],
    repo: "https://github.com/saulprl/flutter_calculator",
  },
  {
    id: uuid(),
    name: "Kubergames",
    description:
      "Kubergames is a React web app which holds 4 different games written in JavaScript with the p5.js library. Kubergames was created to be deployed on a kubernetes environment, along with its API and a MySQL database for game scores.",
    language: [technologies.react, technologies.javascript],
    database: [technologies.mysql],
    images: [
      kbgHome,
      kbgSpace,
      kbgSnake,
      kbgSweeper,
      kbgBird,
      kbgApi,
      kbgKuber,
    ],
    repo: "https://github.com/saulprl/kubergames-js",
  },
  {
    id: uuid(),
    name: "Kubergames API",
    description:
      "This is the API for Kubergames. It was written on Node.js with Express and, just like the client, it was created to deploy on a kubernetes environment.",
    language: [technologies.nodejs, technologies.javascript],
    database: [technologies.mysql],
    images: [kbgApi, kbgKuber],
    repo: "https://github.com/McFlyZero/api-kubergames",
  },
  {
    id: uuid(),
    name: "Candy Sun v1",
    description:
      "This  is Candy Sun's first iteration back in 2020 when I was learning Angular (MEAN Stack). It was also my first approach to full-stack web development.",
    language: [technologies.angular, technologies.typescript],
    database: [technologies.mongo],
    images: [
      csaStartingPage,
      csaLoginScreen,
      csaLoggedIn,
      csaProductsTable,
      csaProductsFilter,
      csaProductsMenu,
      csaAddProduct,
      csaEditProduct,
      csaDeleteProduct,
      csaCategoryTable,
      csaAddCategory,
      csaEditCategory,
      csaDeleteCategory,
      csaAddEmployee,
    ],
    repo: "https://github.com/saulprl/candy-sun-angular",
  },
  {
    id: uuid(),
    name: "Candy Sun v1 API",
    description:
      "This is the API Candy Sun's first iteration used. It was written on Node.js with Express and used a MongoDB cluster as database.",
    language: [technologies.nodejs, technologies.javascript],
    database: [technologies.mongo],
    images: [],
    repo: "https://github.com/saulprl/candy-sun-angular",
  },
  {
    id: uuid(),
    name: "Ventas DS3",
    description:
      "VentasDS3 was my first full-stack desktop application. It consists of a point-of-sale app for a fictional business, built on JavaFX with a PostgreSQL database.",
    language: [technologies.java, technologies.javafx],
    database: [technologies.postgres],
    images: [],
    repo: "https://github.com/saulprl/VentasDS3",
  },
  {
    id: uuid(),
    name: "Library for Teachers",
    description:
      "Library for Teachers was one of my first JavaFX projects. It's basically a client for a teacher library, which manages authors, their books, teachers, and book loans. It was created to demonstrate an app's workflow with a PostgreSQL database.",
    language: [technologies.java, technologies.javafx],
    database: [technologies.postgres],
    images: [],
    repo: "https://github.com/saulprl/Library-for-Teachers",
  },
  {
    id: uuid(),
    name: "ChatFX",
    description:
      "ChatFX consists of a JavaFX app divided into a client, a server, and a database. It's sort of inspired by the classic Microsoft Messenger: you could see all of the users connected to the server and start up a conversation with any of them, or even create a group chat.",
    language: [technologies.java, technologies.javafx],
    database: [technologies.mysql],
    images: [],
    repo: "https://github.com/saulprl/ChatFX",
  },
  {
    id: uuid(),
    name: "Styper",
    description:
      "Styper is a desktop game based off of TypeRacer. The challenge was to enter the words displayed on screen without grammar mistakes; the more in a row, the faster you go. It had three different game modes, audio, and a scores table stored in files.",
    language: [technologies.csharp],
    database: [technologies.files],
    images: [],
    repo: "https://github.com/saulprl/Styper",
  },
  // {
  //   id: uuid(),
  //   name: "Bus Station",
  //   description: "Lorem",
  //   language: [technologies.java],
  //   database: [technologies.files],
  //   images: [],
  //   repo: "https://github.com/saulprl/PIng-Final-Project",
  // },
  {
    id: uuid(),
    name: "Maze Generator",
    description:
      "Maze generator was one of my first approaches to JavaScript (and p5.js). It consists of a simple maze generator, and nothing else. Pretty visually satisfying.",
    language: [technologies.javascript],
    database: [],
    images: [],
    repo: "https://github.com/saulprl/Maze-generator",
  },
  {
    id: uuid(),
    name: "Space Invaders",
    description:
      "Space Invaders is a simple JavaScript game built on the p5.js library.",
    language: [technologies.javascript],
    database: [],
    images: [],
    repo: "https://github.com/saulprl/Space-Invaders",
  },
  {
    id: uuid(),
    name: "Snake Game",
    description:
      "Snake Game was the first project I created with JavaScript. And that's it, just the Snake Game.",
    language: [technologies.javascript],
    database: [],
    images: [],
    repo: "https://github.com/saulprl/Snake-game",
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
