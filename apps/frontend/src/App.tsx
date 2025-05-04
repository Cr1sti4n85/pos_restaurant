import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Orders from "./pages/Orders";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
