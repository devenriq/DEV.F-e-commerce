async function fetchProducts(id) {
  const fetched = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await fetched.json();

  const { title, price, image, description, category, rating } = data;

  return {
    title,
    price,
    image,
    description,
    category,
    rating,
  };
}

export default fetchProducts;

fetchProducts(10);
