import {addObjects} from "./products_all.js";
import {products} from "./product_list.js";
import {chart, button, addToChart, showInChart, findTotal, updatePrice} from "./charts.js";


console.log(products);

addObjects(products);
// addObjects(products);
// addToChart();
// showInChart();
// findTotal();
// updatePrice();






document.querySelector(`num_items${i}`).addEventListener("change", updatePrice);

let inp_num = document.getElementById("num_items");
inp_num.addEventListener("change", updatePrice);