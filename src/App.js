import { Routes, BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";
import CheckoutPage from "./components/CheckoutPage/CheckoutPage";
import SignIn from "./components/Signin/Signin";
import SignUp from "./components/Signup/Signup";
// import Product from "./components/product/Product";
// import CheckoutCard from "./components/CheckoutCard/CheckoutCard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/checkout-page" element={<CheckoutPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
