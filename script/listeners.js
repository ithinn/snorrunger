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
    button.addEventListener("click", seePopUp);
}
}

const addEventChecked = () => {
    let c_tags = document.querySelectorAll(".tag");
    for (const tag of c_tags) {
        tag.addEventListener("click", checkedTag);
    }
}





// const addEventFilterRemove = () => {
//     let rem_filter = document.querySelectorAll(".rem_filter");
//     for (const x in rem_filter) {
//         x.addEventListener("click", remFilt)
//     }
// }