import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
  colors: {
    transparent: "transparent",
    cerise: {
      50: "#F27DA4",
      100: "#F06A97",
      200: "#EE588A",
      300: "#ED457D",
      400: "#EB3370",
      500: "#E91E63",
      600: "#DF1659",
      700: "#CC1452",
      800: "#BA124A",
      900: "#A71143",
    },
    languidLavender: {
      50: "#E2DBE6",
      100: "#D9D0DE",
      200: "#CFC3D5",
      300: "#C5B7CD",
      400: "#BBABC4",
      500: "#B29FBC",
      600: "#A893B4",
      700: "#9F87AB",
      800: "#957BA3",
      900: "#8B6F9B",
    },
    steelTeal: {
      50: "#ACC3C2",
      100: "#A0BABA",
      200: "#95B2B1",
      300: "#89A9A8",
      400: "#7DA1A0",
      500: "#719897",
      600: "#678E8D",
      700: "#5A7D7C",
      800: "#567675",
      900: "#4D6A6A",
    },
    russianViolet: {
      50: "#786CC6",
      100: "#6B5DC0",
      200: "#5D4FBA",
      300: "#5345B0",
      400: "#4C3FA2",
      500: "#453993",
      600: "#3E3384",
      700: "#372E76",
      800: "#302867",
      900: "#241E4E",
    },
    darkByzantium: {
      50: "#BD619E",
      100: "#B75295",
      200: "#AD488B",
      300: "#9E4280",
      400: "#903C74",
      500: "#813668",
      600: "#73305D",
      700: "#652A51",
      800: "#542344",
      900: "#481E3A",
    },
  },
};

const theme = extendTheme({ config });

export default theme;
