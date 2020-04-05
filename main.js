function onSubmit() {
    // get html elements
    const text = document.getElementById("story").value.split("");
    let colors = document.getElementById("colors")

    // Remove colors first
    while (colors.lastElementChild) {
        colors.removeChild(colors.lastElementChild);
    }

    // Iterate through each char and add a color
    let charcodes = text.map(c => c.charCodeAt(0) % 256);
    let pixelcodes = [];
    while (charcodes.length) pixelcodes.push(charcodes.splice(0, 3));

    pixelcodes.forEach(codes => {
        let r = 0;
        let g = 0;
        let b = 0;
        
        switch (codes.length) {
            case 3:
                b = codes[2];
            case 2:
                g = codes[1];
            case 1:
                r = codes[0];
            default:
                break;
        }

        let div = document.createElement("div");
        div.setAttribute("class", "color");
        div.style.backgroundColor = `rgb(${r},${g},${b})`;
        colors.appendChild(div);
    })
}