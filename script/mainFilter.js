let categoryArray = ["Jakker", "Bukser"];
let c_u_arr = ['Dunjakke', 'Skalljakke', 'Fleece', 'Regnjakke', "Overtrekksbukse", "Regnbukse", "Ullbukse" ];
let allSizes = [86, 92, 98, 104, 110, 116, 122];
let qualities = ['vannavstøtende', 'vindtett', 'vanntett', 'varm', 'strikk'];
let colors = ['#707312', '#c1272d', '#96acd9', '#333333', '#808080', "#73434b"];
const filterWrap = document.getElementById("filter_wrap");
let uniCat = [];
let mainCatArray = [];


//Oppretter filterseksjonen
const viewFilters = () => {
    html = "";

    html += `
    <article>
        <div class="box filter_container" id="cathegory_main">
            <h3>Kategori</h3>
            <div class="filter_content" id="cat_main"></div>
        </div>
    </article>
    <article>
        <div class="box filter_container" id="cathegory">
            <h3>Underkategori</h3>
            <div class="filter_content" id="cat_content"></div>
        </div>
    </article>
    <article>
        <div class="box filter_container" id="size">
            <h3>Størrelse</h3>
            <div class="filter_content" id="size_content"></div>
            
        </div>
    </article>
    <article>
        <div class="box filter_container" id="attribute">
            <h3>Funksjon</h3>
            
            <div id="att_content"></div>
        </div>
    </article>
    <article>
        <div class="box filter_container" id="color">
            <h3>Farge</h3>
            
            <div id="color_content"></div>
        </div>
    </article>
    `;

    filterWrap.innerHTML = html;
}

viewFilters();


//ADD CATHEGORIES TO THE FILTER SECTION
const addCat = (array) => {
    let html ="";

    //Nullstill arrayet
    mainCatArray = [];
    
    //Loop gjennom argument- arrayet og finn elementer det har til felles med arrayet som inneholder alle underkategorier
    //Push disse elementene inn i catArray
    for (let i = 0; i<array.length; i++) {

        for (let j = 0; j<categoryArray.length; j++){

            if (array[i].cathegory_main === categoryArray[j]) {

                let c = array[i].cathegory_main;
                mainCatArray.push(c);
                
            }
        }
    }

    //lag nytt array med bare unike verdier
    uniCat = mainCatArray.filter(onlysizeUnique);
    
    //Vis den nye listen på siden som separate tagger
    uniCat.forEach((el, i) => {                
        html += `
                <button id=${el} class="tag cat_main" type="checkbox">
                 <p>${el}</p>
                 </button>
                `;
    });

    document.getElementById("cat_main").innerHTML = html;
}





//----------------------------------------------
//ADD UNDER CATHEGORIES TO THE FILTER SECTION
const addUnderCat = (array) => {
    let html ="";

    //Nullstill arrayet
    catArray = [];
    
    //Loop gjennom argument- arrayet og finn elementer det har til felles med arrayet som inneholder alle underkategorier
    //Push disse elementene inn i catArray
    for (let i = 0; i<array.length; i++) {

        for (let j = 0; j<c_u_arr.length; j++){

            if (array[i].cathegory_under === c_u_arr[j]) {

                let c = array[i].cathegory_under;
                catArray.push(c);
            }
        }
    }

    //lag nytt array med bare unike verdier
    catUni = catArray.filter(onlysizeUnique);
    
    //Vis den nye listen på siden som separate tagger
    catUni.forEach((el, i) => {                
        html += `
                <button id=${el} class="tag cat_tag" type="checkbox">
                 <p>${el}</p>
                 </button>
                `;
    });

    document.getElementById("cat_content").innerHTML = html;
}



//----------------------------------------------------------------------------------------

//ADD SIZES TO THE FILTER SECTION
const addSizes = (array) => {
    let html ="";
    sizeArray = [];
    
    for (let i = 0; i<array.length; i++) {
        
        for (let j = 0; j<allSizes.length; j++) {
        
            for (let k = 0; k < array[i].size.length; k++) {
                if (array[i].size[k] === allSizes[j]) {
                    
                    let s = array[i].size[k];
                    sizeArray.push(s); 
                }     
            }   
        }
    }
    //lag ny liste med bare sizeUnike verdier
    sizeUni = sizeArray.filter(onlysizeUnique);
    
    //Sørg for at den nye listen vises på siden
    sizeUni.forEach((el, i) => {                
        html += `
        <button type="check" id="size_${el}" class="tag">
        <p>${el}</p>
        </button>
        `
    })
       
    document.getElementById("size_content").innerHTML = html;
}

//---------------------------------------------------------------------------


//ADD ATTRIBUTES TO THE FILTER SECTION
const addAttribute = (a) => {
    let html = "";
    attArr = [];

    for (let i=0; i<a.length; i++) {
        
        for (let j = 0; j < qualities.length; j++) {

            for (let k = 0; k < a[i].quality1.length; k++) {
                if(a[i].quality1[k] === qualities[j] ) {
                  
                    attArr.push(a[i].quality1[k]);
                }
            }
        }
    }

    //lag ny liste med bare sizeUnike verdier
    attUni = attArr.filter(onlysizeUnique);
    
    //Sørg for at den nye listen vises på siden
    attUni.forEach(el => {                
        html += `
        <button type="check" id=${el} class="tag att_tag">
        <p>${el}</p>
        </button>
        `
   })
       
   document.getElementById("att_content").innerHTML = html;   
}


//ADD COLORS TO THE FILTER SECTION

const addColor = (a) => {
    let html = "";

    clrArr = [];

    for (let i = 0; i < a.length; i++) {

        for (let j = 0; j < colors.length; j++) {

            for (let k = 0; k < a[i].color.length; k++) {
                clr = a[i].color[k];

                if(clr === colors[j]) {

                    clrArr.push(clr);
                    

                }
            }
        }
    }; 

    //lag ny liste med bare sizeUnike verdier
    
    clrUni = clrArr.filter(onlysizeUnique);
    
    //Sørg for at den nye listen vises på siden
    clrUni.forEach((el, i) => {                
        if (el === '#c1272d') {
            html += `
            <button type="radio" name="c" id="${hexToClr(el)}" class="clr_large radio_clr" style="background-color: #c1272d; border: none"></button>
            `; 
        } else if (el === '#707312') {
            html += `
            <button type="radio" name="c" id="${hexToClr(el)}"  class="clr_large radio_clr" style="background-color: #707312;"></button>
            `; 
    
        } else if (el === '#96acd9') {
            html += `
            <button type="radio" name="c" id="${hexToClr(el)}" class="clr_large radio_clr" style="background-color: #96acd9;"></button>
            `; 
    
        } else if (el === '#333333') {
            html += `
            <button type="radio" name="c" id="${hexToClr(el)}" class="clr_large radio_clr" style="background-color: #333333;"></button>
            `; 
        } else if (el === '#73434b') {
            html += `
            <button type="radio" name="c" id="${hexToClr(el)}" class="clr_large radio_clr" style="background-color: #73434b;"></button>
            `; 
    
        } else if (el === '#808080') {
            html += `
            <button type="radio" name="c" id="${hexToClr(el)}" class="clr_large radio_clr" style="background-color: #808080;"></button>
            `; 
        }
   })
    document.getElementById("color_content").innerHTML = html;
}


    
const hexToClr = (hex) => {
   

    for (let i = 0; i < colorCodes.length; i++) {
     
        if (hex == colorCodes[i].clrHex ) {
            
            return colorCodes[i].clrName;
        }
    }
    
}


//Legg til lytter på boksen

// const addClrDet = (el) => {
//     for (let i = 0; i < el.color.length; i++) {
//         if (el.color[i] === "red") {
            
//         }
//     }
    
// }

//--------------------------------------------------------------------------------------

 //CHECK IF AN ARRAYS VALUE IS UNIQUE
 const onlysizeUnique = (value, index, self) => {
    return self.indexOf(value) === index;
    }






    addCat(products)
    addUnderCat(products);
    addSizes(products)
    addColor(products)
    addAttribute(products)


    filterWrap.addEventListener("click", (e) => {
        if(e.target.nodeName === "BUTTON") {
            console.log("Det virker!");
            applyFilter(e);
        }
    })

//---------------------------------------------------------------------------------


const applyFilter = (evt) => {
    let buttonId = evt.target.id;
    console.log(buttonId);

    const subCat = item => item.cathegory_under === buttonId;
    const mainCat = item => item.cathegory_main === buttonId;

    console.log(evt.target.className);


    //filter(subCat, products);
    //filter(mainCat, products);

const subCatArray = filter(subCat, products);
const mainCatArray = filter(mainCat, products);



console.log(mainCatArray);
console.log(subCatArray);
// products.filter(mainCat);
// products.filter(subCat);

    // if (evt.target.className === "tag cat_tag") {
    //     console.log(r);
    //     console.log("huur" );
    // } else if (evt.target.className === "tag cat_main") {
    //     filter(subCat, products);
    //     console.log(r2);
    //     console.log("jippi"); 
    // }
}


//Generell filterfunksjon
const filter = (predicate, collection) => {
    const result = [];

    for (let item of collection) {
        if (predicate(item)) {
            result.push(item);
        }
    }
    addObjects(result);
    return result;
    
}
