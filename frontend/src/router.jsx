import { Routes, Route, Navigate } from "react-router-dom";
import AppShell from "./App";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CampaignList from "./pages/Campaigns";


export default function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      {/* protected area */}
      <Route element={<AppShell />}>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/campaigns" element={<CampaignList />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
