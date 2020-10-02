let shoppingBag = document.querySelector("#shopping-bag");
shoppingBag.innerHTML = "";

 function displayBasicCart(element) {
  return `
             <span class="d-block position-relative">
                    <span id="cart-count" class="navbar-btn-badge bg-primary text-light"> ${element.Count}</span>
                    <img class="mx-auto mb-1 fas fa-list-ol" style="width:27px; height:auto;"
                        src="./icons/add_shopping_cart-24px.svg" alt="Shopping cart">
                        <span class="cart-total">${element.Total} </span>
                </span> 
                `
 } 
  


  basicCart = async (Id) => {
    try {
      const result = axios.get(`https://webstoretostockholm.azurewebsites.net/api/cart/${localStorage.CustomerId}`);
      const { data: products } = await result;
      shoppingBag.innerHTML = `${products.map(displayBasicCart).join(" ")}`
   } catch (err) {
      console.log("basicCart: Error", err);
    }
  }

addToCart = async (Id) => {
 axios.post('https://webstoretostockholm.azurewebsites.net/api/CartProducts', 
    {
      CustomerId: localStorage.CustomerId,
      ProductId: Id,
      Count: 1
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error,Id);
    });
  basicCart();
}

