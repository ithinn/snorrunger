//Global  
let jacketArray = []
let pantsArray = [];
let c_u_arr = ['Dunjakke', 'Skalljakke', 'Fleece', 'Regnjakke', "Overtrekksbukse", "Regnbukse", "Ullbukse" ];
let allSizes = [86, 92, 98, 104, 110, 116, 122];
let qualities = ['vannavstøtende', 'vindtett', 'vanntett', 'varm', 'strikk'];
let colors = ['#707312', '#c1272d', '#96acd9', '#333333', '#808080', "#73434b"];
let clr = "";
let sizeArray = [];
let catArray = [];
let attArr = [];
let clrArr = [];
let sizeUni = [];
let catUni = [];
let attUni = [];
let clrUni = [];
let qualFilterArr = [];


//---------------------------------------------------------------------------------


//FILTER ON JACKETS
const filterJackets = () => {


//Filtrer ut jakkeelementer og legg dem i et nytt array
jacketArray = products.filter(function(product) {
    return product.cathegory_main == "Jakker"
})

//Vis produktene i det nye arryet
addObjects(jacketArray)

//Vis filtervalg-knapper i filterseksjonen
addUnderCat(jacketArray);
addSizes(jacketArray);
addAttribute(jacketArray);
addColor(jacketArray);

//Opprett lyttere
addEventButton();
addEventTag_cat();
addEventProd();
addEventClr();

makeTag("jakke", 'Jakker');
addEventRemoveTag();

}

jakker.addEventListener("click", filterJackets);


//----------------------------------------------------------------------

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
        <button type="check" id=${el} class="tag">
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


const addClrDet = (el) => {
    for (let i = 0; i < el.color.length; i++) {
        if (el.color[i] === "red") {
            
        }
    }
    
}

//--------------------------------------------------------------------------------------

 //CHECK IF AN ARRAYS VALUE IS UNIQUE
 const onlysizeUnique = (value, index, self) => {
    return self.indexOf(value) === index;
    }


//-------------------------------------------------------------------------------------------
//FILTER ON PANTS
const filterPants = () => {

    //Filtrerer ut jakkeelementer
    let pantsArray = products.filter(function(product) {
        return product.cathegory_main == "Bukser"
    })
    
    

    //Legger dem til i lista
    addObjects(pantsArray)
    addUnderCat(pantsArray);
    addSizes(pantsArray);
    addAttribute(pantsArray);
    addColor(pantsArray);
    addEventButton();
    addEventTag_cat();
    addEventProd();
    addEventClr();

    makeTag("bukse", 'Bukser');
    addEventRemoveTag();
}
    
    bukser.addEventListener("click", filterPants);


 

    
    

    
    
    const hexToClr = (hex) => {
   

        for (let i = 0; i < colorCodes.length; i++) {
         
            if (hex == colorCodes[i].clrHex ) {
                
                return colorCodes[i].clrName;
            }
        }
        
    }