const addSizes = (array) => {
    let html ="";
    
    for (let i = 0; i<array.length; i++) {
        
        for (let j = 0; j<allSizes.length; j++)
        
            for (let k = 0; k < array[i].size.length; k++)
                if (array[i].size[k] === allSizes[j]) {
                    html += `
                    <div class="tag">
                    <p>${array[i].size[k]}</p>
                    </div>
                    `
                    let test = array[i].size[k];
                    sizeArray.push(test);

                    //Sjekk om verdien er sizeUnik
            const onlysizeUnique = (value, index, self) => {
            return self.indexOf(value) === index;
            }
        
            //lag ny liste med bare sizeUnike verdier DENNE MÅ VISES
            let sizeUni = sizeArray.filter(onlysizeUnique);
            console.log(sizeArray);
            console.log(sizeUni);
                    
            }
        document.getElementById("size_content").innerHTML = html;
        
        

        