import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListButtons from "@/components/layout-comps/ListButton";
import {styled } from "@mui/material";

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
};

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "start",
}));

type MobileSidebarType = {
  open: boolean;
  toggleDrawer: (value: boolean) => void;
};

const MobileSideBar = ({ open, toggleDrawer }: MobileSidebarType) => {
  return (
    <>
      <Drawer open={open} onClose={() => toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation">
          <DrawerHeader>
            <h3 >Webdesk</h3>
          </DrawerHeader>
          <List
            sx={{ maxWidth: 360, bgcolor: "background.paper" }}
            component="aside"
            aria-labelledby="Sidebar-list"
          >
            {[listItem].map((item, index) => (
              <>
                {index > 0 && <Divider sx={{ mb: 2 }} />}
                <ListButtons
                  item={item}
                  closeDrawer={() => toggleDrawer(false)}
                  key={item.id}
                />
              </>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default MobileSideBar;
