let shoppingBag = document.querySelector("#shopping-bag");
shoppingBag.innerHTML = "";

async function displayBasicCart(customerId) {
  try {
  /*   const customerId = localStorage.CustomerId; */
    const result = axios.get(
      `https://webstoretostockholm.azurewebsites.net/api/cart/${customerId}`
    );
    const { data: cart } = await result;
    cart.forEach((element) => {
      shoppingBag.innerHTML += ` <span class="d-block position-relative">
                    <span id="cart-count" class="navbar-btn-badge bg-primary text-light"> ${element.Count}</span>
                    <img class="mx-auto mb-1 fas fa-list-ol" style="width:27px; height:auto;"
                        src="./icons/add_shopping_cart-24px.svg" alt="Shopping cart">
                        <span class="cart-total">${element.Total} </span>
                </span> `;
      localStorage.CartTotal = element.Total;
    });
  } catch (err) {
    console.log("displayBasicCart: Error", err, cart);
  }
}

basicCart = async (Id) => {
  try {
    displayBasicCart(Id);
  } catch (err) {
    console.log("basicCart: Error", err);
  }
};

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

