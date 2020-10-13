import {addObjects} from "./products_all.js";
import {products} from "./product_list.js";
import {cart, button, addTocart, showIncart, findTotal, updatePrice} from "./carts.js";


console.log(products);

addObjects(products);
// addObjects(products);
// addTocart();
// showIncart();
// findTotal();
// updatePrice();






document.querySelector(`num_items${i}`).addEventListener("change", updatePrice);

let inp_num = document.getElementById("num_items");
inp_num.addEventListener("change", updatePrice);