
//global scope
let cart = [];
let total = 0;
let newItem = "";
let buttons = document.querySelectorAll(".btn_submit");
const jakker = document.querySelector("#jakker");
const bukser = document.querySelector("#bukser");


//--------------------------------------------------------------


//ADD ITEMS TO CART
const addToCart = (evt) => {
    
    let html ="";

    //finn button-id
    let b_id = evt.target.id.slice(-1);
    
    //Identifiser produkt og push det inn i cart-arrayet
    for (let i=0; i<products.length; i++) {

        if (products[i].id == b_id) {
            newItem = products[i];
            newItem.amount ++;
            cart.push(newItem);
        }
    }

    //Vis cart-arrayet i handlekurven
    showInCart();

    //Finn totalsummen for alle varer
    findTotal();       
    //Opprett eventlisteners til buttons
   
}

//Generell lytterfunksjon
// function addEventListeners(array, event, funksjon) {
//     for (const item of array) {
//         item.addEventListener(event, funksjon);   
//     }
// }

// addEventListeners(buttons, "click", addToCart);


//Legg til lytter på kjøp-knappene
addEventButton();


//------------------------------------------------------------------------------
//SHOW ITEMS IN CART
const showInCart = () => {

    //Tøm htmlen for elementer som ligger der fra før
    document.getElementById("new_item").innerHTML = "";


    let handlekurv = document.getElementById("cartH3");
    
    //Vis antall varer i handlekurven
    if (cart.length >= 0) {
        document.getElementById("number_items").innerHTML = `<p>(${cart.length})</p>`;
    
       if (cart.length === 1) {
        document.getElementById("num_items_cart").innerHTML = `
        <p>(${cart.length} vare)</p>`;
        document.getElementById("number_items").innerHTML = `<p>(${cart.length})</p>`;

    
        } else if (cart.length > 1) {
        document.getElementById("num_items_cart").innerHTML = `
        <p>(${cart.length} varer)</p>`;
        }   
    }

    //Oppretter ny html i handlekurven
    cart.forEach((el, i) => {

        //henter amounten til produktet
        let value = el.amount;

        document.getElementById("new_item").innerHTML += `
        <div class="item_wrap" id="item_wrap${el.id}">
        <div id="item" class="item">
            <p class="item_heading">${el.name}</p>
            <p class="item_detail">Str. ${el.size[0]}, ${el.color}</p>
        </div>

        <div>
            <input type="number" value=${value} class="num_items" id="num_items${i}">
            <label>stk</label>
            </div>

        <h3 id="priceH3${i}" class="price">${findPrice(el)},-</h3>
        <img id="remove${i}" src="../images/icons/x.png" class="icon remove" alt="fjern produktet fra handlelisten">
            
        </div>
        `;     
    }); 

    //Oppretter lyttere for remove-ikonet
    let fjernKnapper = document.querySelectorAll(".remove");
       
    for (const fjernKnapp of fjernKnapper) {
        fjernKnapp.addEventListener("click", removeFromCart);
    }

    //Oppretter lyttere for input-feltene
    let inp = document.querySelectorAll(".num_items");
       
    for (const i of inp) {
        i.addEventListener("input", updatePrice);
    }
}

//---------------------------------------------------
//ADD ALL PRICES AND FIND THE TOTAL 
const findTotal = () => {
    total = 0;

    cart.forEach(el => {
        //Finner prisen på elementet og legger det til totalen
        total += findPrice(el);
    })

    document.getElementById("total").innerHTML = `
         <h3 id="totalsum" class="price">${total},-</h3>`
}

//-------------------------------------------------------------


//MULTIPLY PRODUCT'S PRICE WITH PRODUCT'S AMOUNT
const findPrice = (product) => {
    return product.amount * product.price;
}

//----------------------------------------------------------------

//FIND PRODUCTS PRICE WHEN THE INPUT IS CHANGED
const updatePrice = (evt) => {

    //finner id til dette inputfeltet
    let i = evt.target.id.slice(-1);
    
    //lager en variabel med html-elementet + iden
    let string = "priceH3"+i;

    //lagrer referansen i en ny variabel
    let priceH3 = document.getElementById(string);

    //verdien i inputfeltet = antall produkter jeg vil kjøpe
    let number = evt.target.value;

    //amount = verdien av inputfeltet 
    cart[i].amount = number;
    
    //ganger amount med pris og endrer H3
    priceH3.innerHTML = findPrice(cart[i])

    //oppdaterer totalsummen
    findTotal();
}    

//------------------------------------------------------------

//REMOVE PRODUCTS FROM THE CART
const removeFromCart = (evt) => {
    let i = Number(evt.target.id.slice(-1));
    
    //Setter produktets amount til 0
    cart[i].amount = 0;

    //Sletter produktet fra cart
    cart.splice(i, 1);

    //finner totalsum og viser den i handlekurven
    findTotal();
    showInCart();

}







