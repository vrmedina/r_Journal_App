import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { JournalApp } from '../JournalApp';
import { JournalPage } from '../journal/pages/JournalPage';
import { LoginPage, RegisterPage } from '../auth/pages';

export const AppRouter = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/auth',
      element: <JournalApp />,
      children: [
        {
          path: 'login',
          element: <LoginPage />,
        },
        {
          path: 'register',
          element: <RegisterPage />,
        },
        {
          path: '',
          element: <Navigate to={'/auth/login'} />,
        },
        {
          path: '*',
          element: <Navigate to={'/auth/login'} />,
        },
      ],
    },
    {
      path: '/journal',
      element: <JournalApp />,
      children: [
        {
          path: '',
          element: <JournalPage />,
        },
        {
          path: '*',
          element: <Navigate to={'/journal/'} />,
        },
      ],
    },
    {
      path: '*',
      element: <Navigate to={'/journal/'} />,
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};
