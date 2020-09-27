let productApi = document.querySelector("#product-api");
productApi.innerHTML = "";
let heart = 
createProductCard = (product) => {
    try {
         axios.all([
            axios.get(`https://webstoretostockholm.azurewebsites.net/api/products`),
            axios.get(`https://webstoretostockholm.azurewebsites.net/api/ProductImages`)
        ])
            .then(axios.spread((obj1, obj2) => {
                let obj3 = (obj1.data).concat(obj2.data); 
                console.log(obj3);
                obj3.forEach((element) => {
                    productApi.innerHTML +=
                        `
                       
                        `;
                    
                  });
            
        }));
            
       
    }
    catch(err){ console.log("createProductCard: ERROR", err, product);}
}

loadCategoryProducts = async (categoryId) => {
    try {
    }
    catch(err){ console.log("loadCategoryProducts: ERROR", err, categoryId);}
}

