import { Navigate } from "react-router-dom";
import { JournalApp } from "../../JournalApp";
import { LoginPage, RegisterPage } from "../pages";

export const AuthRoutes = {
  path: "/auth",
  element: <JournalApp />,
  children: [
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "register",
      element: <RegisterPage />,
    },
    {
      path: "",
      element: <Navigate to={"/auth/login"} />,
    },
    {
      path: "*",
      element: <Navigate to={"/auth/login"} />,
    },
  ],
};
