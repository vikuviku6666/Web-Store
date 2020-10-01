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
      function productTemplate(element){
      console.log("productTemplate -> element", element)
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
                <img src="./icons/favorite-24px.svg" alt="Wishlist" id="favorites-img"> </img>
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

  
        /* let heart = document.createElement("img");
          const isFavorite = true;
          console.log("createProductCard -> heart", heart)
          
          if(isFavorite === true){
            
            heart.src = "./icons/favorite-24px.svg";   
          }else {
            heart.src = "./icons/favorite_border-24px.svg";
          } */
      createProductCard = async (product) => {
      try {
      const result = axios.get(`https://webstoretostockholm.azurewebsites.net/api/Products/1`);
      const { data: products } = await result;
      productApi.innerHTML = `${products.map(productTemplate).join(" ")}`
      } catch (err) {
        console.log("createProductCard: ERROR", err);
      }
      };
     

      loadCategoryProducts = async (categoryId) => {
        try {
          let productsDiv = document.getElementById("product-api");
          lastAction = action.CATEGORY;
          /*  let selectedCategoryId =  */
          let result = axios.get(
            `https://webstoretostockholm.azurewebsites.net/api/Products/1`
          );
          const { data: favorites } = await result;
          console.log("getFavorites -> favorites ", favorites);
          favorites.forEach((element) => {
            productsDiv.innerHTML += 
                    createProductCard(element); 
                      ;
          });
        } catch (err) {
          console.log("loadCategoryProducts: ERROR", err, categoryId);
        }

      };
