
//Global
const jakker = document.querySelector("#jakker");
let c_u_arr = ['Dunjakker', 'Skalljakker', 'Ulljakker'];
let allSizes = [86, 92, 98, 104, 110, 116, 122];
let qualities = ['vannavstøtende', 'vindtett', 'vanntett', 'varm', 'strikk'];
let colors = ['green', 'red', 'blue', 'black', 'gray'];
let emptArray = [];
let qualFilterArr = [];


//Functions
const filterJackets = () => {

//Filtrerer ut jakkeelementer
let jacketArray = products.filter(function(product) {
    return product.cathegory_main == "Jakker"
})

//Legger dem til i lista
addObjects(jacketArray)
addUnderCat(jacketArray);
addSizes(jacketArray);
addAttribute(jacketArray);
addColor(jacketArray);
}

jakker.addEventListener("click", filterJackets);

//----------------------------------------------------------------------
const addUnderCat = (array) => {
    let html ="";

    for (let i = 0; i<array.length; i++) {
        for (let j = 0; j<c_u_arr.length; j++){
            if (array[i].cathegory_under === c_u_arr[j]) {
                html += `
                <div class="tag">
                 <p>${c_u_arr[j]}</p>
                 </div>
                `
            }
        }
        document.getElementById("cat_content").innerHTML = html;
    }
}


const addSizes = (array) => {
    let html ="";
    
    for (let i = 0; i<array.length; i++) {
        
        for (let j = 0; j<allSizes.length; j++)
        
            for (let k = 0; k < array[i].size.length; k++)
                if (array[i].size[k] === allSizes[j]) {
                    html += `
                    <div class="tag">
                    <p>${array[i].size[k]}</p>
                    </div>
                    `
                    let test = array[i].size[k];
                    emptArray.push(test);
            }
        document.getElementById("size_content").innerHTML = html;
    }
}


//Adds "Funksjon" filters
const addAttribute = (a) => {
    let html = "";

    for (let i=0; i<a.length; i++) {
        
        for (let j = 0; j < qualities.length; j++) {

            for (let k = 0; k < a[i].quality1.length; k++) {
                if(a[i].quality1[k] === qualities[j] )          {
                    html += `
                    <div class="tag">
                    <p>${a[i].quality1[k]}</p>
                    </div>
                    `
                    qualFilterArr.push(a[i].quality1[k]);
                }
            }
        }
        document.getElementById("att_content").innerHTML = html;
    } 
}


//Adds color filters

const addColor = (a) => {
    let html = "";

    for (let i = 0; i < a.length; i++) {

        for (let j = 0; j < colors.length; j++) {

            for (let k = 0; k < a[i].color.length; k++) {

                if(a[i].color[k] === colors[j]) {

                    html += `
                    <div id="clr" class="clr_large"></div>
                    `
            
                }

                if(a[i].color[k] ==="red") {
                    document.getElementById("clr").style.backgroundColor = "#c1272d";
                }
                
            }
        }

    document.getElementById("color_content").innerHTML = html;
    }; 
}


// switch(colors) {
//     case "red":

        
// }