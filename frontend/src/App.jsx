import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Unauthorized from "./pages/Unauthorized";
import Features from "./ui/Features";
import HowItWorks from "./ui/HowItWorks";
import About from "./ui/About";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import DashboardLayout from "./components/layout/DashboardLayout";
import AdminDashboard from "./components/admin/AdminDashboard";
import SupervisorDashboard from "./components/dashboard/SupervisorDashboard";
import Inventory from "./components/dashboard/Inventory";
import DetectLogs from "./components/dashboard/DetectLogs";
import Orders from "./components/dashboard/Orders";
import Transactions from "./components/dashboard/Transactions";
import Users from "./components/dashboard/Users";
import Products from "./components/dashboard/Products";
import LiveCheckout from "./pages/LiveCheckout";
import CheckoutConfirmation from "./pages/CheckoutConfirmation..jsx";
import ProtectedRoute from "./routes/ProtectedRoute";
import { useAuth } from "./context/AuthContext";

function DashboardDispatcher() {
  const { token, role } = useAuth();
  if (!token) return <Navigate to="/login" replace />;
  if (role === "admin") return <Navigate to="/admin/dashboard" replace />;
  if (role === "supervisor") return <Navigate to="/supervisor/dashboard" replace />;
  return <Navigate to="/unauthorized" replace />;
}

function App() {
  return (
    <Routes>
      {/* Public Marketing / Landing Pages */}
      <Route
        path="/"
        element={
          <>
            <Header />
            <Home />
            <HowItWorks />
            <Features />
            <About />
            <Footer />
          </>
        }
      />
      <Route
        path="/login"
        element={
          <>
            <Header />
            <Login />
          </>
        }
      />
      <Route
        path="/signup"
        element={
          <>
            <Header />
            <Signup />
          </>
        }
      />
      <Route
        path="/howitworks"
        element={
          <>
            <Header />
            <HowItWorks />
            <Footer />
          </>
        }
      />
      <Route
        path="/features"
        element={
          <>
            <Header />
            <Features />
            <Footer />
          </>
        }
      />
      <Route
        path="/about"
        element={
          <>
            <Header />
            <About />
            <Footer />
          </>
        }
      />

      {/* Common / Unauthorized */}
      <Route path="/unauthorized" element={<Unauthorized />} />

      {/* Dashboard Role Dispatcher */}
      <Route path="/dashboard" element={<DashboardDispatcher />} />

      {/* ADMIN PROTECTED ROUTES */}
      <Route
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/inventory" element={<Inventory />} />
        <Route path="/admin/users" element={<Users />} />
      </Route>

      {/* SUPERVISOR PROTECTED ROUTES */}
      <Route
        element={
          <ProtectedRoute allowedRoles={["supervisor"]}>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/supervisor/dashboard" element={<SupervisorDashboard />} />
        <Route path="/supervisor/live-checkout" element={<LiveCheckout />} />
        <Route path="/supervisor/detection-logs" element={<DetectLogs />} />
        <Route path="/supervisor/transactions" element={<Transactions />} />
        <Route path="/supervisor/orders" element={<Orders />} />
        <Route path="/supervisor/final-checkout" element={<CheckoutConfirmation />} />
      </Route>

      {/* Legacy Route Aliases & Redirects */}
      <Route path="/products" element={<Navigate to="/admin/products" replace />} />
      <Route path="/inventory" element={<Navigate to="/admin/inventory" replace />} />
      <Route path="/users" element={<Navigate to="/admin/users" replace />} />
      <Route path="/detect-logs" element={<Navigate to="/supervisor/detection-logs" replace />} />
      <Route path="/transactions" element={<Navigate to="/supervisor/transactions" replace />} />
      <Route path="/orders" element={<Navigate to="/supervisor/orders" replace />} />
      <Route path="/live-checkout" element={<Navigate to="/supervisor/live-checkout" replace />} />
      <Route path="/final-checkout" element={<Navigate to="/supervisor/final-checkout" replace />} />

      {/* Catch-all Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
