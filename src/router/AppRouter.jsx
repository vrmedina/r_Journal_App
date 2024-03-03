import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import { CheckingAuth } from "../ui";
import { JournalApp } from "../JournalApp";
import { JournalPage } from "../journal/pages/JournalPage";
import { LoginPage, RegisterPage } from "../auth/pages";
import { useCheckAuth } from "../hooks/useCheckAuth";

export const AppRouter = () => {
  const status = useCheckAuth();

  if (status === "checking") {
    return <CheckingAuth />;
  }

  // const appRouter = createBrowserRouter([
  //   {
  //     path: '/auth',
  //     element: <JournalApp />,
  //     children: [
  //       {
  //         path: 'login',
  //         element: <LoginPage />,
  //       },
  //       {
  //         path: 'register',
  //         element: <RegisterPage />,
  //       },
  //       {
  //         path: '',
  //         element: <Navigate to={'/auth/login'} />,
  //       },
  //       {
  //         path: '*',
  //         element: <Navigate to={'/auth/login'} />,
  //       },
  //     ],
  //   },
  //   {
  //     path: '/journal',
  //     element: <JournalApp />,
  //     children: [
  //       {
  //         path: '',
  //         element: <JournalPage />,
  //       },
  //       {
  //         path: '*',
  //         element: <Navigate to={'/journal/'} />,
  //       },
  //     ],
  //   },
  //   {
  //     path: '*',
  //     element: <Navigate to={'/journal/'} />,
  //   },
  // ]);

  const publicRoutes = createBrowserRouter([
    {
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
    },
    {
      path: "*",
      element: <Navigate to={"/auth/login"} />,
    },
  ]);

  const privateRoutes = createBrowserRouter([
    {
      path: "/journal",
      element: <JournalApp />,
      children: [
        {
          path: "",
          element: <JournalPage />,
        },
        {
          path: "*",
          element: <Navigate to={"/journal/"} />,
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to={"/journal/"} />,
    },
  ]);

  const appRouter = status === "authenticated" ? privateRoutes : publicRoutes;

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};
