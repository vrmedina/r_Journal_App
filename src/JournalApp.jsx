import { Outlet } from "react-router-dom";
import { AppTheme } from "./themes";

export const JournalApp = () => {
  return (
    <AppTheme>
      <Outlet />
    </AppTheme>
  );
};
