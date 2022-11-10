// ITERATION 1

function updateSubtotal(product) {
  //... your code goes here
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  const subtotalPrice = price * quantity;
  const resultSubtotal = product.querySelector(".subtotal span");
  resultSubtotal.innerHTML = subtotalPrice;
  return subtotalPrice;  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  


// js/index.js

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});
  
  // ITERATION 2
  //... your code goes here
  const productsAll = document.getElementsByClassName("product");
  let totalResult =0;
  for (let i=0;i<productsAll.length;i++) {
  const res = updateSubtotal(productsAll[i]);
  totalResult += res
  console.log(totalResult)
  }
  //Nota a preguntar: probé con forEach y no hubo manera


  // ITERATION 3
  //... your code goes here
  const resultTotal = document.querySelector("#total-value span");
  resultTotal.innerHTML = totalResult;

 
  //const totalResult = document.querySelector("#total-value span");
  //totalResult.innerHTML=totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
