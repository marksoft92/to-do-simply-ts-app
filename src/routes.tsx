import React from "react";
import { RouteProps } from "react-router-dom";
import TasksList from "./containers/Tasks";
import Header from "./components/Common/header";

const routes: RouteProps[] = [
  {
    path: "/",
    element: (
      <>
        <Header />
        <TasksList />
      </>
    ),
  },
];

export default routes;
