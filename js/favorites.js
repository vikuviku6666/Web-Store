
 function favoriteTemplate(element){
  return `
  <div class="card mr-3 mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img
          src="${element.Image}"
          class="card-img"
          alt="Product-Image"/>
          ${ element.PercentOff > 0 ? percentOff(element.PercentOff) : ''}
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${element.Product}</h5>
          <span class="product-category text-muted"
          >${element.Category}
          </span>
          <p class="product-category text-muted">${element.Price}</p>
          <p class="card-text mb-4">${element.Description}</p>
                              

          <a
            productId="${element.ProductId}"
            class="wishlist-btn product-btn ml-2"
            href="#"
            onclick="favorite(event, ${element.ProductId})"
          >
            <img src="./icons/favorite-24px.svg"  alt="Wishlist" id="favorites-img"> </img>
            <span class="sr-only">Wishlist</span>
          </a>

          <span class="product-footer">
            <span class="product-buttons">
              <a
                productId="${element.Id}"
                class="product-btn"
                href="#"
                onclick="addToCart(${element.Id})"
              >
                <img
                  src="./icons/add_shopping_cart-24px.svg"
                  alt="Shopping cart"
                />
                <span class="sr-only">Shopping Cart</span>
              </a>
                              
            </span>
            <span class="product-stars">
              <span class="product-review-median">${element.Stars}</span>
              <img
                src="./icons/star_border-24px.svg"
                alt="Review Result"
              />
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>
  `
  }

getFavorites = async (event) => {
  if (event === MouseEvent || KeyboardEvent) {
   
    try {
      event.preventDefault();
      let productsDiv = document.getElementById("product-api");
      lastAction = action.FAVORITES;
      const result = axios.get(`https://webstoretostockholm.azurewebsites.net/api/favorites/${localStorage.CustomerId}`);
      const { data: favorites } = await result;
      productsDiv.innerHTML = `${favorites.map(favoriteTemplate).join(" ")}`
    }
    catch (err) {
      console.log("getFavorites: Error", err);
    }
  }
};





favoritesCounts = async (Id) => {
  try {
    let productsCounts = document.getElementById("favorite-count");
    const result = axios.get(`https://webstoretostockholm.azurewebsites.net/api/favorites/${Id}`);
    const { data: products } = await result;
   
    const favoritesCount = products.length;
    productsCounts.innerHTML = `${favoritesCount}`;
  }
  catch (err) {
    console.log("favoritesCounts: Error", err);
  
}
};
   
   
    
 
   
      

favorite = async (event, productId) => {
  if (event === MouseEvent || KeyboardEvent) {
   
    try {
    } catch (err) {
      console.log("favorite: Error", err, event, productId);
    }
  }
};
