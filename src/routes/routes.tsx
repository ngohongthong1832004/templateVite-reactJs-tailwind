import React from "react";
import { lazy } from "react";

import { 
    PATH_HOME, 
    PATH_LOGIN, 
    PATH_PROFILE, 
    // PATH_SCHEDULE, 
    // PATH_SETTING 
} from "./paths";
import { Children } from "react";

const HomePage = lazy(() => import("../pages/home"));
const LoginPage = lazy(() => import("../pages/login"));
const ProfilePage = lazy(() => import("../pages/profile"));
// const SchedulePage = lazy(() => import("../pages/schedule"));
// const SettingPage = lazy(() => import("../pages/setting"));


export const routes = [
  {
    path: PATH_HOME,
    name: "HOME",
    element: <HomePage />,
    show: true,
    children : []
  },
  {
    path: PATH_LOGIN,
    name: "LOGIN",
    element: <LoginPage />,
    show: true,
    children : []
  },
  {
    path: PATH_PROFILE,
    name: "PROFILE",
    element: <ProfilePage />,
    show: true,
    children : []
  },
];
