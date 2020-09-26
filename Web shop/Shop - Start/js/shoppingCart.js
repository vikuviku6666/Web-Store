let shoppingBag = document.querySelector("#shopping-bag");
shoppingBag.innerHTML = "";

async function displayBasicCart() {
  try {
    const result = axios.get(
      `https://webstoretostockholm.azurewebsites.net/api/cart/1`
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

basicCart = async () => {
  try {
  } catch (err) {
    console.log("basicCart: Error", err);
  }
};

addToCart = async (productId) => {
  try {
  } catch (err) {
    console.log("addToCart: Error", err, productId);
  }
};

createCartItem = (cartItem) => {
  try {
  } catch (err) {
    console.log("createCartItem: ERROR", err, cartItem);
  }
};

displayCartItems = () => {
  try {
  } catch (err) {
    console.log("displayCartItems: ERROR", err);
  }
};

loadCart = async () => {
  try {
  } catch (err) {
    console.log("loadCart: ERROR", err);
  }
};

updateQuantity = async (event, productId) => {
  try {
  } catch (err) {
    console.log("updateQuantity: ERROR", err, event, productId);
  }
};

UpdateCart = async (productId) => {
  try {
  } catch (err) {
    console.log("UpdateCart: ERROR", err, productId);
  }
};

DeleteProductFromCart = async (productId) => {
  try {
  } catch (err) {
    console.log("DeleteProductFromCart: ERROR", err, productId);
  }
};
