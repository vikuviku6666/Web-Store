search = async (event) => {
  try {
    event.preventDefault();
    let productsDiv = document.getElementById("product-api");
    let productSearch = document.getElementById("product-search");
    let lastAction = action.SEARCH;
    let searchTerm = productSearch.innerText;
    const result = axios.get(
      `https://webstoretostockholm.azurewebsites.net/api/Products`
    );
    const { data: products } = await result;
    products.forEach((element) => {
      productsDiv.innerHTML += `
              createProductCard();
             `;
      localStorage.CartTotal = element.Total;
    });
  } catch (err) {
    console.log("loadCategoryProducts: Error", err, event);
  }
};
