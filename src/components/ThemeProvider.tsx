"use client";

import { ThemeProvider as MTThemeProvider } from "@material-tailwind/react";

const theme = {
  colors: {
    primary: "#6366F1",
    secondary: "#64748b",
    accent: "#6366F1",
  },
  typography: {
    defaultProps: {
      color: "white",
    },
  },
  button: {
    defaultProps: {
      color: "blue",
      size: "md",
      variant: "filled",
    },
  },
  card: {
    defaultProps: {
      color: "transparent",
    },
  },
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <MTThemeProvider value={theme}>{children}</MTThemeProvider>;
}