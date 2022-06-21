import Product from "./components/product/Product";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Products />

      {/* <Product /> */}
    </div>
  );
}

export default App;
