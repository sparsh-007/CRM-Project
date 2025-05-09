import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme";

export const Providers = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);
