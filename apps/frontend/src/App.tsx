import { Routes, Route, useLocation } from "react-router";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Orders from "./pages/Orders";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/shared/Header";
import Tables from "./pages/Tables";
import Menu from "./pages/Menu";

function App() {
  const location = useLocation();
  const hideHeader = ["/auth"];

  return (
    <>
      {!hideHeader.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
