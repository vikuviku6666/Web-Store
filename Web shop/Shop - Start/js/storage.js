localStorageKeyExist = (key) => {
  try {
  } catch (err) {
    console.log("localStorageKeyExist: ERROR", err, key);
  }
};

const cat = localStorage.getItem("CustomerId");
