const addEventTag_cat = () => {
    let c_tags = document.querySelectorAll(".tag");
    for (const t of c_tags) {
        t.addEventListener("click", filtArr);
    }
}


const addEventClr = () => {
    let clrTag = document.querySelectorAll(".radio_clr");
    for (color of clrTag) {
        color.addEventListener("click", clrFilter);
    }
}
 
const addEventButton = () => {
    let buttons = document.querySelectorAll(".btn_submit");
    for (const button of buttons) {
    button.addEventListener("click", addToCart);
}
}

