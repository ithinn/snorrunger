//global scope
let chart = [];
let button = document.getElementsByClassName("btn_submit");

//et sted å lagre produktet jeg har valgt
let newItem = "";

//Add items to chart
const addToChart = (evt) => {

    let html ="";

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
    }

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
        chart.forEach(el => {document.getElementById("new_item").innerHTML += `
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
        </div>`;

        //document.querySelector(`num_items${el.id}`).addEventListener("change", updatePrice);
        
        
    });

    let inp_num = document.getElementById("num_items");
    inp_num.addEventListener("change", updatePrice);

    /*
        let remove_icon = document.getElementsByClassName("icon");
        remove_icon[1].addEventListener("click", removeFromChart);
        remove_icon[2].addEventListener("click", removeFromChart);
        remove_icon[3].addEventListener("click", removeFromChart);
        remove_icon[4].addEventListener("click", removeFromChart);
        remove_icon[5].addEventListener("click", removeFromChart);
        remove_icon[6].addEventListener("click", removeFromChart);*/
     
    }
    




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




//update the price after changing the input value
const updatePrice = (evt) => {
    let number = document.getElementById("num_items").value;
    let priceH3 = document.getElementById("priceH3");
    
    
    //HER MÅ JEG ADDE ET NYTT ITEM FOR HVER GANG VALUE ENDRER SEG

    chart.forEach(el=> {
        let price = el.price;


        price *= number;
        priceH3.innerHTML = price;
    })
    findTotal();
    
}


//remove item from chart //DEMNNE VIRKER IKKE ENDA

/*
const removeFromChart = (evt) => {
    
    //Hent ut tallet fra ikonets id
    
    let x_id = evt.target.id;
    let x_num = x_id[x_id.length-1];

    
    
    console.log(x_id);
    console.log(x_num);
    console.log(chart);

    chart.forEach(el => {
        if(x_num === products[el].id) {
            chart.shift(el);
            console.log(chart);
        }
    })
}

*/


/*
export {chart, button, addToChart, showInChart, findTotal, updatePrice};*/





