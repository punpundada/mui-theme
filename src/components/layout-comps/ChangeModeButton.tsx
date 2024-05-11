import React from "react";
import { IconButton, Menu, MenuItem, Typography, useTheme } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from "@/context/colourModeContex";

const ChangeModeButton = () => {
    const theme = useTheme();
      const colorMode = React.useContext(ColorModeContext);
      const [modeAncher, setModeAnchor] = React.useState<null | HTMLElement>(null);
    const modeOpenMenu = Boolean(modeAncher);
    const handleModeClose = () => {
        setModeAnchor(null);
      };
    
      const handleModeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setModeAnchor(e.currentTarget);
      };
  return (
    <>
      <IconButton
        sx={{ ml: 1, width: 45, height: 45 }}
        color="inherit"
        id="basic-button"
        aria-controls={modeOpenMenu ? "color-mode-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={modeOpenMenu ? "true" : undefined}
        onClick={handleModeClick}
      >
        {theme.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={modeAncher}
        open={modeOpenMenu}
        onClose={handleModeClose}
        anchorOrigin={{
          horizontal: "right",
          vertical: "bottom",
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => colorMode.changeColourMode("light")}
          sx={{ width: "8rem" }}
        >
          <Typography component={"h6"}>Light</Typography>
        </MenuItem>
        <MenuItem onClick={() => colorMode.changeColourMode("dark")}>
          <Typography component={"h6"}>Dark</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default ChangeModeButton;
