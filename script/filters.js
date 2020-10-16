let testArray = [];
let fillArray = [];
let uniArray = [];
const filtArr = (evt) => {
    let i = evt.target.id;
    //tagens id
    console.log(i);
    
    products.forEach(element => {
    // let cat = element.id;  
    // console.log(cat);
    
         if (i === element.cathegory_under) {
            testArray = products.filter(function(product) {
                return product.cathegory_under == element.cathegory_under;
                
            })
            console.log("Det virka!");
            console.log(testArray);
            // let c= element.cathegory_under;
            // fillArray.push(c)
            // console.log(fillArray);

             
         }
         
      })
    //  uniArray = fillArray.filter(onlysizeUnique);
    //  console.log(uniArray);
}


// testArray = products.filter(function(product) {
//     return product.cathegory_under == e.cathegory_under;
// })

// console.log(testArray);


// let filtArr = [];

// const filterUC = (arr) => {
//     let filtArr = arr.filter(function(product) {
//         return product.cathegory_under = "";
//     })
//     console.log(filtArr);
// }

// filterUC(products);