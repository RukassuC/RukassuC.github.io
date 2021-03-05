 /******
 Esse código tá horrível, 
 buscar soluções mais eficientes, prfv.
*******/
 
 const bred = document.querySelector('#b-red')
 const bblue = document.querySelector('#b-blue')
 const bgreen = document.querySelector('#b-green')


function changeBack1(){
    const body = document.querySelector('body')
    if(body.style.backgroundColor == 'red'){
        body.style.backgroundColor = 'white'
        bred.style.backgroundColor = 'red'
    } else {
        body.style.backgroundColor = 'red'
        bred.style.backgroundColor = 'white'
    }
}
function changeBack2(){
    const body = document.querySelector('body')
    if(body.style.backgroundColor == 'royalblue'){
        body.style.backgroundColor = 'white'
        bblue.style.backgroundColor = 'royalblue'
    } else {
        body.style.backgroundColor = 'royalblue'
        bblue.style.backgroundColor = 'white'
    }
}

function changeBack3(){
    const body = document.querySelector('body')
    if(body.style.backgroundColor == 'seagreen'){
        body.style.backgroundColor = 'white'
        bgreen.style.backgroundColor = 'seagreen'
    } else {
        body.style.backgroundColor = 'seagreen'
        bgreen.style.backgroundColor = 'white'
    }
}


bred.addEventListener('click',changeBack1)
bblue.addEventListener('click',changeBack2)
bgreen.addEventListener('click',changeBack3)


