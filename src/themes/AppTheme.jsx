import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { darkTheme, lightTheme, purpleTheme } from "./";

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
