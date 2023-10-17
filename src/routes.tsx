import React from "react";
import { RouteProps } from "react-router-dom";
import TasksList from "./containers/Tasks";

const routes: RouteProps[] = [
  {
    path: "/",
    element: (
      <TasksList />
    ),
  },
];

export default routes;
