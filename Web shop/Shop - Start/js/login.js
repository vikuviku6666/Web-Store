let personSelect = document.querySelector("#person-select");
personSelect.innerHTML = "";

async function getCustomers() {
  try {
    
    const result = axios.get(
      `https://webstoretostockholm.azurewebsites.net/api/customers`
    );
    const { data: customer } = await result;
   /*  localStorage.CustomerId = customer[0].Id; */
    customer.forEach((element) => {
      personSelect.innerHTML += `<option value=${element.Id}>${element.FirstName} ${element.LastName}</option>`;
    });
  } catch (err) {
    console.log("getCustomers: ERROR", err);
  }
  getCustomersUsers();
  basicCart(localStorage.CustomerId);
  loadCategories();
  loadCategoryProducts(localStorage.CategoryId);
}

getCustomers();

onSelectedCustomer = (event) => {
  let selectedCustomer = event.target.value;
 try {
    localStorage.CustomerId = selectedCustomer;
    basicCart(localStorage.CustomerId);
    loadCategoryProducts();
  } catch (err) {
    console.log("onSelectedCustomer: ERROR", err, selectedCustomer);
  }
};
