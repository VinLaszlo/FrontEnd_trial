import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LoginPage,
  SignupPage,
  ActivationPage,
  HomePage,
  ProgramsPage,
  ProgramDetailsPage,
  ProfilePage,
  OwnerActivationPage,
  AdminLoginPage,
} from "./routes/Routes.js";
import {
  AdminDashboardPage,
  AdminCreateProgram,
  AdminAllPrograms,
  AdminPreviewPage,
  AdminSettingsPage,
} from "./routes/AdminRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Store from "./redux/store";
import { loadOwner, loadUser } from "./redux/actions/user";
import ProtectedRoute from "./routes/ProtectedRoute";
import { AdminHomePage } from "./AdminRoutes.js";
import OwnerProtectedRoute from "./routes/OwnerProtectedRoute";
import { getAllPrograms } from "./redux/actions/program";

const App = () => {
  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadOwner());
    Store.dispatch(getAllPrograms());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route
          path="/activation/:activation_token"
          element={<ActivationPage />}
        />
        <Route
          path="/owner/activation/:activation_token"
          element={<OwnerActivationPage />}
        />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/program/:id" element={<ProgramDetailsPage />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route path="/admin/preview/:id" element={<AdminPreviewPage />} />
        <Route path="/admin-login" element={<AdminLoginPage />} />
        <Route
          path="/admin/:id"
          element={
            <OwnerProtectedRoute>
              <AdminHomePage />
            </OwnerProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <OwnerProtectedRoute>
              <AdminSettingsPage />
            </OwnerProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <OwnerProtectedRoute>
              <AdminDashboardPage />
            </OwnerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-create-program"
          element={
            <OwnerProtectedRoute>
              <AdminCreateProgram />
            </OwnerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-programs"
          element={
            <OwnerProtectedRoute>
              <AdminAllPrograms />
            </OwnerProtectedRoute>
          }
        />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  );
};

export default App;
