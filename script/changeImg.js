const img = document.querySelectorAll(".img_wrap");


const changeImg = () => {
    

     img.innerHTML = `<img class="product_img" src="${products[i].url[1]}">`
        console.log("Hipo")
    
}

for (const i of img) {
    i.addEventListener("click", changeImg);

}
