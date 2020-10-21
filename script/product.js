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
        <img src="../images/icons/x.png" class="remove_popup icon" id="det_remove">
        
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
        farger.forEach ((el, i) => {
            fargesymbol += 
            `
           
            <input id="colorButton${i}" type="radio" name="chooseClr">
            <label class="clr_radio clr_large" data-colorcode="${el}" for="colorButton${i}" style="background-color: ${el}"></label>
            `;
        })
            
        

        //legger inn riktig størrelsetags
        størrelser = `<h3 class="pH3" id="sizeTags">Størrelser</h3>
        <div class="size_wrap">` 
         
        
        //GJØR OM TIL FOR EACH
        str.forEach((el, i) => {
            størrelser += `
            <input type="radio" id=${i} name="chooseSize">
            <label class="size_tag" data-size="${el}" for ${i}>${el}</label>
            `;
            
        }) 
            
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
    
    // let value = evt.target.value;
    
    colorSelected = evt.target.dataset.colorcode;
    //evt.target.style.border = "4px solid blue";
    //document.getElementById(colorSelected).style.border = "5px solid black";
    return hexToClr(evt.target.value)
    //colorSelected;
}

const getSizeFromButton = (evt) => {
    //let id=evt.target.innerText;

    sizeSelected = evt.target.dataset.size;
    console.log(sizeSelected);
    //document.getElementById(sizeSelected).style.backgroundColor = "#A6831B";
    return sizeSelected;
}
