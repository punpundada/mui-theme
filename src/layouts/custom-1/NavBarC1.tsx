import React from "react";
import { Grid, InputBase, Toolbar, alpha, styled } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

import SearchIcon from "@mui/icons-material/Search";
import BottomNavSelect from "@/components/layout-comps/BottomNavSelect";
import ChangeModeButton from "@/components/layout-comps/ChangeModeButton";
import UserAvatarMenu from "@/components/layout-comps/UserAvatarMenu";

const listItem = [
  {
    id: 5,
    parentId: 1,
    name: "Fees Management",
    icon: "NA",
    url: "",
    isMenu: true,
    isSubMenu: false,
    path: "/about",
    precedence: 0,
    subMenuVMList: [
      {
        id: 310,
        parentId: 1,
        name: "Fee Structure",
        icon: "Fee",
        url: "Fee Structure",
        isMenu: true,
        isSubMenu: false,
        path: "/about",
        precedence: 1,
        subOfSubMenuVMList: [
          {
            id: 311,
            parentId: 1,
            name: "Academic  Fee Setting",
            icon: "Fee",
            url: "FeeSetting/GetAll",
            isMenu: true,
            isSubMenu: true,
            path: "/about",
            precedence: 2,
          },
          {
            id: 312,
            parentId: 1,
            name: "Hostel Fee Setting",
            icon: "Fee",
            url: "Hostel/GetAll",
            isMenu: true,
            isSubMenu: true,
            path: "/about",
            precedence: 2,
          },
          {
            id: 313,
            parentId: 1,
            name: "Fee setting",
            icon: "Fee",
            url: "Fee",
            isMenu: true,
            isSubMenu: true,
            path: "/about",
            precedence: 2,
          },
          {
            id: 314,
            parentId: 1,
            name: "Fee setting",
            icon: "Fee",
            url: "Fee",
            isMenu: true,
            isSubMenu: true,
            path: "/about",
            precedence: 2,
          },
          {
            id: 315,
            parentId: 1,
            name: "Hostel Setting",
            icon: "Fee",
            url: "Fee",
            isMenu: true,
            isSubMenu: true,
            path: "/about",
            precedence: 2,
          },
        ],
      },
      {
        id: 30,
        parentId: 1,
        name: "Fee Collection",
        icon: "Fee",
        url: "Fee Structure",
        isMenu: true,
        isSubMenu: false,
        path: "/about",
        precedence: 1,
      },
    ],
  },
  {
    id: 5,
    parentId: 1,
    name: "Admission",
    icon: "NA",
    url: "",
    isMenu: true,
    isSubMenu: false,
    path: "",
    precedence: 0,
    subMenuVMList: [
      {
        id: 310,
        parentId: 1,
        name: "Student",
        icon: "Fee",
        url: "Fee Structure",
        isMenu: true,
        isSubMenu: false,
        path: "",
        precedence: 1,
        subOfSubMenuVMList: [
          {
            id: 311,
            parentId: 1,
            name: "Admission Form",
            icon: "Fee",
            url: "FeeSetting/GetAll",
            isMenu: true,
            isSubMenu: true,
            path: "",
            precedence: 2,
          },
          {
            id: 312,
            parentId: 1,
            name: "Pay Fees",
            icon: "Fee",
            url: "Hostel/GetAll",
            isMenu: true,
            isSubMenu: true,
            path: "",
            precedence: 2,
          },
          {
            id: 313,
            parentId: 1,
            name: "Student Profile",
            icon: "Fee",
            url: "Fee",
            isMenu: true,
            isSubMenu: true,
            path: "",
            precedence: 2,
          },
        ],
      },
      {
        id: 30,
        parentId: 1,
        name: "Academic calander",
        icon: "Fee",
        url: "Fee Structure",
        isMenu: true,
        isSubMenu: false,
        path: "",
        precedence: 1,
        subOfSubMenuVMList: [
          {
            id: 314,
            parentId: 1,
            name: "Fee setting",
            icon: "Fee",
            url: "Fee",
            isMenu: true,
            isSubMenu: true,
            path: "",
            precedence: 2,
          },
          {
            id: 315,
            parentId: 1,
            name: "Hostel Setting",
            icon: "Fee",
            url: "Fee",
            isMenu: true,
            isSubMenu: true,
            path: "",
            precedence: 2,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    parentId: 1,
    name: "Admission",
    icon: "NA",
    url: "",
    isMenu: true,
    isSubMenu: false,
    path: "",
    precedence: 0,
    subMenuVMList: [
      {
        id: 310,
        parentId: 1,
        name: "Student",
        icon: "Fee",
        url: "Fee Structure",
        isMenu: true,
        isSubMenu: false,
        path: "",
        precedence: 1,
        subOfSubMenuVMList: [
          {
            id: 311,
            parentId: 1,
            name: "Admission Form",
            icon: "Fee",
            url: "FeeSetting/GetAll",
            isMenu: true,
            isSubMenu: true,
            path: "",
            precedence: 2,
          },
          {
            id: 312,
            parentId: 1,
            name: "Pay Fees",
            icon: "Fee",
            url: "Hostel/GetAll",
            isMenu: true,
            isSubMenu: true,
            path: "",
            precedence: 2,
          },
          {
            id: 313,
            parentId: 1,
            name: "Student Profile",
            icon: "Fee",
            url: "Fee",
            isMenu: true,
            isSubMenu: true,
            path: "",
            precedence: 2,
          },
        ],
      },
      {
        id: 30,
        parentId: 1,
        name: "Academic calander",
        icon: "Fee",
        url: "Fee Structure",
        isMenu: true,
        isSubMenu: false,
        path: "",
        precedence: 1,
        subOfSubMenuVMList: [
          {
            id: 314,
            parentId: 1,
            name: "Fee setting",
            icon: "Fee",
            url: "Fee",
            isMenu: true,
            isSubMenu: true,
            path: "",
            precedence: 2,
          },
          {
            id: 315,
            parentId: 1,
            name: "Hostel Setting",
            icon: "Fee",
            url: "Fee",
            isMenu: true,
            isSubMenu: true,
            path: "",
            precedence: 2,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    parentId: 1,
    name: "Admission",
    icon: "NA",
    url: "",
    isMenu: true,
    isSubMenu: false,
    path: "",
    precedence: 0,
    subMenuVMList: [
      {
        id: 310,
        parentId: 1,
        name: "Student",
        icon: "Fee",
        url: "Fee Structure",
        isMenu: true,
        isSubMenu: false,
        path: "",
        precedence: 1,
        subOfSubMenuVMList: [
          {
            id: 311,
            parentId: 1,
            name: "Admission Form",
            icon: "Fee",
            url: "FeeSetting/GetAll",
            isMenu: true,
            isSubMenu: true,
            path: "",
            precedence: 2,
          },
          {
            id: 312,
            parentId: 1,
            name: "Pay Fees",
            icon: "Fee",
            url: "Hostel/GetAll",
            isMenu: true,
            isSubMenu: true,
            path: "",
            precedence: 2,
          },
          {
            id: 313,
            parentId: 1,
            name: "Student Profile",
            icon: "Fee",
            url: "Fee",
            isMenu: true,
            isSubMenu: true,
            path: "",
            precedence: 2,
          },
        ],
      },
      {
        id: 30,
        parentId: 1,
        name: "Academic calander",
        icon: "Fee",
        url: "Fee Structure",
        isMenu: true,
        isSubMenu: false,
        path: "",
        precedence: 1,
        subOfSubMenuVMList: [
          {
            id: 314,
            parentId: 1,
            name: "Fee setting",
            icon: "Fee",
            url: "Fee",
            isMenu: true,
            isSubMenu: true,
            path: "",
            precedence: 2,
          },
          {
            id: 315,
            parentId: 1,
            name: "Hostel Setting",
            icon: "Fee",
            url: "Fee",
            isMenu: true,
            isSubMenu: true,
            path: "",
            precedence: 2,
          },
        ],
      },
    ],
  },
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(
    theme.palette.mode === "light"
      ? theme.palette.common.black
      : theme.palette.common.white,
    0.15
  ),
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: alpha(
      theme.palette.mode === "light"
        ? theme.palette.common.black
        : theme.palette.common.white,
      0.25
    ),
  },
  "&:focus-within": {
    // Change color on focus
    backgroundColor: alpha(
      theme.palette.mode === "light"
        ? theme.palette.common.black
        : theme.palette.common.white,
      0.3
    ),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const NavBarC1 = ({ open }: { open: boolean }) => {
  return (
    <>
      <AppBar position="fixed" open={open} variant="outlined" color="transparent">
        <Toolbar>
          <Grid container sx={{ display: "flex", flexDirection: "column" }}>
            <Grid item container justifyContent={"end"} alignItems={"center"} gap={2}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>

              <ChangeModeButton />

              <UserAvatarMenu />
            </Grid>

            <Grid>
              <Grid item container spacing={2}>
                {listItem.map((item) => (
                  <Grid item mb={1}>
                    <BottomNavSelect
                      label={item.name}
                      key={item.id}
                      subMenuVmlist={item.subMenuVMList}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBarC1;
