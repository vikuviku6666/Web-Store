search = async (event) => {
  if (event === MouseEvent || KeyboardEvent) { 
  try {
    event.preventDefault();
    let productsDiv = document.getElementById("product-api");
    let productSearch = document.getElementById("product-searched").value;
    let searchTerm = productSearch;
    lastAction = action.SEARCH;
    const result = axios.get(
      `https://webstoretostockholm.azurewebsites.net/api/searchproducts?customerId=${localStorage.CustomerId}&search=${searchTerm}`
    );
    const { data: products } = await result;
    productsDiv.innerHTML = `${products.map(productTemplate).join(" ")}`
  }
  catch (err) {
    console.log("SearchProducts: Error", err);
  }
}
};
   
      
    
