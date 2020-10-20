const addEventImg = () => {
    const img = document.querySelectorAll(".product_img");
    for (const i of img) {
        i.addEventListener("click", changeImg)
    }
}



const changeImg = () => {
    console.log("hei");
}
