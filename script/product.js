//Global
let popUp = document.querySelector("#grid-container");
let fjern = "";
let colorSelected;
let sizeSelected;


//Lytter til overskriften (kan fjernes)
const addEventProd = () => {
    let product = document.querySelectorAll(".prod_h4");
    for (const p of product) {
        p.addEventListener("click", seePopUp);
    }
}


//---------------------------------------------------------------------------- 

//OPPRETT POPUP-VINDU MED DETALJVISNING
let klikk=true;
const seePopUp = (evt) => {

    let id = evt.target.id;
    
    if (klikk === true) {
        popUp.style.opacity = "1";
        popUp.style.right = "10%";
        popUp.style.top = "30em";
        overlay.style.backgroundColor = "rgba(0, 0, 0, .5)";
        overlay.style.zIndex = "0";
    }
    klikk = !klikk;
    

    let html="";
    let fargesymbol = "";
    let størrelser = "";
    let buyThis = "";

    //Finner produktets id og henter ut kun tallet
    let prodId = Number(id.slice(-1));
    
    //Går gjennom produktlista 
    products.forEach(e => {

        let totalElements = e.color.length;

        let farger = e.color;
       
        let str = e.size;

        
        //Oppretter HTML i popupvinduet hvis produkt-iden er den samme som knappens id
        if(prodId == e.id) {
           
            html += `
            <div id="column1">
            <article id="main_container">
                <img id="main_img" src=${e.url[0]}>
                <div id="arrows">
                    <img id="arrow_l" src="../images/icons/arrow_left.png">
                    <img id="arrow_r" src="../images/icons/arrow_right.png">
                </div>    
            </article>
        
            <article id="thumb_container">
                <img class="thumb_img" id="thumb1" src=${e.url[1]}>
                <img class="thumb_img" id="thumb2" src=${e.url[2]}>
                
            </article>
        </div>

        <div id="columnX">
        <img src="../images/icons/x.png" class="remove icon" id="det_remove">
        
        <div id="column2">
            
            <article id="description">
                <h1 id="product_heading">${e.name}</h1>
                <p id="ingress">${e.ingress}</p>
                <h2 id="price">${e.price},- </h2>
            </article>
            
            <div class="box" id="details">
            <article id="clr_details"></article>
            <article id="size_details"></article>
            <article id="buy"></article>
            </div>
        </div>
            `;
            
        //legger inn rikig fargesymbol    
        fargesymbol = `<h3 class="pH3" id="color_heading">Farge</h3>
                    <div class="clr_wrap">`
        for (el in farger) {
            fargesymbol += 
            `
            <button id="colorButton${el.clrName}" class="clr_large clr_radio" type="radio" value="${farger[el]}" name="chooseClr" style="background-color: ${farger[el]}; border: none"></button>
            `;
        }

        //legger inn riktig størrelsetags
        størrelser = `<h3 class="pH3" id="color_heading">Størrelser</h3>
        <div class="clr_wrap">` 
            
        for (el in str) {
            størrelser += `
            <button type="check" id=${str[el]} class="tag size_tag">
            <p>${str[el]}</p>
            </button>
            `
            }

            buyThis = `
            <button id="btn_${id}" class="buyThis">Kjøp nå</button>
            `;
        }        
    })

    popUp.innerHTML = html;
    

    //Referanse og lytter til fargedetaljene
    clr_details.innerHTML = fargesymbol;
    size_details.innerHTML = størrelser;
    buy.innerHTML = buyThis;
    let btnId = "btn_" + id;
    let buyButton = document.getElementById(btnId);
    buyButton.addEventListener("click", addToCart);

    let clr_radio = document.querySelectorAll(".clr_radio");
    for (const c of clr_radio) {
        c.addEventListener("click", getColorFromButton);
    }

    let sizeButtons = document.querySelectorAll(".size_tag")
    for (const s of sizeButtons) {
        s.addEventListener("click", getSizeFromButton);
    }

    fjern = document.getElementById("det_remove");
    fjern.addEventListener("click", removeDetail);
    addEventButton();

    
}
addEventProd();



const removeDetail = () => {
        popUp.style.opacity = ".5";
        popUp.style.right = "200em";
        popUp.style.top = "30em";
        overlay.style.zIndex = "-1"

}


const getColorFromButton = (evt) => {
    let id = evt.target.id;
    console.log(id);
    let value = document.getElementById(id).value;
    colorSelected = value;
    console.log(colorSelected);
    return colorSelected;
}

const getSizeFromButton = (evt) => {
    let id=evt.target.innerText;

    sizeSelected = Number(id);
    document.getElementById(sizeSelected).style.border = "#333333";
    return sizeSelected;
}


// <h3 class="pH3" id="color_heading">Farge</h3>
//                 <div class="clr_wrap">
                
//                 <label class="clr_label" for="1st" id="1st">${e.color[0]}</label>
//                 <input name="color" type="radio" id="1st" style="border: 5px solid ${e.color[0]}">
                
//                 <label class="clr_label" for="2st"id="2st">${e.color[1]}</label>
//                 <input name="color" type="radio" id="2st" style="border: 5px solid ${e.color[1]}">
                
//                 <label class="clr_label" for="3st" id="3st">${e.color[2]}</label>
//                 <input name="color" type="radio" id="3st" style="border: 5px solid ${e.color[2]}">
                
//                 </div>
//                 <h3 class="pH3" id="size_heading">Størrelse</h3>
//                 <div id="sizes" class="tag">
//                     ${e.size}
//                 </div>
                
        
//                 <button id="putIncartBtn" class="btn_submit">Kjøp nå</button>




// const radioCreator = () => {
            
        //     let totalElements = e.color.length;

        //     console.log(totalElements);
        //     const group = "radioGroup";
        //     let radioButtons = [];
        
        //     for (let i = 0; i<totalElements.length; i++) {
        //         let input = document.header.createElement("input");
        //         input.name = group;
        //         input.value = (i+1);
        //         input.type = "radio";
        //         if (i === 0) {
        //             input.checked = "checked";
        //         }
        //         radioButtons.push(input);
        //     }
        //     console.log(radioButtons);
        // }

        // radioCreator();























// let klikkProdukt = true;
// const seePopUp = (evt) => {
//     if (klikkProdukt === true) {
//         popUp.style.display = "block";
//         let html = "";

//         let i = evt.target.id;
//     products.forEach(e => {
//         if (i === e.id) {

    //html += 
//         }



//     })
    
// popUp.innerHTML = html;
// }
//     }
    
// addEventProd();

// const productPop = () => {
//     let html = "";
//     let i = evt.target.id;

//     html += `
//     <div id="column1">
//     <article id="main_container">
//         <img id="main_img" src="../images/jackets/dalfonna2.jpg">
//         <img id="arrow_l" src="../images/icons/arrow_left.png">
//         <img id="arrow_r" src="../images/icons/arrow_right.png">
//     </article>

//     <article id="thumb_container">
//         <img class="thumb_img" id="thumb1" src="../images/jackets/dalfonna2.jpg">
//         <img class="thumb_img" id="thumb2" src="../images/jackets/dalfonna2.jpg">
//         <img class="thumb_img" id="thumb3" src="../images/jackets/dalfonna2.jpg">
//     </article>
// </div>

// <div id="column2">

//     <article id="description">
//         <h1 id="product_heading">Barn 1-7 år</h1>
//         <p id="ingress">Her skriver jeg inn tekst</p>
//         <h2 id="price">Pris: </h2>
//     </article>

//     <article class="box" id="details">
//         <h3 id="color_heading">Farge</h3>
//         <div id="clr_1" class="clr_large"></div>
//         <h3 id="size_heading">Størrelse</h3>
//         <div class="tag">
//             <p id="size1">86</p>
//         </div>
//         <div class="tag">
//             <p id="size2">92</p>
//         </div>
//         <div class="tag">
//             <p id="size3">104</p>
//         </div>
//         <div class="tag">
//             <p id="size4">110</p>
//         </div>

//         <button id="putIncartBtn" class="btn_submit">Kjøp nå</button>
//     </article>
// </div>
//     `;
// popUp.innerHTML = html;
// }

// let product = document.querySelectorAll(".product");
// for (const pro of product) {
//     product.addEventListener("click", productPop);
// 
