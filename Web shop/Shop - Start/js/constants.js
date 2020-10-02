const action = {
  UNKNOWN: 0,
  CATEGORY: 1,
  SEARCH: 2,
  FAVORITES: 3,
  CART: 4,
};

let lastAction = action.UNKNOWN;
let firstCategoryId = 0;
let selectedCategoryId = 0;
let searchTerm = "";
let baseUrl = "https://webstoretostockholm.azurewebsites.net/api";
