const input = document.getElementById("inp_search");
const val = input.value;
console.log(typeof(val));

const findProducts = (product, name) => {
    
    const productReturned = product.filter(el => {
        return el.cathegory_main.toLowerCase() === name.toLowerCase() || el.name.toLowerCase() === name.toLowerCase() || el.cathegory_under.toLowerCase() === name.toLowerCase();
    })
    addObjects(productReturned);
    addEventButton();
    
    return productReturned
}

const funksjon = () => {
    
    console.log(findProducts(products, input.value));
}
input.addEventListener("input", funksjon) 




//Bla gjennom ulike søkeord i inputfeltet
const søkeord = ["jakker", "bukser", "regnbukse", "skalljakke", "overtrekksbukse", "fleece"];
let i = 0;

const settPlaceholder = () => {
    const ord = søkeord[i];
    if(i >=søkeord.length) {
        i = 0;
    }
    
    input.placeholder = 'Søk etter ' + ord;
    i++;
}

settPlaceholder();
setInterval(settPlaceholder, 3000);