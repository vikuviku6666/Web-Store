let productApi = document.querySelector("#product-api");
productApi.innerHTML = "";

createProductCard = (product) => {
  try {
    /* let heart = document.createElement("img");
      const isFavorite = true;
      console.log("createProductCard -> heart", heart)
      
      if(isFavorite === true){
        
        heart.src = "./icons/favorite-24px.svg";   
      }else {
        heart.src = "./icons/favorite_border-24px.svg";
      } */
    axios
      .all([
        axios.get(`https://webstoretostockholm.azurewebsites.net/api/products`),
        axios.get(
          `https://webstoretostockholm.azurewebsites.net/api/ProductImages`
        ),
        axios.get(
          `https://webstoretostockholm.azurewebsites.net/api/ProductCategorys`
        ),
      ])
      .then(
        axios.spread((obj1, obj2, obj5) => {
          let obj3 = obj1.data.concat(obj2.data, obj5.data);

          let obj4 = [
            { ...obj3[0], ...obj3[7] },
            { ...obj3[1], ...obj3[8] },
            { ...obj3[2], ...obj3[9] },
            { ...obj3[3], ...obj3[10] },
            { ...obj3[4], ...obj3[11] },
            { ...obj3[5], ...obj3[12] },
            { ...obj3[6], ...obj3[13] },
          ];

          /* let obj6 = [{ ...obj4[0], ...obj3[14] }, { ...obj4[0], ...obj3[15] }, { ...obj4[0], ...obj3[16] }, { ...obj4[0], ...obj3[17] },
                      { ...obj4[0], ...obj3[18] }, { ...obj4[0], ...obj3[20] }, { ...obj4[0], ...obj3[21] },] 
                      console.log("createProductCard -> obj6", obj6)*/

          obj4.forEach((element) => {
            productApi.innerHTML += `
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
                                  <img src="./icons/favorite-24px.svg" alt="Wishlist" id="favorites-img"> </img>
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
        })
      );
  } catch (err) {
    console.log("createProductCard: ERROR", err, product);
  }
  /* return obj; */
};

loadCategoryProducts = async (categoryId) => {
  try {
    let productsDiv = document.getElementById("product-api");
    let lastAction = action.CATEGORY;
    /*  let selectedCategoryId =  */
    let result = axios.get(
      `https://webstoretostockholm.azurewebsites.net/api/ProductCategoriesByCategoryId/${categoryId}`
    );
    const { data: favorites } = await result;
    console.log("getFavorites -> favorites ", favorites);
    favorites.forEach((element) => {
      productsDiv.innerHTML += `
               createProductCard(element); 
                `;
    });
  } catch (err) {
    console.log("loadCategoryProducts: ERROR", err, categoryId);
  }
  return;
};
