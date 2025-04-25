const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const itens = document.querySelectorAll('.item')
const dots = document.querySelectorAll('.dot')
const numberIndicator = document.querySelector('.numeros')
const list = document.querySelector('.lista')


let ativo = 0;
const total = itens.length
let timer;


function update(direction) {


    document.querySelector('.item.ativo').classList.remove('ativo')
    document.querySelector('.dot.ativo').classList.remove('ativo')

    if (direction >0) {
        ativo = ativo + 1

        if (ativo === total) {
            ativo = 0
        }
    }

    else if(direction <0) {
        ativo = ativo - 1

        if (ativo < 0) {
            ativo = total - 1
        }
    }

    itens[ativo].classList.add('ativo')
    dots[ativo].classList.add('ativo')

    numberIndicator.innerHTML = `0${ativo + 1}`
}

clearInterval(timer)
timer = setInterval(() => {
    update(1)
}, 5000)


prevButton.addEventListener('click', () => {
    update(-1)
})

nextButton.addEventListener('click', () => {
    update(1)
})