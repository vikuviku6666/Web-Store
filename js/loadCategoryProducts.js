      let productApi = document.getElementById("product-api");
      productApi.innerHTML = "";
      /* Product template */
      
      function percentOff(percentOff) {
        if(percentOff > 0){ 
          return`
          <span class="product-sale-label badge badge-success no-border-radius">${percentOff}% Off</span>
          `
        } 
      }
      
    function productTemplate(element) {
      function favoriteTo(favorite) {
        if(favorite > 0){ 
          return`
          onclick="favoriteDelete(event, ${element.Id})" 
          `
        } else {
          return`
          onclick="favoritePost(event, ${element.Id})"
          `
          
        }
      } 
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
                  <p class="product-category text-muted">$${element.Price}</p>
                  <p class="card-text mb-4">${element.Description}</p>
                                      

                  <a
                    productId="${element.Id}"
                    class="wishlist-btn product-btn ml-2"
                    href="#"
                    id="favorite-button"
                    ${favoriteTo(element.IsFavorite)}
                  >

                    <img src=${element.IsFavorite > 0 ? "./icons/favorite-24px.svg" : "./icons/favorite_border-24px.svg" } alt="Wishlist" id="favorites-img"> </img>
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

  
        
      createProductCard = async () => {
      try {
     /*  const result = axios.get(`https://webstoretostockholm.azurewebsites.net/api/Products?categoryId=${Id}&customerId=${localStorage.CustomerId}`);
      const { data: products } = await result;
      productApi.innerHTML = `${products.map(productTemplate).join(" ")}` */
      } catch (err) {
        console.log("createProductCard: ERROR", err);
      }
      };
     

      loadCategoryProducts = async (Id) => {
        try {
          lastAction = action.CATEGORY;
          const result = axios.get(`https://webstoretostockholm.azurewebsites.net/api/Products?categoryId=${localStorage.CategoryId}&customerId=${localStorage.CustomerId}`);
          const { data: products } = await result;
          productApi.innerHTML = `${products.map(productTemplate).join(" ")}`
        } catch (err) {
          console.log("loadCategoryProducts: ERROR", err, Id );
        }

      };
