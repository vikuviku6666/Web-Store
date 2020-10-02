getFavorites = async (event) => {
  if (event === MouseEvent || KeyboardEvent) {
   
    try {
      event.preventDefault();
      let productsDiv = document.getElementById("product-api");
      lastAction = action.FAVORITES;
      const result = axios.get(`https://webstoretostockholm.azurewebsites.net/api/Products?categoryId=1&customerId=${localStorage.CustomerId}`);
      const { data: products } = await result;
      console.log("getFavorites -> products ", products )
      let favorites = [];
      console.log("getFavorites -> favorites", favorites)
      products.map((element) => {
        if(element.IsFavorite > 0){
          favorites.push('element');
       }
      });
      
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
