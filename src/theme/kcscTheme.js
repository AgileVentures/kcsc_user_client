import NexaLight from "../assets/fonts/Nexa-Light.woff2";
import NexaBold from "../assets/fonts/Nexa-Bold.woff2";
import NunitoRegular from "../assets/fonts/nunito-v16-latin-regular.woff2"
import NunitoBold from "../assets/fonts/nunito-v16-latin-700.woff2"
import ComfortaaRegular from "../assets/fonts/comfortaa-v30-latin-regular.woff2"
import ComfortaaBold from "../assets/fonts/comfortaa-v30-latin-700.woff2"
import SanchezRegular from "../assets/fonts/sanchez-v8-latin-regular.woff2"
import CreteRoundRegular from "../assets/fonts/crete-round-v9-latin-regular.woff2"

import { createMuiTheme } from "@material-ui/core/styles";

const nexaLight = {
  fontFamily: "Nexa",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: "400",
  src: `
   local('Nexa'),
   local('Nexa-Light'),
   url(${NexaLight}) format('woff2')
 `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const nexaBold = {
  fontFamily: "Nexa",
  fontStyle: "bold",
  fontDisplay: "swap",
  fontWeight: "800",
  src: `
   local('Nexa'),
   local('Nexa-Bold'),
   url(${NexaBold}) format('woff2')
 `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const nunitoRegular = {
  fontFamily: "Nunito",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: "400",
  src: `
   local('Nunito'),
   local('Nunito-Regular'),
   url(${NunitoRegular}) format('woff2')
 `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const nunitoBold = {
  fontFamily: "Nunito",
  fontStyle: "bold",
  fontDisplay: "swap",
  fontWeight: "700",
  src: `
   local('Nunito'),
   local('Nunito-Bold'),
   url(${NunitoBold}) format('woff2')
 `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const comfortaaRegular = {
  fontFamily: "Comfortaa",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: "400",
  src: `
   local('Comfortaa'),
   local('Comfortaa-Regular'),
   url(${ComfortaaRegular}) format('woff2')
 `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const comfortaaBold = {
  fontFamily: "Comfortaa",
  fontStyle: "bold",
  fontDisplay: "swap",
  fontWeight: "700",
  src: `
   local('Comfortaa'),
   local('Comfortaa-Bold'),
   url(${ComfortaaBold}) format('woff2')
 `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const sanchezRegular = {
  fontFamily: "Sanchez",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: "400",
  src: `
   local('Sanchez'),
   local('Sanchez-Regular'),
   url(${SanchezRegular}) format('woff2')
 `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const creteRoundRegular = {
  fontFamily: "Crete-Round",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: "400",
  src: `
   local('Crete-Round'),
   local('Crete-Round-Regular'),
   url(${CreteRoundRegular}) format('woff2')
 `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const kcscTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
      contrastText: "#6a0dad ",
    },
    secondary: {
      main: "#E86406",
      contrastText: "#fff ",
    },
  },
  typography: {
    fontFamily: "Crete-Round",
    body1: {
      fontSize: 18,
    },
    body2: {
      fontSize: 16,
    },
    button: {
      fontSize: 18,
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        // "@font-face": [nexaLight, nexaBold],
        // "@font-face": [nunitoRegular, nunitoBold],
        // "@font-face": [comfortaaRegular, comfortaaBold],
        // "@font-face": [sanchezRegular],
        "@font-face": [creteRoundRegular],
      },
    },
  },
});

export default kcscTheme;
