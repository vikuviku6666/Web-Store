let categoriesUi = document.querySelector("#categories-ui");
let personMobileUser = document.querySelector("#person-mobile-user");
let clickCategories = document.getElementById("click-categories");
categoriesUi.innerHTML = "";
personMobileUser.innerHTML = "";

categoriesUi.onclick = async (event) => {
  let Id = event.target.value;
  try {
    
    loadCategoryProducts(Id); 
  } catch (err) {
    console.log("loadCategoryProducts: ERROR", err, event);
  }
};

async function loadCategories() {
  try {
    const result = axios.get(
      `https://webstoretostockholm.azurewebsites.net/api/category`
    );
    const { data: category } = await result;
    
    
    category.forEach((element) => {
      categoriesUi.innerHTML += `<a><li value="${element.Id}">
                <span class="d-flex align-items-center nav-link-inline py-3 border-bottom cursor-pointer">
                <i class="text-primary mr-2 mt-1 fas fa-${element.Icon}"></i>
                <span>${element.Category}</span>
                </span>
                </li></a>`;
    });
  } catch (err) {
    console.log("loadCategoryProducts: ERROR", err);
  }
}

async function getCustomersUsers() {
  try {
    const result = axios.get(
      `https://webstoretostockholm.azurewebsites.net/api/customers`
    );
    const { data: customer } = await result;
    customer.forEach((element) => {
      personMobileUser.innerHTML += `<option >${element.FirstName} ${element.LastName}</option>`;
    });
  } catch (err) {
    console.log("getCustomers: ERROR", err);
  }
}
