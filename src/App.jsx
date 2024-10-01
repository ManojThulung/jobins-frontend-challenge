import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import OrderManagement from "./pages/OrderManagement";
import ProductList from "./pages/ProductList";
import AddProducts from "./pages/AddProducts";
import Brand from "./pages/Brand";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/order-management" element={<OrderManagement />} />
            <Route path="/brand" element={<Brand />} />
            <Route path="/add-products" element={<AddProducts />} />
            <Route path="/product-list" element={<ProductList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
