function includeHTML() {
  let  xhttp;
  
      xhttp.onloadend = function () {
        // Call function that loads the customers into the drop-down
        getCustomers();
       
        // Call function that loads the product categories
        loadCategories();
      }

      /*exit the function:*/
      return;
};
  
