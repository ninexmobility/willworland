import React, { useMemo } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CssBaseline, ThemeProvider } from "@mui/material";
import App from "./App";
import Home from "./pages/Home";
import Uses from "./pages/Uses";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import { store } from "./store/store";
import { useAppSelector } from "./store/hooks";
import { createAppTheme } from "./theme";
import "./index.css";

const queryClient = new QueryClient();

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const mode = useAppSelector((state) => state.preferences.mode);
  const theme = useMemo(() => createAppTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AppThemeProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="uses" element={<Uses />} />
                <Route path="projects" element={<Projects />} />
                <Route path="projects/:slug" element={<ProjectDetail />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AppThemeProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
