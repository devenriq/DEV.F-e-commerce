export const getProducts = async (searchWord) => {
  const urlAllProducts = `https://fakestoreapi.com/products`;
  const urlCategory = `https://fakestoreapi.com/products/category/${encodeURI(
    searchWord
  )}?limit=10`;

  //* Si no se encuentra ninguna categoría, se renderizan todos los productos
  //! Mejorar la búsqueda, porque no se encuentra en la lógica el caso de ingreso de categorías no existentes

  if (searchWord) {
    const fetched = await fetch(urlCategory);
    const data = await fetched.json();
    const dataInfo = data.map((item) => {
      return {
        id: item.id,
        image: item.image,
        description: item.description,
        category: item.category,
        price: item.price,
        title: item.title,
      };
    });
    // console.log(dataInfo);
    return dataInfo;
  } else {
    const fetched = await fetch(urlAllProducts);
    const data = await fetched.json();
    const dataInfo = data.map((item) => {
      return {
        id: item.id,
        image: item.image,
        description: item.description,
        category: item.category,
        price: item.price,
        title: item.title,
      };
    });
    // console.log(dataInfo);
    return dataInfo;
  }
};

//* Categories:
// "electronics"
// "men's clothing"
// "jewelery"
// "women's clothing"
