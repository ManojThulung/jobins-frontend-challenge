import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import OrderManagement from "./pages/OrderManagement";
import ProductList from "./pages/ProductList";
import AddProducts from "./pages/AddProducts";
import Brand from "./pages/Brand";
import PageTitle from "./components/common/PageTitle";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              <>
                <PageTitle title="Login" />
                <Login />
              </>
            }
          />
          <Route element={<PrivateRoute />}>
            <Route
              path="/"
              element={
                <>
                  <PageTitle title="Dashboard" />
                  <Dashboard />
                </>
              }
            />
            <Route
              path="/order-management"
              element={
                <>
                  <PageTitle title="Order Management" />
                  <OrderManagement />
                </>
              }
            />
            <Route
              path="/brand"
              element={
                <>
                  <PageTitle title="Brand" />
                  <Brand />
                </>
              }
            />
            <Route
              path="/add-products"
              element={
                <>
                  <PageTitle title="Add Products" />
                  <AddProducts />
                </>
              }
            />
            <Route
              path="/product-list"
              element={
                <>
                  {" "}
                  <PageTitle title="Product List" />
                  <ProductList />
                </>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
