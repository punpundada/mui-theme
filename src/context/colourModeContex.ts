import React from "react";

export const ColorModeContext = React.createContext({ toggleColorMode: () => {},changeColourMode:(mode:"light" | "dark")=>{console.log(mode)} });
