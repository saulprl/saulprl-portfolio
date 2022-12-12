import { v1 as uuid } from "uuid";

import {
  SiAngular,
  SiDart,
  SiFiles,
  SiFirebase,
  SiFlutter,
  SiJava,
  SiJavascript,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiTypescript,
} from "react-icons/si";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { TbCSharp } from "react-icons/tb";

import meanCertJ from "../assets/certificates/MEAN-course-certificate.jpg";
import flutterCertJ from "../assets/certificates/Flutter-course-certificate.jpg";

import meanCertW from "../assets/certificates/MEAN-course-certificate.webp";
import flutterCertW from "../assets/certificates/Flutter-course-certificate.webp";

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

import mnMainScreenW from "../assets/moody-notes/mn_main_screen.webp";
import mnDrawerW from "../assets/moody-notes/mn_drawer.webp";
import mnCaptionW from "../assets/moody-notes/mn_caption.webp";
import mnBasicEmotionsW from "../assets/moody-notes/mn_basic_emotions.webp";
import mnDerivedEmW from "../assets/moody-notes/mn_derived_emotions.webp";
import mnSpecificEmW from "../assets/moody-notes/mn_specific_emotions.webp";
import mnLightModeW from "../assets/moody-notes/mn_light_mode.webp";
import mnCalendar1W from "../assets/moody-notes/mn_calendar_1.webp";
import mnCalendar2W from "../assets/moody-notes/mn_calendar_2.webp";
import mnFiltersW from "../assets/moody-notes/mn_filters.webp";
import mnMainFilteredW from "../assets/moody-notes/mn_main_with_filters.webp";

import csrDashboard from "../assets/candy-sun-react/csun-dashboard.jpeg";
import csrEmployees from "../assets/candy-sun-react/csun-employees.jpeg";
import csrProductsMobile from "../assets/candy-sun-react/csun-products-mobile.jpeg";
import csrProducts from "../assets/candy-sun-react/csun-products.jpeg";
import csrSalesMobile from "../assets/candy-sun-react/csun-sales-mobile.jpeg";
import csrSales from "../assets/candy-sun-react/csun-sales.jpeg";
import csrSearch from "../assets/candy-sun-react/csun-search.jpeg";

import csrDashboardW from "../assets/candy-sun-react/csun-dashboard.webp";
import csrEmployeesW from "../assets/candy-sun-react/csun-employees.webp";
import csrProductsMobileW from "../assets/candy-sun-react/csun-products-mobile.webp";
import csrProductsW from "../assets/candy-sun-react/csun-products.webp";
import csrSalesMobileW from "../assets/candy-sun-react/csun-sales-mobile.webp";
import csrSalesW from "../assets/candy-sun-react/csun-sales.webp";
import csrSearchW from "../assets/candy-sun-react/csun-search.webp";

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

import csmAddProductVW from "../assets/candy-sun-mobile/add-product-validation.webp";
import csmAddProductW from "../assets/candy-sun-mobile/add-product.webp";
import csmDrawerW from "../assets/candy-sun-mobile/app-drawer.webp";
import csmEditProductW from "../assets/candy-sun-mobile/edit-product-form.webp";
import csmLoginValidW from "../assets/candy-sun-mobile/error-validation.webp";
import csmLoginScreenW from "../assets/candy-sun-mobile/login-screen.webp";
import csmProductDetailsW from "../assets/candy-sun-mobile/product-details.webp";
import csmProductsList2W from "../assets/candy-sun-mobile/products-list-expanded.webp";
import csmProductsList1W from "../assets/candy-sun-mobile/products-list.webp";
import csmSalesList2W from "../assets/candy-sun-mobile/sales-list-expanded.webp";
import csmSalesList1W from "../assets/candy-sun-mobile/sales-list.webp";
import csmSignupScreenW from "../assets/candy-sun-mobile/signup-screen.webp";

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

import csaAddCategoryW from "../assets/candy-sun-angular/add-category.webp";
import csaAddEmployeeW from "../assets/candy-sun-angular/add-employee-form.webp";
import csaAddProductW from "../assets/candy-sun-angular/add-product.webp";
import csaCategoryTableW from "../assets/candy-sun-angular/category-grid.webp";
import csaDeleteCategoryW from "../assets/candy-sun-angular/delete-category.webp";
import csaDeleteProductW from "../assets/candy-sun-angular/delete-product.webp";
import csaEditCategoryW from "../assets/candy-sun-angular/edit-category.webp";
import csaEditProductW from "../assets/candy-sun-angular/edit-product-form.webp";
import csaLoggedInW from "../assets/candy-sun-angular/logged-in.webp";
import csaLoginScreenW from "../assets/candy-sun-angular/login-screen.webp";
import csaProductsFilterW from "../assets/candy-sun-angular/products-filter.webp";
import csaProductsMenuW from "../assets/candy-sun-angular/products-grid-menu.webp";
import csaProductsTableW from "../assets/candy-sun-angular/products-grid.webp";
import csaStartingPageW from "../assets/candy-sun-angular/starting-page.webp";

import kbgHome from "../assets/kubergames/home-page.jpeg";
import kbgSpace from "../assets/kubergames/space-invaders.jpeg";
import kbgSnake from "../assets/kubergames/snake-game.jpeg";
import kbgSweeper from "../assets/kubergames/minesweeper.jpeg";
import kbgBird from "../assets/kubergames/flappy-bird.jpeg";
import kbgApi from "../assets/kubergames/api-response.jpeg";
import kbgKuber from "../assets/kubergames/kubernetes.jpeg";

import kbgHomeW from "../assets/kubergames/home-page.webp";
import kbgSpaceW from "../assets/kubergames/space-invaders.webp";
import kbgSnakeW from "../assets/kubergames/snake-game.webp";
import kbgSweeperW from "../assets/kubergames/minesweeper.webp";
import kbgBirdW from "../assets/kubergames/flappy-bird.webp";
import kbgApiW from "../assets/kubergames/api-response.webp";
import kbgKuberW from "../assets/kubergames/kubernetes.webp";

import stpHome from "../assets/styper/home.jpeg";
import stpName from "../assets/styper/name-prompt.jpeg";
import stpCar from "../assets/styper/car-selection.jpeg";
import stpMenu from "../assets/styper/game-menu.jpeg";
import stpMode from "../assets/styper/mode-selection.jpeg";
import stpRace from "../assets/styper/race-start.jpeg";
import stpWon from "../assets/styper/race-end.jpeg";
import stpScores from "../assets/styper/scores.jpeg";
import stpVolume from "../assets/styper/volume-slider.jpeg";

import stpHomeW from "../assets/styper/home.webp";
import stpNameW from "../assets/styper/name-prompt.webp";
import stpCarW from "../assets/styper/car-selection.webp";
import stpMenuW from "../assets/styper/game-menu.webp";
import stpModeW from "../assets/styper/mode-selection.webp";
import stpRaceW from "../assets/styper/race-start.webp";
import stpWonW from "../assets/styper/race-end.webp";
import stpScoresW from "../assets/styper/scores.webp";
import stpVolumeW from "../assets/styper/volume-slider.webp";

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
  flutter: { name: "Flutter", type: techTypes.framework, icon: <SiFlutter /> },
  dart: { name: "Dart", type: techTypes.language, icon: <SiDart /> },
  react: { name: "React", type: techTypes.framework, icon: <FaReact /> },
  javascript: {
    name: "JavaScript",
    type: techTypes.language,
    icon: <SiJavascript />,
  },
  angular: { name: "Angular", type: techTypes.framework, icon: <SiAngular /> },
  typescript: {
    name: "TypeScript",
    type: techTypes.language,
    icon: <SiTypescript />,
  },
  java: { name: "Java", type: techTypes.language, icon: <SiJava /> },
  csharp: { name: "C#", type: techTypes.language, icon: <TbCSharp /> },
  javafx: { name: "JavaFX", type: techTypes.framework, icon: <SiJava /> },
  nodejs: { name: "Node.js", type: techTypes.framework, icon: <FaNodeJs /> },
  sqlite: { name: "SQLite", type: techTypes.database, icon: <SiSqlite /> },
  mongo: { name: "MongoDB", type: techTypes.database, icon: <SiMongodb /> },
  postgres: {
    name: "PostgreSQL",
    type: techTypes.database,
    icon: <SiPostgresql />,
  },
  mysql: { name: "MySQL", type: techTypes.database, icon: <SiMysql /> },
  sqlserver: {
    name: "SQL Server",
    type: techTypes.database,
    icon: <SiMicrosoftsqlserver />,
  },
  firebase: {
    name: "Firebase",
    type: techTypes.database,
    icon: <SiFirebase />,
  },
  files: { name: "Files", type: techTypes.database, icon: <SiFiles /> },
};

export const projects = [
  {
    id: uuid(),
    name: "Moody Notes",
    excerpt:
      "Moody Notes is not your typical notes app. This is a personal project I started for people struggling with anxiety like myself. Moody Notes allows...",
    description:
      "Moody Notes is not your typical notes app. This is a personal project I started for people struggling with anxiety like myself. Moody Notes allows the user to submit notes, and also attach up to 72 emotions to each one. The notes are then displayed on the main screen and the user can choose to sort by oldest, newest, and even filter the list by group of emotions. Lastly, Moody Notes includes a calendar which lets the user keep track of the notes submitted each day.",
    language: [technologies.flutter, technologies.dart],
    database: [technologies.sqlite],
    images: [
      mnMainScreenW,
      mnDrawerW,
      mnCaptionW,
      mnBasicEmotionsW,
      mnDerivedEmW,
      mnSpecificEmW,
      mnLightModeW,
      mnCalendar1W,
      mnCalendar2W,
      mnFiltersW,
      mnMainFilteredW,
    ],
    fallback: [
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
    excerpt:
      "Candy Sun Web is the latest iteration of my Candy Sun project. It consists of a React web app directed to managing a real microbusiness. It keeps...",
    description:
      "Candy Sun Web is the latest iteration of my Candy Sun project. It consists of a React web app directed to managing a real microbusiness. It keeps track of products, employees (app users, authentication), and sales, even though it's not a point-of-sale per se.",
    language: [technologies.react, technologies.javascript],
    database: [technologies.firebase],
    images: [
      csrDashboardW,
      csrEmployeesW,
      csrProductsW,
      csrProductsMobileW,
      csrSalesW,
      csrSalesMobileW,
      csrSearchW,
    ],
    fallback: [
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
    excerpt:
      "Candy Sun Mobile is the mobile version for my Candy Sun project. It was built while I was learning Flutter and it allowed me to practice a lot of...",
    description:
      "Candy Sun Mobile is the mobile version for my Candy Sun project. It was built while I was learning Flutter and it allowed me to practice a lot of the new stuff I was learning since I had never worked on mobile applications before.",
    language: [technologies.flutter, technologies.dart],
    database: [technologies.firebase],
    images: [
      csmLoginScreenW,
      csmLoginValidW,
      csmSignupScreenW,
      csmDrawerW,
      csmProductsList1W,
      csmProductsList2W,
      csmProductDetailsW,
      csmAddProductW,
      csmAddProductVW,
      csmEditProductW,
      csmSalesList1W,
      csmSalesList2W,
    ],
    fallback: [
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
    excerpt:
      "Flutter Calculator was a small project I started just for practicing. It was based on the Windows 10 standard calculator and it used in-fix to...",
    description:
      "Flutter Calculator was a small project I started just for practicing. It was based on the Windows 10 standard calculator and it used in-fix to post-fix conversion and resolution, so it would be able to take operand hierarchy into account.",
    language: [technologies.flutter, technologies.dart],
    database: [],
    images: [],
    fallback: [],
    repo: "https://github.com/saulprl/flutter_calculator",
  },
  {
    id: uuid(),
    name: "Kubergames",
    excerpt:
      "Kubergames is a React web app which holds 4 different games written in JavaScript with the p5.js library. Kubergames was created to be deployed on...",
    description:
      "Kubergames is a React web app which holds 4 different games written in JavaScript with the p5.js library. Kubergames was created to be deployed on a kubernetes environment, along with its API and a MySQL database for game scores.",
    language: [technologies.react, technologies.javascript],
    database: [technologies.mysql],
    images: [
      kbgHomeW,
      kbgSpaceW,
      kbgSnakeW,
      kbgSweeperW,
      kbgBirdW,
      kbgApiW,
      kbgKuberW,
    ],
    fallback: [
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
    excerpt:
      "This is the API for Kubergames. It was written on Node.js with Express and, just like the client, it was created to deploy on a kubernetes environment.",
    description:
      "This is the API for Kubergames. It was written on Node.js with Express and, just like the client, it was created to deploy on a kubernetes environment.",
    language: [technologies.nodejs, technologies.javascript],
    database: [technologies.mysql],
    images: [kbgApiW, kbgKuberW],
    fallback: [kbgApi, kbgKuber],
    repo: "https://github.com/McFlyZero/api-kubergames",
  },
  {
    id: uuid(),
    name: "Candy Sun v1",
    excerpt:
      "This  is Candy Sun's first iteration back in 2020 when I was learning Angular (MEAN Stack). It was also my first approach to full-stack web development.",
    description:
      "This  is Candy Sun's first iteration back in 2020 when I was learning Angular (MEAN Stack). It was also my first approach to full-stack web development.",
    language: [technologies.angular, technologies.typescript],
    database: [technologies.mongo],
    images: [
      csaStartingPageW,
      csaLoginScreenW,
      csaLoggedInW,
      csaProductsTableW,
      csaProductsFilterW,
      csaProductsMenuW,
      csaAddProductW,
      csaEditProductW,
      csaDeleteProductW,
      csaCategoryTableW,
      csaAddCategoryW,
      csaEditCategoryW,
      csaDeleteCategoryW,
      csaAddEmployeeW,
    ],
    fallback: [
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
    excerpt:
      "This is the API Candy Sun's first iteration used. It was written on Node.js with Express and used a MongoDB cluster as database.",
    description:
      "This is the API Candy Sun's first iteration used. It was written on Node.js with Express and used a MongoDB cluster as database.",
    language: [technologies.nodejs, technologies.javascript],
    database: [technologies.mongo],
    images: [],
    fallback: [],
    repo: "https://github.com/saulprl/candy-sun-angular",
  },
  {
    id: uuid(),
    name: "Ventas DS3",
    excerpt:
      "VentasDS3 was my first full-stack desktop application. It consists of a point-of-sale app for a fictional business...",
    description:
      "VentasDS3 was my first full-stack desktop application. It consists of a point-of-sale app for a fictional business, built on JavaFX with a PostgreSQL database.",
    language: [technologies.java, technologies.javafx],
    database: [technologies.postgres],
    images: [],
    fallback: [],
    repo: "https://github.com/saulprl/VentasDS3",
  },
  {
    id: uuid(),
    name: "Library for Teachers",
    excerpt:
      "Library for Teachers was one of my first JavaFX projects. It's basically a client for a teacher library, which manages authors, their books,...",
    description:
      "Library for Teachers was one of my first JavaFX projects. It's basically a client for a teacher library, which manages authors, their books, teachers, and book loans. It was created to demonstrate an app's workflow with a PostgreSQL database.",
    language: [technologies.java, technologies.javafx],
    database: [technologies.postgres],
    images: [],
    fallback: [],
    repo: "https://github.com/saulprl/Library-for-Teachers",
  },
  {
    id: uuid(),
    name: "ChatFX",
    excerpt:
      "ChatFX consists of a JavaFX app divided into a client, a server, and a database. It's sort of inspired by the classic Microsoft Messenger:...",
    description:
      "ChatFX consists of a JavaFX app divided into a client, a server, and a database. It's sort of inspired by the classic Microsoft Messenger: you could see all of the users connected to the server and start up a conversation with any of them, or even create a group chat.",
    language: [technologies.java, technologies.javafx],
    database: [technologies.mysql],
    images: [],
    fallback: [],
    repo: "https://github.com/saulprl/ChatFX",
  },
  {
    id: uuid(),
    name: "Styper",
    excerpt:
      "Styper is a desktop game based off of TypeRacer. The challenge was to enter the words displayed on screen without grammar mistakes; the more...",
    description:
      "Styper is a desktop game based off of TypeRacer. The challenge was to enter the words displayed on screen without grammar mistakes; the more in a row, the faster you go. It had three different game modes, audio, and a scores table stored in files.",
    language: [technologies.csharp],
    database: [technologies.files],
    images: [
      stpHomeW,
      stpNameW,
      stpCarW,
      stpMenuW,
      stpModeW,
      stpRaceW,
      stpWonW,
      stpScoresW,
      stpVolumeW,
    ],
    fallback: [
      stpHome,
      stpName,
      stpCar,
      stpMenu,
      stpMode,
      stpRace,
      stpWon,
      stpScores,
      stpVolume,
    ],
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
    excerpt:
      "Maze generator was one of my first approaches to JavaScript (and p5.js). It consists of a simple maze generator, and nothing else. Pretty visually satisfying.",
    description:
      "Maze generator was one of my first approaches to JavaScript (and p5.js). It consists of a simple maze generator, and nothing else. Pretty visually satisfying.",
    language: [technologies.javascript],
    database: [],
    images: [],
    fallback: [],
    repo: "https://github.com/saulprl/Maze-generator",
  },
  {
    id: uuid(),
    name: "Space Invaders",
    excerpt:
      "Space Invaders is a simple JavaScript game built on the p5.js library.",
    description:
      "Space Invaders is a simple JavaScript game built on the p5.js library.",
    language: [technologies.javascript],
    database: [],
    images: [],
    fallback: [],
    repo: "https://github.com/saulprl/Space-Invaders",
  },
  {
    id: uuid(),
    name: "Snake Game",
    excerpt:
      "Snake Game was the first project I created with JavaScript. And that's it, just the Snake Game.",
    description:
      "Snake Game was the first project I created with JavaScript. And that's it, just the Snake Game.",
    language: [technologies.javascript],
    database: [],
    images: [],
    fallback: [],
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
    certificate: flutterCertW,
    fallbackCert: flutterCertJ,
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
    certificate: meanCertW,
    fallbackCert: meanCertJ,
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
    fallbackCert: null,
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
    fallbackCert: null,
  },
];
