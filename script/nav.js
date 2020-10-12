
const jakker = document.querySelector("#jakker");
let c_u_arr = ['Dunjakker', 'Skalljakker', 'Ulljakker'];
let allSizes = [86, 92, 98, 104, 110, 116, 122];

const filterJackets = () => {

//Filtrerer ut jakkeelementer
let jacketArray = products.filter(function(product) {
    return product.cathegory_main == "Jakker"
})

//Legger dem til i lista
addObjects(jacketArray)
addUnderCat(jacketArray);
addSizes(jacketArray);
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

let emptArray = [];
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
console.log(emptArray);
}