/*
E-commerce

You have to create an e-commerce shopping cart

First of all we need 2 arrays, 
the list of available products and the list of products introduced in the shopping cart.

1. Fill the products list with at least 4 products, what attributes de we have? 
at least should have:
var product = {
  id:
  name:
  price:
  stock:
}
id is a unique number that identifies each product

3. Create a function addToShoppingCart to add a product to the shopping cart list giving the product id,
the function will add the product to the selectedProduct list, and add the price to the totalPrice

4. Create the function removeFrom ShoppingCart to remove a product that a client does not like anymore

5. Create the function shop, the function will empty the list and set 0 in the totalPrice of the shopping cart
In addition will substract 1 in the product stock of bought products

6. If there is not enough stock, the product cannot be added to the shopping cart
*/

const products = [];

const product1 = {
  id: 1,
  name: "Toaster X56 Plus",
  price: 12.98,
  stock: 105
};
const product2 = {
  id: 2,
  name: "Watch Rocker",
  price: 9.99,
  stock: 2
};
const product3 = {
  id: 3,
  name: "Red Bull",
  price: 2.35,
  stock: 50
};
const product4 = {
  id: 4,
  name: "Cheetos",
  price: 1.79,
  stock: 20
};

products.push(product1);
products.push(product2);
products.push(product3);
products.push(product4);

const shoppingCart = {
  totalPrice: 0,
  selectedProducts: [],
};

/*3. Create a function addToShoppingCart to add a product to the shopping cart list giving the product id,
the function will add the product to the selectedProduct list, and add the price to the totalPrice*/

function addToShoppingCart(productId){
    const p = products.find((obj) => {
      if (obj.id === productId){
        return true;
      }else {
        return false;
      }
    })
    shoppingCart.selectedProducts.push(p);
    const sumTotal = shoppingCart.totalPrice + p.price;
    const totalString = sumTotal.toFixed(2);
    shoppingCart.totalPrice = Number.parseFloat(totalString);
   
}


  // if (shoppingCart.selectedProducts.stock > 0) {
  // shoppingCart.selectedProducts.push(products.find(p => p.id === id));
  // shoppingCart.totalPrice = shoppingCart.totalPrice + shoppingCart.selectedProducts.price;

  // }

/*4. Create the function removeFrom ShoppingCart to remove a product that a client does not like anymore*/

function removeFromShoppingCart(id){
  const oldList = [...shoppingCart.selectedProducts];
  //step1
  const filterList = oldList.filter(obj => obj.id !== id);
  shoppingCart.selectedProducts = filterList;
  //step2
  const deletedProduct = oldList.find(product => product.id === id);
  const subtractTotal = shoppingCart.totalPrice - deletedProduct.price;
  const totalString = subtractTotal.toFixed(2);
  shoppingCart.totalPrice = Number.parseFloat(totalString); 
}

  // shoppingCart.selectedProducts.push(products.find(p => p.id !== id));
  // shoppingCart.totalPrice = shoppingCart.totalPrice - shoppingCart.selectedProducts.price;


// 5. Create the function shop, the function will empty the list and set 0 in the totalPrice of the shopping cart
// In addition will substract 1 in the product stock of bought products
// 6. If there is not enough stock, the product cannot be added to the shopping cart
function shop(){
  shoppingCart.selectedProducts.forEach(sp => {
    products.forEach (p => {
      if (p.id == sp.id) {
        p.stock --
      }
    })
  })
  shoppingCart.selectedProducts = [];
  shoppingCart.totalPrice = 0;
}

//results
addToShoppingCart(1);
console.log("Step 1");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
addToShoppingCart(2);
console.log("Step 2");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
addToShoppingCart(4);
console.log("Step 3");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
removeFromShoppingCart(2);
console.log("Step 4");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
shop();
console.log("Step 5");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));



