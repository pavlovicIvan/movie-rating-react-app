// React
import { lazy } from "react";

// Layouts
import MainLayout from "../layout/MainLayout";

// Components
const Home = lazy(() => import("../pages/Home"));
const SingleView = lazy(() => import("../pages/SingleView"));

const routes = [
  { path: "/singleView", component: SingleView, layout: MainLayout },
  { path: "/", component: Home, layout: MainLayout },
];

export default routes;
