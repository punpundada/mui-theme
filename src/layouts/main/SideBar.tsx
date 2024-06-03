import List from "@mui/material/List";
import { Divider, Drawer, IconButton, styled, useTheme } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListButtons from "@/components/layout-comps/ListButton";
import { memo } from "react";

const listItem = {
  id: 5,
  parentId: 1,
  name: "Fees Management",
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
      name: "Fee Structure",
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
          name: "Academic  Fee Setting",
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
          name: "Hostel Fee Setting",
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
          name: "Fee setting",
          icon: "Fee",
          url: "Fee",
          isMenu: true,
          isSubMenu: true,
          path: "",
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
    {
      id: 30,
      parentId: 1,
      name: "Fee Collection",
      icon: "Fee",
      url: "Fee Structure",
      isMenu: true,
      isSubMenu: false,
      path: "",
      precedence: 1,
    },
  ],
}

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const SideBarList = memo(({
  open,
  handleDrawerClose,
  drawerWidth,
}: {
  open: boolean;
  handleDrawerClose: () => void;
  drawerWidth:number
}) => {
  const theme = useTheme();
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
        overflow: "hidden",
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>
      <List
        sx={{ width: drawerWidth, maxWidth: 360, bgcolor: "inherit" }}
        component="aside"
        aria-labelledby="Sidebar-list"
      >
        {[listItem].map((item, index) => (
          <>
            {index > 0 && <Divider sx={{ mb: 2 }} />}
            <ListButtons item={item} key={item.id} />
          </>
        ))}
      </List>
    </Drawer>
  );
});

export default SideBarList;
