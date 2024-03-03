import { Navigate } from 'react-router-dom';
import { JournalPage } from '../pages/JournalPage';
import { JournalApp } from '../../JournalApp';

export const JournalRoutes = {
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
};
