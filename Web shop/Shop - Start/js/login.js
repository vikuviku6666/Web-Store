let personSelect = document.querySelector("#person-select");
personSelect.innerHTML = "";

async function getCustomers() {
  try {
    const result = axios.get(
      `https://webstoretostockholm.azurewebsites.net/api/customers`
    );
    const { data: customer } = await result;
    localStorage.CustomerId = customer[0].Id;
    customer.forEach((element) => {
      personSelect.innerHTML += `<option customer-id=element>${element.FirstName} ${element.LastName}</option>`;
    });
  } catch (err) {
    console.log("getCustomers: ERROR", err);
  }
  getCustomersUsers();
  displayBasicCart();
  loadCategories();
  createProductCard();
}

getCustomers();

onSelectedCustomer = (event) => {
  try {
    displayBasicCart();
    loadCategoryProducts();
  } catch (err) {
    console.log("onSelectedCustomer: ERROR", err, event);
  }
};
