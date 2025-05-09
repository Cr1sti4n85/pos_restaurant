import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Orders from "./pages/Orders";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/shared/Header";
import Tables from "./pages/Tables";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
