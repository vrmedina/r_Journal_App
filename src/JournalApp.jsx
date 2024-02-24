import { Outlet } from 'react-router-dom';
import { AppTheme } from './themes';

export const JournalApp = () => {
  return (
    <AppTheme>
      <h1>Journal App</h1>
      <Outlet />
    </AppTheme>
  );
};
