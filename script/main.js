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
		url: ['../images/dalfonna1', '../images/dalfonna2', '../images/dalfonna3'],
		ingress: "Dette er en nydelig bukse som alle andre bukser",
		description: ""
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
		url: ['../images/dirdalnes_fleece1', '../images/dirdalnes_fleece12', '../images/dirdalnes_fleece3'],
		ingress: "Denne buksen er i deilig ull",
		description: ""
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
		url: ['../images/Moltehei_softshell1', '../images/Moltehei_softshell2', '../images/Moltehei_softshell3'],
		ingress: "Denne jakken er i deilig ull",
		description: ""
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
		url: ['../images/dalfonna_vattert1', '../images/dalfonna_vattert2'],
		ingress: "Denne buksen er i deilig ull",
		description: ""
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
		url: ['../images/dirdalnes_fleece1', '../images/dirdalnes_fleece12', '../images/dirdalnes_fleece3'],
		ingress: "Denne buksen er i deilig ull",
		description: ""
    }
    ] 
;

console.log(products);

let heading = document.querySelector("#item1_h");
let details = document.querySelector("#item1_d");
let button = document.getElementById("btn_submit");
let remove = document.querySelector("#remove");

let newObject = products.name;



//Lag et nytt objekt
const createChartObj = (name, color, size, price) => {
	return {
		name: name,
		description: color + "," + size,
		price: price 
	}
}

console.log(createChartObj(products[2].name, products[2].color[0], products[2].size[3], products[2].price));


//Legg til ny vare i handlekurven
const addItem = () => {

	createChartObj()
    document.getElementById("item1_h").innerHTML += `${products[3].name}`;
	document.getElementById("item1_d").innerHTML += `${products[3].color[1]}`;
	document.getElementById("price").innerHTML += `${products[3].price},-`
}

button.addEventListener("click", addItem);

const removeItem = () => {
	document.getElementById("item1_h").innerHTML = ``;
	document.getElementById("item1_d").innerHTML = ``;
	document.getElementById("price").innerHTML = ``;
}

remove.addEventListener("click", removeItem);

//THIS?

const addColor = () => {
	d
}