import { Icon } from "@chakra-ui/react";
import {
  MdPerson,
  MdHome,
  MdAdminPanelSettings,
  MdGames,
} from "react-icons/md";
import MainDashboard from "pages/kondoo-web-admin/admin/dashboard";
import CreateUser from "pages/kondoo-web-admin/admin/create-user";
import Players from "pages/kondoo-web-admin/admin/players";
import Profile from "pages/kondoo-web-admin/admin/profile";
import userRole from "pages/kondoo-web-admin/admin/user-role";
import { IRoute } from "types/navigation";
import DataTables from "pages/kondoo-web-admin/admin/data-tables";
const routes: IRoute[] = [
  {
    name: "Dashboard",
    layout: "/kondoo-web-admin/admin",
    path: "/dashboard",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: MainDashboard,
  },
  {
    name: "Admin Users",
    layout: "/kondoo-web-admin/admin",
    path: "/create-user",
    icon: (
      <Icon
        as={MdAdminPanelSettings}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: CreateUser,
  },
  {
    name: "User Role",
    layout: "/kondoo-web-admin/admin",
    path: "/user-role",
    icon: (
      <Icon
        as={MdAdminPanelSettings}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: userRole,
  },
  {
    name: "Players",
    layout: "/kondoo-web-admin/admin",
    path: "/players",
    icon: <Icon as={MdGames} width="20px" height="20px" color="inherit" />,
    component: Players,
  },
  {
    name: "Profile",
    layout: "/kondoo-web-admin/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: Profile,
  },
  {
    name: "Asset Management",
    layout: "/kondoo-web-admin/admin",
    path: "/data-tables",
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: DataTables,
    children: [
      {
        name: "Demo",
        layout: "/kondoo-web-admin/admin",
        path: "/data-tables",
        icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
        component: DataTables,
      },
      {
        name: "Demo",
        layout: "/kondoo-web-admin/admin",
        path: "/data-tables",
        icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
        component: DataTables,
      },
    ],
  },
  {
    name: "Metrics",
    layout: "/kondoo-web-admin/admin",
    path: "/data-tables",
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: DataTables,
    children: [
      {
        name: "Demo",
        layout: "/kondoo-web-admin/admin",
        path: "/data-tables",
        icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
        component: DataTables,
      },
      {
        name: "Demo",
        layout: "/kondoo-web-admin/admin",
        path: "/data-tables",
        icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
        component: DataTables,
      },
    ],
  },
  {
    name: "Content Management",
    layout: "/kondoo-web-admin/admin",
    path: "/data-tables",
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: DataTables,

    children: [
      {
        name: "Demo",
        layout: "/kondoo-web-admin/admin",
        path: "/data-tables",
        icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
        component: DataTables,
      },
      {
        name: "Demo",
        layout: "/kondoo-web-admin/admin",
        path: "/data-tables",
        icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
        component: DataTables,
      },
    ],
  },
  {
    name: "Admin Modules",
    layout: "/kondoo-web-admin/admin",
    path: "/data-tables",
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: DataTables,

    children: [
      {
        name: "Demo",
        layout: "/kondoo-web-admin/admin",
        path: "/data-tables",
        icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
        component: DataTables,
      },
      {
        name: "Demo",
        layout: "/kondoo-web-admin/admin",
        path: "/data-tables",
        icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
        component: DataTables,
      },
    ],
  },
  {
    name: "Players",
    layout: "/kondoo-web-admin/admin",
    path: "/data-tables",
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: DataTables,

    children: [
      {
        name: "Demo",
        layout: "/kondoo-web-admin/admin",
        path: "/data-tables",
        icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
        component: DataTables,
      },
      {
        name: "Demo",
        layout: "/kondoo-web-admin/admin",
        path: "/data-tables",
        icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
        component: DataTables,
      },
    ],
  },

  {
    name: "Payment Configuration",
    layout: "/kondoo-web-admin/admin",
    path: "/data-tables",
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: DataTables,

    children: [
      {
        name: "demo",
        layout: "/kondoo-web-admin/admin",
        path: "/data-tables",
        icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
        component: DataTables,
      },
      {
        name: "demo",
        layout: "/kondoo-web-admin/admin",
        path: "/data-tables",
        icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
        component: DataTables,
      },
    ],
  },
  {
    name: "Game Settings",
    layout: "/kondoo-web-admin/admin",
    path: "/data-tables",
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: DataTables,
  },
];

export default routes;
