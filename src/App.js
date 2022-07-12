import { Routes, BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";
import CheckoutPage from "./components/CheckoutPage/CheckoutPage";
import SignIn from "./components/Signin/Signin";
import SignUp from "./components/Signup/Signup";
import { useEffect } from "react";
import { auth } from "./firebase";
import { actionTypes } from "./components/Reducer/Reducer";
import { useStateValue } from "./components/StateProvider/StateProvider";
// import Product from "./components/product/Product";
// import CheckoutCard from "./components/CheckoutCard/CheckoutCard";

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/checkout-page" element={<CheckoutPage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
