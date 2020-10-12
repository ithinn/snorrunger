

const addAllSizes = (array) => {

    let html = "";

    for (let i = 0; i < array.length; i++) {

        html += `
        <div class="tag">
        <p>${array[i]}</p>
        </div>
    `
    document.getElementById("size_content").innerHTML = html;
}
}

