const container = document.querySelector('.container');
let cuadrados = 16*16;

const slider = document.getElementById('slider');
const textSize = document.getElementById('pixelSize')


slider.oninput = ()=> {
    textSize.textContent = `${slider.value} x ${slider.value}`
};

function gridSetup (){
    container.style.gridTemplateColumns = `repeat(${slider.value}, 1fr)`
    container.style.gridTemplateRows = `repeat(${slider.value}, 1fr)`
}

function generatedivs (){
    
    gridSetup();

    for (i = 1; i <= cuadrados; i++){
        let div = document.createElement('div');
        div.classList.add('pixel')
        div.onmouseover = ()=> {
        div.classList.add('black')
        };
        container.appendChild(div)
     }
    };


generatedivs();

slider.onchange = ()=> {
    container.innerHTML = ''
    cuadrados = slider.value*slider.value
    generatedivs();
};
