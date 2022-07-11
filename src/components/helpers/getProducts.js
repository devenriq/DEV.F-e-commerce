export function getProducts() {
  return fetch("https://fakestoreapi.com/products").then((res) => res.json());
}

// const getProducts2 = async (searchWord) => {
//   const urlAllProducts = `https://fakestoreapi.com/products`;
//   const urlCategory = `https://fakestoreapi.com/products/category/${encodeURI(
//     searchWord
//   )}?limit=10`;
// };

//* Categories:
// "electronics"
// "men's clothing"
// "jewelery"
// "women's clothing"
