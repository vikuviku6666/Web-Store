getFavorites = async (event) => {
 /*  if (event == MouseEvent) { */
    try {
      event.preventDefault(); 
      let productsDiv = document.getElementById("product-api");
      lastAction = action.FAVORITES;
      let result = axios.get(
        `https://webstoretostockholm.azurewebsites.net/api/FavoritesByCustomerId/1`
      );
        const { data: favorites } = await result;
        console.log("getFavorites -> favorites ", favorites )
        favorites.forEach((element) => {
            productsDiv.innerHTML += 
            `
            <div class="card mr-3 mb-3">
            <div class="row no-gutters">
                <div class="col-md-4">
                <img
                    src="${element.Url}"
                    class="card-img"
                    alt="Product-Image"
                />
            
                <span
                    class="product-sale-label badge badge-success no-border-radius"
                    >${element.PercentOff}% Off</span>

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
                    <img src="./icons/favorite-24px.svg" alt="Wishlist" />
                    <span class="sr-only">Wishlist</span>
                    </a>

                    <span class="product-footer">
                    <span class="product-buttons">
                        <a
                        productId="${element.ProductId}"
                        class="product-btn"
                        href="#"
                        onclick="addToCart(${element.ProductId})"
                        >
                        <img
                            src="./icons/add_shopping_cart-24px.svg"
                            alt="Shopping cart"
                        />
                        <span class="sr-only">Shopping Cart</span>
                        </a>
                    
                    </span>
                    <span class="product-stars">
                        <span class="product-review-median">4</span>
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
            `;
      });
    } catch (err) {
      console.log("getFavorites: Error", err, event);
    }
  
};

favorite = async (event, productId) => {
    try {
      
  } catch (err) {
    console.log("favorite: Error", err, event, productId);
  }
};
