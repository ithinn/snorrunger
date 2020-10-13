const addObjects = (array) => {
    let html ="";

    for (let i = 0; i < array.length; i++) {
        html += `
        <article id="${array[i].id}"class="product box">
        <img class="product_img" src="${array[i].url[0]}">
        <h4>${array[i].name}</h4>
        <h4 class="price">${array[i].price},-</h4>
        <article id="colors">
            <div id="clr1" class="clr_small"></div>
            <div id="clr2" class="clr_small"></div>
        </article>
        <button id="btn_${array[i].id}" class="btn_submit">Kjøp nå</button>
        </article>
        `;

    }
    document.getElementById("products-grid").innerHTML = html;
}

addObjects(products);

let cart = [];
let knapper = document.querySelectorAll(".btn_submit");
for (const knapp of knapper) {
    knapp.addEventListener("click", addToCart)
}



let newItem = "";

//Add items to cart
const addToCart = (evt) => {

    let html ="";
    let knapp = evt.target;
    let trykketInnhold = knapp.pa

    //finn button-id og endre format slik at den kan matche produktets id
    let btn_id = evt.target.id;
    let num = btn_id[btn_id.length-1];


    //Identifiser produkt og push det inn i cart-arrayet
    for (let i=0; i<products.length; i++) {


        if (products[i].id == num) {
            newItem = products[i];
            cart.push(newItem);
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



button[0].addEventListener("click", addTocart);
button[1].addEventListener("click", addTocart);
button[2].addEventListener("click", addTocart);
button[3].addEventListener("click", addTocart);
button[4].addEventListener("click", addTocart);
button[5].addEventListener("click", addTocart);
button[6].addEventListener("click", addTocart);

