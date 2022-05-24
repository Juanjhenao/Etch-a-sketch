const container = document.querySelector('.container');

for (i = 1; i <= 256; i++){
    let div = document.createElement('div');
    // div.classList.add('block-' + i );
    div.classList.add('pixel')
    div.onmouseover = ()=> {
    div.classList.add('black')
    };

    container.appendChild(div)
 }
