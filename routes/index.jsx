import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

// import Dashboard from "@/pages/Dashboard/Dashboard";
import Energia from "../app/pages/energia";
// import Bateria from "@/pages/Bateria";
// import Alertas from "@/pages/Alertas/Alertas";
// import Manutencao from "@/pages/Manutencao/Manutencao";
// import Edificio from "@/pages/Edificio/Edificio";
import Login from "../app/pages/auth/login";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas públicas */}
        <Route path="/login" element={<Login />} />

        {/* Rotas com layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/energia" element={<Energia />} />
          <Route path="/bateria" element={<Bateria />} />
          <Route path="/alertas" element={<Alertas />} />
          <Route path="/manutencao" element={<Manutencao />} />
          <Route path="/edificio" element={<Edificio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
