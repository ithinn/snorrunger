let testArray = [];
let fillArray = [];
let uniArray = [];
let prSize = [];

const filtArr = (evt) => {
    
    let tag = evt.target.id;
    //tagens id
    console.log(tag);
    
    for (let i = 0; i<products.length; i++) {

        let produkt = products[i];
        let prSize = Number(produkt.size);
        let prCat = produkt.cathegory_under;

        for (let j = 0; j < prSize.length; j++) {
           
            if (tag === prCat) {
                testArray = products.filter(function(product) {
                    return product.cathegory_under == produkt.cathegory_under;  
                })
                console.log("Det virka!");
                console.log(testArray);
               

            } else if (tag==prSize[j]) {
                testArray = products.filter(function(product) {
                    return product.size == produkt.size;
                })
                console.log("størrelsessortering")
                console.log(testArray);
            }
    } 
    }  
    addObjects(testArray);
    
}


// const clearFilter = (id) => {
//     let filter = document.getElementBy(id);
//     filter.innerHTML = "";
// }

