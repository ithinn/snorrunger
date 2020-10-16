let testArray = [];
let fillArray = [];
let uniArray = [];
const filtArr = (evt) => {
    let i = Number(evt.target.id);
    console.log(i);
    
    products.forEach((element, index) => {
    let cat = index;  
    console.log(index);
    
         if (i === cat) {
            let c= e.cathegory_under;
            fillArray.push(c)
            console.log(fillArray);

             
         }
         
     })
     uniArray = fillArray.filter(onlysizeUnique);
     console.log(uniArray);
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