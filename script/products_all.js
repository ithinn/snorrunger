
let farger = [];
let clr_icon = "";
let prod = "";

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
            <h4 id="${array[i].id}" class="prod_h4">${array[i].name}</h4>
        <h4 class="price">${array[i].price},-</h4>
        <article class="clr_icon colorWrap" id=${array[i].id}>
            
        </article>
        <button id="btn_${array[i].id}" class="btn_submit">Kjøp nå</button>
        </article>
        `;
    }

    document.getElementById("products-grid").innerHTML = html;
    
    

}



addObjects(products);
addUnderCat(products);
addSizes(products);
addAttribute(products);
addColor(products);
    


addEventTag_cat();
addEventProd();
addEventClr();


const funksjon = (array) => {
    let clr_a = document.querySelector(".colorWrap");
    let num = [0];
    //Først går jeg gjennom hvert produkt i arrayet
    for (let k = 0; k < array.length; k++) {

        
        //console.log(clr_a);
        prod = array[k];
        //console.log(prod);
        const elementId = document.getElementById(prod.id);
        //console.log(elementId);
        //console.log(prod);
        farger = array[k].color;
        //console.log(farger);
        num = farger;
        //console.log(num);

        for (let s in farger) {
            clr_a.innerHTML += `${prod.color[s]}`
            //console.log(s);
        }
        
        
       
    }
//     farger.forEach ((el, i) => {
//         if (el) {
//             clr_a.innerHTML += `
//                 <div id=clr${i} class="clr_small"></div>
//                 `;
//                 console.log("Jadda");
                
//                 clr_icon = document.getElementById(`clr${i}`);
                
//         }

//         if (farger[i] == "red") {
//             document.getElementById(`clr${i}`).style.backgroundColor = "red";
//         } else if (farger[i] == "gray") {
//             document.getElementById(`clr${i}`).style.backgroundColor = "gray";
//         }
// })
}



 //let clr_icon = document.getElementById("t");
    
    // for (let j = 0; j<farger.length; j++) {
            
    //     clr_a.innerHTML += `
    //     <div id="t" class="clr_small"></div>
    //     `

    //     if (farger[j] == "red") {
    //         document.getElementById("t").style.backgroundColor = "red";  
    //     } else if (farger[j] == "blue") {
    //         document.getElementById("t").style.backgroundColor = "blue";
    //     }
    // }

    
//export {farger, clr_icon, prod, addObjects, funksjon}
funksjon(products);