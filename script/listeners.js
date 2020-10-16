const addEventTag_cat = () => {
    let c_tags = document.querySelectorAll(".tag");
    for (const t of c_tags) {
        t.addEventListener("click", filtArr);
    }
}

const addEventButton = () => {
    let buttons = document.querySelectorAll(".btn_submit");
    for (const button of buttons) {
    button.addEventListener("click", addToCart);
}
}

const addEventProd = () => {
    let product = document.querySelectorAll(".product");
    for (const p of product) {
        p.addEventListener("click", seePopUp);
    }
}