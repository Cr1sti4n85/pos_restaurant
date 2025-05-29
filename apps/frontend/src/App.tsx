import { Routes, Route, useLocation } from "react-router";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Orders from "./pages/Orders";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/shared/Header";
import Tables from "./pages/Tables";
import Menu from "./pages/Menu";
import ProtectedRoutes from "./components/auth/ProtectedRoute";
import Dashboard from "./pages/Dashboard";

function App() {
  const location = useLocation();
  const hideHeader = ["/auth"];

  return (
    <>
      {!hideHeader.includes(location.pathname) && <Header />}
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          }
        />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/orders"
          element={
            <ProtectedRoutes>
              <Orders />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/tables"
          element={
            <ProtectedRoutes>
              <Tables />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/menu"
          element={
            <ProtectedRoutes>
              <Menu />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
