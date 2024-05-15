import React, { useContext } from "react";

export type ColourModeContest = {
  toggleColorMode: () => void;
  changeColourMode: (mode: "light" | "dark") => void;
  changeColour: (colour: string) => void;
};
export const ColorModeContext = React.createContext<ColourModeContest | null>(null);

export const ColourModeProvider = ({
  children,
  value,
}: {
  value: ColourModeContest;
  children: React.ReactNode;
}) => {
  return <ColorModeContext.Provider value={value}>{children}</ColorModeContext.Provider>;
};

export const useColourModeContext = () => {
  const val = useContext(ColorModeContext);
  if (!val) {
    throw new Error("Colour mode context used outside the provider");
  }
  return val;
};
