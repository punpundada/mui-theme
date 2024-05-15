import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { PaletteMode, createTheme } from "@mui/material";
import { amber, blue, blueGrey, cyan, lightGreen, yellow ,deepPurple,pink} from "@mui/material/colors";


export const colours = {
  cyan: cyan[900],
  yellow: yellow[900],
  lightGreen: lightGreen[900],
  blue: blue[900],
  deepPurple:deepPurple[900],
  amber: amber[900],
  pink:pink[900],
} as const;
/*
***
if new colour is added please add case statement in 'getLightColour' function below and the object colours
***
*/


export const useCustomTheme = () => {
  const { getItem, setItem } = useLocalStorage<PaletteMode>("mode", "light");
  const modeColour = useLocalStorage<string>("lightColour");

  const [mode, setMode] = React.useState<PaletteMode>(
    (getItem() as PaletteMode) ?? "light"
  );

  const [lightModeColour, setLightModeColour] = React.useState<string>(
    modeColour.getItem() ?? "cyan"
  );

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          setItem(prevMode === "light" ? "dark" : "light");
          return prevMode === "light" ? "dark" : "light";
        });
      },
      changeColourMode: (mode: PaletteMode) => {
        setItem(mode);
        setMode(mode);
      },
      changeColour: (colour: string) => {
        modeColour.setItem(colour);
        setLightModeColour(colour);
      },
    }),
    [modeColour, setItem]
  );

/*
***
if new colour is added please add case statement in 'getLightColour' function below and the object 'colours'
***
*/
  const getLightColour = (lightColour: string) => {
    switch (lightColour) {
      case 'cyan':
        return {
          primary: cyan,
          divider: cyan[200],
          text: {
            primary: cyan[900],
            secondary: cyan[800],
          },
        };
      case "yellow":
        return {
          primary: yellow,
          divider: yellow[200],
          text: {
            primary: yellow[900],
            secondary: yellow[800],
          },
        };
      case "amber":
        return {
          primary: amber,
          divider: amber[200],
          text: {
            primary: amber[900],
            secondary: amber[800],
          },
        };
      case "lightGreen":
        return {
          primary: lightGreen,
          divider: lightGreen[200],
          text: {
            primary: lightGreen[900],
            secondary: lightGreen[800],
          },
        };
      case "blue":
        return {
          primary: blue,
          divider: blue[200],
          text: {
            primary: blue[900],
            secondary: blue[800],
          },
        };
      case "deepPurple":
        return {
          primary: deepPurple,
          divider: deepPurple[200],
          text: {
            primary: deepPurple[900],
            secondary: deepPurple[800],
          },
        };
      case "pink":
        return {
          primary: pink,
          divider: pink[200],
          text: {
            primary: pink[900],
            secondary: pink[800],
          },
        };

      default:
        return {
          primary: cyan,
          divider: cyan[200],
          text: {
            primary: cyan[900],
            secondary: cyan[800],
          },
        };
    }
  };

  const getTheme = React.useCallback(
    (mode: PaletteMode) => {
      switch (mode) {
        case "light":
          return getLightColour(lightModeColour ?? "cyan");
        case "dark":
          return {
            primary: blueGrey,
            divider: blueGrey[700],
            background: {
              default: blueGrey[900],
              paper: blueGrey[900],
            },
            text: {
              primary: "#fff",
              secondary: blueGrey[500],
            },
          };
        default:
          return {
            primary: cyan,
            divider: cyan[200],
            text: {
              primary: cyan[900],
              secondary: cyan[800],
            },
          };
      }
    },
    [lightModeColour]
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...getTheme(mode),
        },
      }),
    [getTheme, mode]
  );

  return { colorMode, theme };
};
