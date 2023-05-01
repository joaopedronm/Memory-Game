// 1. Declaração de constantes

const input = document.querySelector('.login-input')
const button = document.querySelector('.login-button')
const alert = document.querySelector('.login-alert')
const form = document.querySelector('.login-form')

// 2. Funções principais

const validadeInput = ({target}) => {
    // console.log(target.value)

    if(target.value.length > 2) {
        button.removeAttribute('disabled')
        alert.style.display = 'none'
    } else {
        button.setAttribute('disabled', '');
        alert.style.display = 'block'
    }
}

const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input.value) // Consola o valor do input (nome do jogador)

    localStorage.setItem('Player', input.value)
    window.location = './pages/game.html'

}

// 3. Ações

input.addEventListener('input', validadeInput)
form.addEventListener('submit', handleSubmit)