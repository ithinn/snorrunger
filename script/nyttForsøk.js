

//Add all the products to the main side
let button = document.getElementsByClassName("btn_submit");

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


/*

//finn button-id og endre format slik at den kan matche produktets id
let btn_id = evt.target.id;
let num = btn_id[btn_id.length-1];



//Identifiser produkt og push det inn i chart-arrayet
for (let i=0; i<products.length; i++) {


    if (products[i].id == num) {
        newItem = products[i];
        chart.push(newItem);
        html = document.getElementById("number_items").innerHTML = `
            <p>(${chart.length})</p>
        `;
        html = document.getElementById("num_items_chart").innerHTML = `
        <p>(${chart.length} varer)</p>
    `;
    }
}*/

//global scope
let chart = [];

//et sted å lagre produktet jeg har valgt
let newItem = "";

//Add items to chart
const addToChart = (evt) => {

    let html ="";

    // //finn button-id og endre format slik at den kan matche produktets id
    // let btn_id = evt.target.id;
    // let num = btn_id[btn_id.length-1];

    

    // //Identifiser produkt og push det inn i chart-arrayet
    // for (let i=0; i<products.length; i++) {


    //     if (products[i].id == num) {
    //         newItem = products[i];
    //         chart.push(newItem);
    //         html = document.getElementById("number_items").innerHTML = `
    //             <p>(${chart.length})</p>
    //         `;
    //         html = document.getElementById("num_items_chart").innerHTML = `
    //         <p>(${chart.length} varer)</p>
    //     `;
    //     }
    // }
    //Vis chart-arrayet i handlekurven
    showInChart();

    //Finn totalsummen for alle varer
    findTotal();    
}



button[0].addEventListener("click", addToChart);
button[1].addEventListener("click", addToChart);
button[2].addEventListener("click", addToChart);
button[3].addEventListener("click", addToChart);
button[4].addEventListener("click", addToChart);
button[5].addEventListener("click", addToChart);
button[6].addEventListener("click", addToChart);


//Show items in chart

const showInChart = () => {
    if (chart.length > 0) {

       document.getElementById("new_item").innerHTML = "";
        chart.forEach(el => document.getElementById("new_item").innerHTML += `
        <div id="item_wrap">
            <div id="item" class="item">
                <p class="item_heading">${el.name}</p>
                <p class="item_detail">Str. ${el.size[0]}, ${el.color}</p>
            </div>
        
            <div>
                <input type="number" value="1" id="num_items">
                <label>stk</label>
            </div>

            <h3 id="priceH3" class="price">${el.price},-</h3>
            <img id="remove${el.id}" src="../images/icons/x.png" class="icon remove" alt="fjern produktet fra handlelisten">
        </div>`
        );

    }
    let inp_num = document.getElementById("num_items");
    inp_num.addEventListener("change", updatePrice);

    // let remove_icon = document.getElementsByClassName("remove");
    // remove_icon.addEventListener("click", removeFromChart);


}


//add all prices and find the total 
const findTotal = () => {
    let total = 0;
    
    chart.forEach(el => {
        let prices = el.price;
        prices = Number(prices);
    
        total += prices;
    })
    
    document.getElementById("total").innerHTML = `
        <h3 id="totalsum" class="price">${total},-</h3>`
}




//add new item to the chart array when you change the value

// const addItemOnInput = () => {

// }



//update the price after changing the input value
const updatePrice = (evt) => {
    let number = document.getElementById("num_items").value;
    let priceH3 = document.getElementById("priceH3");
    

    chart.forEach(el=> {
        let price = el.price;
        price *= number;
        priceH3.innerHTML = price;
    })
    findTotal()
}


//remove item from chart //DEMNNE VIRKER IKKE ENDA

/*
const removeFromChart = (evt) => {
    
    //Hent ut tallet fra ikonets id
    
    let x_id = evt.target.id;
    let x_num = x_id[x_id.length-1];

    
    console.log(products[3].id);
    console.log(x_id);
    console.log(x_num);

    chart.forEach(el => {
        if(x_num === products[el].id) {
            chart.shift(el);
        }
    })
}

*/


/*
export {chart, button, addToChart, showInChart, findTotal, updatePrice};*/




























// const showInChart = () => {

//     let html="";

//     if (chart.length > 0) {
//         chart.forEach(el => {
//             html += `
//         <div id="item_wrap">
//             <div id="item" class="item">
//                 <p class="item_heading">${el.name}</p>
//                 <p class="item_detail">Str. ${el.size[0]}, ${el.color}</p>
//             </div>
        
//             <div>
//                 <input oninput="updatePrice()" type="number" value="1" id="num_items">
//                 <label>stk</label>
//             </div>

//             <div id="price_wrap>
//                 <h3 id="showPrice" class="price">${el.price},-</h3>
//             </div>
//             <img id="remove" src="../images/icons/x.png" class="icon remove" alt="fjern produktet fra handlelisten">
//         </div>
//         `;
//         document.getElementById("new_item").innerHTML = html; 
//         }) 
//     }
//     let test = document.getElementById("num_items");
//     test.addEventListener("oninput", updatePrice);
//     }




/*
const inp_num = document.getElementById("num_items");
    let html1="";

        const updatePrice = () => {
            chart.forEach(el=> {
                let newPrice = el.price;
                let inp_val = Number(inp_num.value);
                console.log(inp_val);
                newPrice *= inp_val;
                console.log(newPrice);
                html+=`${newPrice}`;
            })
            document.getElementById("showPrice").innerHTML = html1;
        }
    
        inp_num.addEventListener("oninput", updatePrice);
        

*/










/*
const inp_num = document.getElementById("num_items");
    
    const updatePrice = () => {
        chart.forEach(el=> {
            let elPrice = el.price;
            let inp_val = Number(inp_num.value);
            elPrice *= inp_num;
            console.log(elPrice);
            console.log(typeof(inp_val));
        })
    }
*/



//Velg antall varer og oppdater prisen



/*<input type="number" value="1" id="num_items">*/



/*




if (chart.length > 0) {

        chart.forEach(el => document.getElementById("new_item").innerHTML += `
        <div id="item_wrap">
            <div id="item" class="item">
                <p class="item_heading">${el.name}</p>
                <p class="item_detail">Str. ${el.size[0]}, ${el.color}</p>
            </div>
        
            <div>
                <input type="number" value="1" id="num_items">
                <label>stk</label>
            </div>

            <div id="price_wrap>
                <h3 id="price" class="price">${el.price},-</h3>
            </div>
            <img id="remove" src="../images/icons/x.png" class="icon remove" alt="fjern produktet fra handlelisten">
        </div>
        `);
    }
}

*/
