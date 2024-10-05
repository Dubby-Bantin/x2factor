import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthPage from "./auth/authpage";
import WingoGame from "./home/games/wingo/wingo";
import Admin from "./pages/admin/Admin";
import AdminDashboard from "./pages/admin/pages/Users";
// import { AuthProvider } from "./context/AuthContext"; // Import the AuthProvider
import ProtectedRoute from "./pages/admin/components/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";
import AdminLogin from "./pages/admin/pages/AdminLogin";
import AmountSetup from "./pages/admin/pages/AmountSetUp";
// import ProtectedRoute from "./components/ProtectedRoute"; // Import the ProtectedRoute

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "/auth/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/wingogame",
    element: <WingoGame />,
  },
  {
    path: "/admin",
    element: <ProtectedRoute element={<Admin />} />,
    children: [
      {
        path: "users",
        element: <AdminDashboard />,
      },
      {
        path: "amount-setup",
        element: <AmountSetup />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
