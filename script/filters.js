let testArray = [];
//Lag lytter som fjerner valgte tagger

const addEventRemoveTag = () => {
    let chosen = document.querySelectorAll(".chosen");
    for (const c of chosen) {
        c.addEventListener("click", removeTag);
    }
    }


//Filterer produkter ut katgori, størrelse og
const filtArr = (evt) => {
    
    let tag = evt.target.innerText;
    
    testArray=[];

    products.forEach(el => {
        if (tag == el.cathegory_under) {
            testArray.push(el);
            
        }
    })

    products.forEach(el => {
        for (let i = 0; i<el.size.length; i++) {
            if (tag == el.size[i]) {
                testArray.push(el);
            }
        }
    });

    products.forEach(el => {
        for (let i = 0; i<el.quality1.length; i++) {
            if (tag == el.quality1[i]) {
                testArray.push(el);
            }
        }
    });

    addObjects(testArray);
    addEventButton();
}


const clrFilter = (evt) => {
    let tag = evt.target.id;
    console.log(tag);
    testArray = []
    
    products.forEach(el => {
        
        
        for (let i = 0; i<el.color.length; i++) {
            let clrName = hexToClr(el.color[i]);
            console.log(clrName);
            if (tag == clrName) {
                testArray.push(el);
            }
        }
    });
    addObjects(testArray);
    addEventButton();
    
} 



const makeTag = (id, name) => {
    
    document.getElementById("tag-wrap").innerHTML = 
    `
    <button id=${id} class="tag chosen">
                     <p>${name}</p>
                     </button>
    `;
}



const removeTag = () => {
    console.log("jadda");
    document.getElementById("tag-wrap").innerHTML = ``;
}

