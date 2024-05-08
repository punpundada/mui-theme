export interface SideMenuItem {
  id: number;
  parentId: number;
  name: string;
  icon: string;
  url: string;
  isMenu: boolean;
  isSubMenu: boolean;
  path: string;
  precedence: number;
  subMenuVMList: SubMenuVmlist[];
}

export interface SubMenuVmlist {
  id: number;
  parentId: number;
  name: string;
  icon: string;
  url: string;
  isMenu: boolean;
  isSubMenu: boolean;
  path: string;
  precedence: number;
  subOfSubMenuVMList?: SubOfSubMenuVmlist[];
}

export interface SubOfSubMenuVmlist {
  id: number;
  parentId: number;
  name: string;
  icon: string;
  url: string;
  isMenu: boolean;
  isSubMenu: boolean;
  path: string;
  precedence: number;
}
