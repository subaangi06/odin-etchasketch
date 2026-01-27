const container = document.querySelector("#container");
const CONTAINERWIDTH = 650;
let containerSquarePerSide = 16;
let colourSquareWidth = CONTAINERWIDTH/containerSquarePerSide;


for (let i = 0; i<containerSquarePerSide*containerSquarePerSide; i++){
    const colourSquare = document.createElement("div");
    colourSquare.classList.add("colourSquare");
    //percentage width of total width (100%)
    const percentSize = 100/containerSquarePerSide;
    //flex-grow(1):allows squares to grow to fill gaps, flex-shrink(0):prevents squares from squishing of row is full, flex-basis(percentsize):sets base width as a percentage
    //using percentage is more reliable than hardcoding pixel division, because percentage will add up exactly to 100, preventing overflowing errors
    //percentage tells the browser to fit exactly 16 squares take up 100% of the width, despite rounding errors. 
    //height: set in pixels to match mathematical width to ensure perfect square 
    //height can be hardcoded as they arent trying to wrap around, like width getting wrapped to the next row. 
    colourSquare.setAttribute("style", `flex: 1 0 ${percentSize}%; height:${colourSquareWidth}px;`)

    colourSquare.addEventListener("mouseenter", () => {
        colourSquare.classList.add("changeColourOfSquare");
    })

    container.appendChild(colourSquare);

}


