//Debouncing = > It is an optimization technique used to call a function after the user has stopped typing. It is used to limit the rate at which a function is called.

// deboucing - it will wait for the user to stop typing and then it will call the function

let input = document.getElementById("input");

function handleSearch() {
   
    for(let i = 0;i<1000000000;i++){
        let a = i;
    }
     console.log("This is running", input.value);
}

function debounce(func, delay) {
  let debounceTimer;
    return function (...args) {    
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      func();
    }, delay);
  };
}

 input.addEventListener("input", debounce(handleSearch, 500));
//input.addEventListener("input", handleSearch);