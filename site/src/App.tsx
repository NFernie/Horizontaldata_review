import { HashRouter, Route, Routes } from "react-router-dom";
import { AppShell } from "@/components/AppShell";
import { PortfolioDashboard } from "@/pages/PortfolioDashboard";

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<PortfolioDashboard />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
