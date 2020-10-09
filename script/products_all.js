const products = 
    [
	{
		name: "Robust",
		cathegory_main: "Jakker",
		cathegory_under: "Dunjakker",
		age: 1,
		color: ['green', 'red'],
		size: [86, 92, 104],
		quality1: "vannavstøtende",
		quality2: "vindtett",
		quality3: "",
		price: "255",
		url: ['../images/jackets/dalfonna1.jpg', '../images/jackets/dalfonna2.jpg', '../images/jackets/dalfonna3.jpg'],
		ingress: "Dette er en nydelig bukse som alle andre bukser",
        description: "",
        id: 1
        
	},
	{
		name: "Dirdalnes",
		cathegory_main: "Jakker",
		cathegory_under: "Skalljakker",
		age: 2,
		color: ['red'],
		size: [86, 92, 104, 110, 116, 122],
		quality1: "ull",
		quality2: "vanntett",
		quality3: "",
		price: "289",
		url: ['../images/jackets/dirdalnes_fleece1.jpg', '../images/jackets/dirdalnes_fleece2.jpg', '../images/jackets/dirdalnes_fleece3.jpg'],
		ingress: "Denne buksen er i deilig ull",
        description: "",
        id: 2
	},
	{
		name: "Moltehei",
		cathegory_main: "Jakker",
		cathegory_under: "Ullbukse",
		age: 3,
		color: ['red', 'blue'],
		size: [86, 110, 116, 122],
		quality1: "ull",
		quality2: "",
		quality3: "",
		price: "599",
		url: ['../images/jackets/Moltehei_softshell1.jpg', '../images/jackets/Moltehei_softshell2.jpg', '../images/jackets/Moltehei_softshell3.jpg'],
		ingress: "Denne jakken er i deilig ull",
        description: "",
        id: 3
	},
	{
		name: "Dalfonna vattert bukse",
		cathegory_main: "Bukser",
		cathegory_under: "Overtrekksbukse",
		age: 2,
		color: ['red', 'black'],
		size: [116, 122],
		quality1: "vindtett",
		quality2: "",
		quality3: "",
		price: "229",
		url: ['../images/pants/dalfonna_vattert1.jpg', '../images/pants/dalfonna_vattert2.jpg'],
		ingress: "Denne buksen er i deilig ull",
        description: "",
        id: 4
	},
	{
		name: "Sisotind",
		cathegory_main: "Bukser",
		cathegory_under: "Ullbukse",
		age: 2,
		color: ['red', 'gray'],
		size: [86, 116, 122],
		quality1: "vindtett",
		quality2: "vanntett",
		quality3: "strikk",
		price: "289",
		url: ['../images/jackets/dirdalnes_fleece3.jpg', '../images/jackets/dirdalnes_fleece1.jpg', '../images/jackets/dirdalnes_fleece2.jpg'],
		ingress: "Denne buksen er i deilig ull",
        description: "",
        id: 5
    },
    {
		name: "Fluppilupp",
		cathegory_main: "Jakker",
		cathegory_under: "Dunjakke",
		age: 2,
		color: ['red', 'gray'],
		size: [86, 110, 116, 122],
		quality1: "vindtett",
		quality2: "vanntett",
		quality3: "varm",
		price: "1299",
		url: ['../images/jackets/dirdalnes_fleece2.jpg', '../images/jackets/dirdalnes_fleece1.jpg', '../images/jackets/dirdalnes_fleece3.jpg'],
		ingress: "Dette er en fantastisk dunjakke",
        description: "",
        id: 6
    }
    ] 
;

//Add all the products to the main side
const addObjects = (array) => {
    let html ="";

    for (let i = 0; i < array.length; i++) {
        html += `
        <article id="${array[i].id}"class="product box">
        <img class="product_img" src="${array[i].url[0]}">
        <h4>${array[i].name}</h4>
        <h4 class="price">${array[i].price},-</h4>
        <article id="colors">
            <div id="clr1" class="clr_small"></div>
            <div id="clr2" class="clr_small"></div>
        </article>
        <button id="btn_${array[i].id}" class="btn_submit">Kjøp nå</button>
        </article>
        `;
    }
    document.getElementById("products-grid").innerHTML = html;
}

addObjects(products);


//Add items to chart
let chart = [];
let button = document.getElementsByClassName("btn_submit");




const addToChart = (evt) => {

    let html ="";

    //finn button-id og endre format slik at den kan matche produktets id
    let btn_id = evt.target.id;
    let num = btn_id[btn_id.length-1];

    //et sted å lagre produktet jeg har valgt
    let newItem = "";
    
    for (let i=0; i<products.length; i++) {
        if (products[i].id == num) {
            newItem = products[i];
            chart.push(newItem);
            html = document.getElementById("number_items").innerHTML = `
                <p>(${chart.length})</p>
            `;
            showInChart();
        }
    }
    
    findTotal();
}

button[0].addEventListener("click", addToChart);
button[1].addEventListener("click", addToChart);
button[2].addEventListener("click", addToChart);
button[3].addEventListener("click", addToChart);
button[4].addEventListener("click", addToChart);
button[5].addEventListener("click", addToChart);

const showInChart = () => {
    if (chart.length > 0) {
        chart.forEach(el => document.getElementById("new_item").innerHTML += `
        <div id="item_wrap">
            <div id="item" class="item">
                <p class="item_heading">${el.name}</p>
                <p class="item_detail">Str. ${el.size[0]}, ${el.color}</p>
            </div>
        
            <div>
                <input type="number" value="1" id="num_items">
                <label>stk</label>
            </div>

            <h3 class="price">${el.price},-</h3>
            <img id="remove" src="../images/icons/x.png" class="icon remove" alt="fjern produktet fra handlelisten">
        </div>
        `);
    }
}


const findTotal = () => {
    let total = 0;
    
    chart.forEach(el => {
    let price = el.price;
    price = Number(price);
    
    total += price;

    })
    
    document.getElementById("total").innerHTML = `
        <h3 id="totalsum" class="price">${total},-</h3>`

}





/*
//DEMNNE VIRKER IKKE ENDA
const remove_icon = document.querySelector("remove");
const removeFromChart = (evt) => {
    
    //Hent ut tallet fra ikonets id
    console.log(evt.target.id);
    let x_id = evt.target.id;
    let x_num = x_id[x_id.length-1];

    chart.forEach(element => {
        if(x-num === products[element].id) {
            chart.shift(element);
        }
    })
}

remove_icon.addEventListener("click", removeFromChart);

*/














