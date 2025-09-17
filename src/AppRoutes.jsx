import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalPage } from "./Pages/GlobalPage";
import { ModulePage } from "./Pages/ModulePage";
import { StyledPage } from "./Pages/StyledPage";
import { TailwindPage } from "./Pages/TailwindPage";
import { ThemeProvider } from "./components/ThemeContext";

export function AppRoutes() {
  return (
    <ThemeProvider >
      <BrowserRouter>
        <Routes>
          <Route index element={<GlobalPage />} />
          <Route path="module" element={<ModulePage />} />
          <Route path="styled" element={<StyledPage />} />
          <Route path="tailwind" element={<TailwindPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
