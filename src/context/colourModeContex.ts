import React from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ColorModeContext = React.createContext({ toggleColorMode: () => {},changeColourMode:(mode:"light" | "dark")=>{} });
