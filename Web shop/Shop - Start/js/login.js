let personSelect = document.querySelector("#person-select");
personSelect.innerHTML = "";




async function getCustomers() {
  try {
    const result = axios.get(
      `https://webstoretostockholm.azurewebsites.net/api/customers`
    );
    const { data: customer } = await result;
    customer.forEach((element) => {
      personSelect.innerHTML += `<option >${element.FirstName} ${element.LastName}</option>`;
      localStorage.CustomerId = element.Id;
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
    basicCart();
  } catch (err) {
    console.log("onSelectedCustomer: ERROR", err, event);
  }
};
