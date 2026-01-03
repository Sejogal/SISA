import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '@/app/pages/login';
import Register from "../app/pages/register";
import Dashboard from "../app/(tabs)/dashboard";
import ProtectedRoute from "../components/ProtectedRoute";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
