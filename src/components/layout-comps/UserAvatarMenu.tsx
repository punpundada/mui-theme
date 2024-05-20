import React, { memo } from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useNavigate } from "react-router-dom";
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";

const menuList = [
  {
    id: 1,
    name: "Profile",
    element: <PersonOutlineIcon />,
    path: "/profile",
  },
  {
    id: 2,
    name: "Change Password",
    element: <PublishedWithChangesIcon />,
    path: "/change-password",
  },
  {
    id: 3,
    name: "Logout",
    element: <PowerSettingsNewIcon />,
    path: "/",
  },
  {
    id:4,
    name:'Settings',
    path:'/profile/settings',
    element: <PowerSettingsNewIcon />,
  }
];

const UserAvatarMenu = memo(() => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleClose = (to: string) => {
    navigate(to);
    setAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <>
      <IconButton
        id="basic-button"
        aria-controls={openMenu ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={openMenu ? "true" : undefined}
        onClick={handleClick}
      >
        <Avatar
          alt="USER NAME"
          src="src/assets/user_placeholder.png"
          sx={{ width: 56, height: 56 }}
        />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {menuList.map((item) => (
          <MenuItem key={item.id} onClick={() => handleClose(item.path)}>
            {item.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
});

export default UserAvatarMenu;
