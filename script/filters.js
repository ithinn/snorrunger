let filtArr = [];

const filterUC = (arr) => {
    let filtArr = arr.filter(function(product) {
        return product.cathegory_under = "";
    })
    console.log(filtArr);
}

filterUC(products);