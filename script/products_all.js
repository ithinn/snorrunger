
let farger = [];
let clr_icon = "";
let prod = "";

//ADD ALL PRODUCTS TO THE SITE
const addObjects = (array) => {
    let html ="";

    for (let i = 0; i < array.length; i++) {
        
    
    
    
    console.log(farger);
        
        html += `
        <article id="${array[i].id}"class="product box">
        <div id="prod_overlay"></div>
        <div class="img_wrap">
            <img id=${i} class="product_img" src="${array[i].url[0]}">
        </div>
            <h4>${array[i].name}</h4>
        <h4 class="price">${array[i].price},-</h4>
        <article class="clr_icon" id="colors">
            
        </article>
        <button id="btn_${array[i].id}" class="btn_submit">Kjøp nå</button>
        </article>
        `;
        

    }

    document.getElementById("products-grid").innerHTML = html;
    
    

    
    

}

addObjects(products);




const funksjon = (array) => {
    let clr_a = document.getElementById("colors");
    
    //Først går jeg gjennom hvert produkt i arrayet
    for (let k = 0; k < array.length; k++) {

       
        prod = array[k];
        farger = array[k].color;


        
        //Så vil jeg at den skal gå gjennom hver farge i colorArray
        // for (let l = 0; l<farger.length; l++) {
        //     if (l) {
        //         clr_a.innerHTML += `
        //             <div id=clr${k.id} class="clr_small"></div>
        //             `;
        //             console.log("Jadda");
                    
        //             clr_icon = document.getElementById(`clr${k.id}`);
                    
        //     }

        //     if (farger[l] == "red") {
        //         document.getElementById(`clr${k.id}`).style.backgroundColor = "red";
        //     } else if (farger[l] == "gray") {
        //         document.getElementById(`clr${k.id}`).style.backgroundColor = "gray";
        //     }
        // }
//Jeg er på sporet, men det funker ikke helt.
        farger.forEach ((el, i) => {
            if (el) {
                clr_a.innerHTML += `
                    <div id=clr${i} class="clr_small"></div>
                    `;
                    console.log("Jadda");
                    
                    clr_icon = document.getElementById(`clr${i}`);
                    
            }

            if (farger[i] == "red") {
                document.getElementById(`clr${i}`).style.backgroundColor = "red";
            } else if (farger[i] == "gray") {
                document.getElementById(`clr${i}`).style.backgroundColor = "gray";
            }
    })

    }
}

funksjon(products);

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