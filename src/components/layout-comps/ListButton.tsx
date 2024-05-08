import { SideMenuItem, SubOfSubMenuVmlist } from "@/types/sidebar-types";
import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
const timeout = 500;

const ListButtons = (props: SideMenuItem) => {
  const navigate = useNavigate();
  const { subMenuVMList, name, path } = props;
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState(false);
  const hasChildren = subMenuVMList?.length > 0;
  const handleChange = () => {
    if (subMenuVMList.length > 0) {
      setOpen(!open);
    } else {
      navigate(path);
    }
  };
  return (
    <>
      <ListItemButton onClick={handleChange}>
        <ListItemText primary={name} />
        {open && hasChildren ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {hasChildren && (
        <Collapse in={open} timeout={timeout} unmountOnExit>
          <List component="div" disablePadding>
            {subMenuVMList.map((item) => (
              <>
                <ListItemButton
                  sx={{ pl: 4 }}
                  key={item.id}
                  onClick={
                    item.subOfSubMenuVMList?.length && item.subOfSubMenuVMList?.length > 0
                      ? () => setOpenSub(!openSub)
                      : () => navigate(path)
                  }
                >
                  <ListItemText primary={item.name} />
                  {openSub &&
                  item.subOfSubMenuVMList?.length &&
                  item.subOfSubMenuVMList?.length > 0 ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )}
                </ListItemButton>
                {item.subOfSubMenuVMList?.length &&
                  item.subOfSubMenuVMList?.length > 0 && (
                    <Collapse in={openSub} timeout={timeout} unmountOnExit>
                      <SubOfSubMenuList
                        subOfSubMenuVmlist={item.subOfSubMenuVMList ?? []}
                      />
                    </Collapse>
                  )}
              </>
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

export default ListButtons;

const SubOfSubMenuList = ({
  subOfSubMenuVmlist,
}: {
  subOfSubMenuVmlist: SubOfSubMenuVmlist[];
}) => {
  const navigate = useNavigate();
  return (
    <>
      <List component="div" disablePadding>
        {subOfSubMenuVmlist.map((item) => {
          return (
            <ListItemButton
              sx={{ pl: 8 }}
              key={item.id}
              onClick={() => navigate(item.path)}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          );
        })}
      </List>
    </>
  );
};
