

//ADD ALL PRODUCTS TO THE SITE
const addObjects = (array) => {
    let html ="";

    for (let i = 0; i < array.length; i++) {
        html += `
        <article id="${array[i].id}"class="product box">
        <div id="prod_overlay"></div>
        <div class="img_wrap">
            <img id=${i} class="product_img" src="${array[i].url[0]}">
        </div>
            <h4>${array[i].name}</h4>
        <h4 class="price">${array[i].price},-</h4>
        <article id="colors">
            <div  class="clr_small"></div>
            <div  class="clr_small"></div>
        </article>
        <button id="btn_${array[i].id}" class="btn_submit">Kjøp nå</button>
        </article>
        `;
    }

    
    document.getElementById("products-grid").innerHTML = html;
   
}

addObjects(products);
