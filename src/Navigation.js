import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AdminPage from "./pages/AdminPage";
import AdminAddPage from "./pages/AdminAddPage";
import Navbar from "./components/Navbar";
import AdminProvider from "./contexts/AdminProvider";
import AdminEditPage from "./pages/AdminEditPage";
import ClientProvider from "./contexts/ClientProvider";

function Navigation() {
  return (
    <ClientProvider>
      <AdminProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/admin/add" element={<AdminAddPage />} />
            <Route path="/admin/edit/:id" element={<AdminEditPage />} />
          </Routes>
        </BrowserRouter>
      </AdminProvider>
    </ClientProvider>
  );
}

export default Navigation;
