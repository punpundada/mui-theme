import React from "react";
import { SubMenuVmlist } from "@/types/sidebar-types";
import { Box, Grid, Menu, MenuItem, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
const BottomNavSelect = ({
  subMenuVmlist,
  label,
}: {
  subMenuVmlist: SubMenuVmlist[];
  label: string;
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          gap: 1,
          "&:hover": {
            // transform: "translateY(3px)",
            scale: "105%",
          },
          transition: "scale 0.3s ease",
          // transition: "scale 0.3s ease", transform 0.3s ease
        }}
        onClick={handleClick}
      >
        <Typography component={"label"} sx={{ width: "10rem" }}>
          {label}
        </Typography>
        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </Box>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          horizontal: "center",
          vertical: "bottom",
        }}
      >
        {subMenuVmlist.map((item) => (
          <Grid>
            <MenuListItem SubMenuItem={item} />
          </Grid>
        ))}
      </Menu>
    </>
  );
};

export default BottomNavSelect;

const MenuListItem = ({ SubMenuItem }: { SubMenuItem: SubMenuVmlist }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const hasChildren = (SubMenuItem.subOfSubMenuVMList?.length ?? 0) > 0;

  const handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <MenuItem
        key={SubMenuItem.id}
        onClick={hasChildren ? handleClick : () => navigate(SubMenuItem.path)}
        sx={{ minWidth: "12rem" }}
      >
        {SubMenuItem.name} {hasChildren && <ArrowIcons open={open} />}
      </MenuItem>

      {hasChildren && (
        <Menu
          id="positioned-menu"
          aria-labelledby="positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            horizontal: "right",
            vertical: "center",
          }}
        >
          {SubMenuItem.subOfSubMenuVMList?.map((item) => (
            <MenuItem
              key={item.id}
              onClick={() => navigate(item.path)}
              sx={{ minWidth: "12rem" }}
            >
              {item.name}
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  );
};

const ArrowIcons = ({ open }: { open: boolean }) =>
  open ? (
    <KeyboardArrowUpIcon sx={{ pl: "0.5rem" }} />
  ) : (
    <KeyboardArrowDownIcon sx={{ pl: "0.5rem" }} />
  );
