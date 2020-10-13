//global scope
let cart = [];
let total = 0;


//et sted å lagre produktet jeg har valgt
let newItem = "";

//Add items to cart
const addToCart = (evt) => {
    let html ="";

    //finn button-id og endre format slik at den kan matche produktets id
    let btn_id = evt.target.id;
    let num = btn_id[btn_id.length-1];

    //Identifiser produkt og push det inn i cart-arrayet
    for (let i=0; i<products.length; i++) {

        if (products[i].id == num) {
            newItem = products[i];
            cart.push(newItem);

            //Vis at det har kommet en ny vare i handlekurven ved symbolet
            html = document.getElementById("number_items").innerHTML = `
                <p>(${cart.length})</p>
            `;
            html = document.getElementById("num_items_cart").innerHTML = `
            <p>(${cart.length} varer)</p>
        `;
        }
    }

    //Vis cart-arrayet i handlekurven
    showIncart();

    //Finn totalsummen for alle varer
    findTotal();       
}

let buttons = document.querySelectorAll(".btn_submit");
for (const button of buttons) {
    button.addEventListener("click", addToCart)
}


//Show items in cart
const showIncart = () => {
    if (cart.length > 0) {
       
       //Resett totalbeløpet (funker denne?)
       total=0;

       //Tøm htmlen for elementer som ligger der fra før
       document.getElementById("new_item").innerHTML = "";

       //Oppretter ny html i handlekurven
       cart.forEach((el, i) => {
           document.getElementById("new_item").innerHTML += `
           <div class="item_wrap" id="item_wrap${el.id}">
            <div id="item" class="item">
                <p class="item_heading">${el.name}</p>
                <p class="item_detail">Str. ${el.size[0]}, ${el.color}</p>
            </div>

            <div>
                <input type="number" value="1" class="num_items" id="num_items${i}">
                <label>stk</label>
            </div>

            <h3 id="priceH3" class="price">${el.price},-</h3>
            <img id="remove${el.id}" src="../images/icons/x.png" class="icon remove" alt="fjern produktet fra handlelisten">
            
            </div>
           `;

           console.log(cart);


            //Legg til lyttere inni løkka. (Her er det noe kluss)
            let get = document.querySelector(`#num_items${i}`);
            get.addEventListener("input", () => updatePrice(`num_items${i}`));

            let get2 = document.querySelector(`#remove${el.id}`);
            get2.addEventListener("click", () => removeFromCart(`remove${el.id}`));
       }); 
    }
}


//add all prices and find the total 
const findTotal = () => {
    
    cart.forEach(el => {
        let prices = el.price;
        prices = Number(prices);
    
        total += prices;
        console.log(total);
    })
    
    document.getElementById("total").innerHTML = `
        <h3 id="totalsum" class="price">${total},-</h3>`
}



//update the price after changing the input value
const updatePrice = (id) => {
    let priceH3 = document.getElementById("priceH3");
    let number = document.getElementById(id).value;
    number = Number(number);

    
    //HER MÅ JEG ADDE ET NYTT ITEM FOR HVER GANG VALUE ENDRER SEG

    cart.forEach(el=> {
        let price = el.price;
        //ASSÅ VIRKER IKKE, men jeg må finne en måte å si at hvis input value er større enn den gamle skal prisen ganges med valuen, og hvis den er mindre skal den---trekkes fra
        // if(number++) {
        //     price *= number;
        // } else (
        //     price -= price;
        // )
        // ]
        
        
        priceH3.innerHTML = price;
    })
    findTotal();
}


//remove item from cart HER ER DET EN DEL KLUSS
const removeFromCart = (id) => {
    let x_id = document.getElementById(id).id;
    x_id = Number(x_id[x_id.length-1]);
    
    console.log(x_id);
    
   cart.forEach(el => {
       let product_id = el.id;
       let product_price = el.price;
       console.log(product_price);
       
       if(x_id === product_id) {
           
            //Tømmer htmlen
           document.getElementById(`item_wrap${el.id}`).innerHTML = ``;
           
           //Fjerner elementet fra cart-arrayet
           cart.splice([product_id], 1);
           console.log(cart);

            //Endre totalsumVIRKER IKKE
            total -= product_price;
            console.log(total);
           
            //Vis at totalsummen er endret VIRKERIKKE
            document.getElementById("total").innerHTML = `
            <h3 id="totalsum" class="price">${total},-</h3>`

            //Vis at elementene er fjerna fra handlekurven ved symbolene
            html = document.getElementById("number_items").innerHTML = `
            <p>(${cart.length})</p>
            `;

            html = document.getElementById("num_items_cart").innerHTML = `
            <p>(${cart.length} varer)</p>
            `;
       }
       
   }) 
   
}




/*
export {cart, button, addTocart, showIncart, findTotal, updatePrice};*/





