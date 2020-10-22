 //Identifiser produkt og push det inn i cart-arrayet
    
 for (let i=0; i<products.length; i++) {

       
    if (products[i].id == b_id) {
        newItem = products[i];
        newItem.amount ++;
        cart.push(newItem);
    }
}
  