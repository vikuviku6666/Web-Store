getFavorites = async (event) => {
  if (event === MouseEvent || KeyboardEvent) {
   
    try {
      event.preventDefault();
      let productsDiv = document.getElementById("product-api");
      lastAction = action.FAVORITES;
      const result = axios.get(`https://webstoretostockholm.azurewebsites.net/api/Products?categoryId=${localStorage.CategoryId}&customerId=${localStorage.CustomerId}`);
      const { data: products } = await result;
      console.log("getFavorites -> products ", products )
      const favorites = products.filter(product => product.IsFavorite > 0);
      productsDiv.innerHTML = `${favorites.map(productTemplate).join(" ")}`
    }
    catch (err) {
      console.log("getFavorites: Error", err);
    }
  }
};

favorite = async (event, productId) => {
  try {
  } catch (err) {
    console.log("favorite: Error", err, event, productId);
  }
};
