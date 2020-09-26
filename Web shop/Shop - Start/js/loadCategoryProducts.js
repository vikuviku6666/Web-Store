let productApi = document.querySelector("#product-api");
productApi.innerHTML = "";
let heart = 
createProductCard = (product) => {
    try {
         axios.all([
            axios.get(`https://webstoretostockholm.azurewebsites.net/api/products`),
            axios.get(`https://webstoretostockholm.azurewebsites.net/api/ProductImages`)
        ])
            .then(axios.spread((obj1, obj2) => {
                let obj3 = (obj1.data).concat(obj2.data); 
                console.log(obj3);
                obj3.forEach((element) => {
                    productApi.innerHTML +=
                        `
                        <div class="card mr-3 mb-3">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                            <img
                                src="${element.Url}"
                                class="card-img"
                                alt=""
                            />
                            <span
                                class="product-sale-label badge badge-success no-border-radius"
                                >${element.PercentOff}% Off</span
                            >
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${element.Product}</h5>
                                <span class="product-category text-muted"
                                >Product Category 1</span
                                >
                                <p class="product-category text-muted">${element.Price}</p>
                                <p class="card-text mb-4">${element.Description}</p>

                                <a
                                productId="1"
                                class="wishlist-btn product-btn ml-2"
                                href="#"
                                onclick="favorite(event, 1)"
                                >
                                <img src="./icons/favorite-24px.svg" alt="Wishlist" />
                                <span class="sr-only">Wishlist</span>
                                </a>

                                <span class="product-footer">
                                <span class="product-buttons">
                                    <a
                                    productId="1"
                                    class="product-btn"
                                    href="#"
                                    onclick="addToCart(1)"
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
            
        }));
            
       
    }
    catch(err){ console.log("createProductCard: ERROR", err, product);}
}

loadCategoryProducts = async (categoryId) => {
    try {
    }
    catch(err){ console.log("loadCategoryProducts: ERROR", err, categoryId);}
}

