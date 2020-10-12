

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