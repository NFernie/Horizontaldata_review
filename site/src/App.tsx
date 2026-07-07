import { HashRouter, Route, Routes } from "react-router-dom";
import { AppShell } from "@/components/AppShell";
import { IntraWellStats } from "@/pages/IntraWellStats";
import { PortfolioDashboard } from "@/pages/PortfolioDashboard";
import { WaterRiskExplorer } from "@/pages/WaterRiskExplorer";
import { WellDetail } from "@/pages/WellDetail";

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<PortfolioDashboard />} />
          <Route path="well/:alias" element={<WellDetail />} />
          <Route path="water-risk" element={<WaterRiskExplorer />} />
          <Route path="intra/:alias" element={<IntraWellStats />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
