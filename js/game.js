const grid = document.querySelector('.grid')
const spanPlayer = document.querySelector('.player')
const timer = document.querySelector('.timer')

const characters = [
    'aslaug',
    'Bjorn',
    'ecbert',
    'floki',
    'halfdan',
    'harald',
    'helga',
    'hvitserk',
    'ivar',
    'lagertha',
    'ragnar',
    'rollo',
    'the-seer',
    'uba',
]

// Função 1 - Criar tag e vinular um nome de classe;

const createElement = (tag, className) => {
    const element = document.createElement(tag)
    element.className = className
    return element
}

let firstCard = ''
let secondCard = ''

// Função 2 - Verificar se o jogo acabou

const isGameOver = () => {
    const disablesCards = document.querySelectorAll('.disabled-card')

    if(disablesCards.length === 28) {
        clearInterval(this.loop)
        alert(`Parabéns, ${localStorage.getItem('Player')}! Seu tempo foi de: ${timer.innerHTML} segundos`)
        // window.location = '../index.html'
    }
}

// Função 3 - Verificar se as cartas são iguais

const checkCards = () => {

    const firstCharacter = firstCard.getAttribute('data-character')
    const secondCharater = secondCard.getAttribute('data-character')

    if(firstCharacter === secondCharater) {

        firstCard.firstChild.classList.add('disabled-card', 'cursor')
        secondCard.firstChild.classList.add('disabled-card', 'cursor')

        firstCard = ''
        secondCard = ''

        isGameOver()

    } else {

        setTimeout(() => {
            firstCard.classList.remove('reveal-card')
            secondCard.classList.remove('reveal-card')

            firstCard = ''
            secondCard = ''

        }, 500)
    }
}

// Função 4 - Vira a carta;

const  revealCard = ({target}) => {
    // console.log(target.parentNode)

    if(target.parentNode.className.includes('reveal-card')) {
        return
    }

    if (firstCard === '') {
        target.parentNode.classList.add('reveal-card')
        firstCard = target.parentNode
    } else if (secondCard === '') {
        target.parentNode.classList.add('reveal-card')
        secondCard = target.parentNode

        checkCards()

    }
}

// Função 5 - Cria o elemento Card;

const createCard = (character) => {

    const card = createElement('div', 'card')
    const front = createElement('div', 'face front')
    const back = createElement('div', 'face back')

    front.style.backgroundImage = `url('../img/personagens/${character}.jpg')`

    card.appendChild(front)
    card.appendChild(back)

    card.addEventListener('click', revealCard)
    card.setAttribute('data-character', character)

    return card

}

// Função 6 - Carregar o jogo;

const loadGame = () => {

    const duplicateCharacters = [ ...characters, ...characters ]

    const shuffledArray = duplicateCharacters.sort( () => Math.random() - 0.5 )
    // console.log(shuffledArray)

    shuffledArray.forEach((character) => {
        const card = createCard(character)
        grid.appendChild(card)
    })
}

// Função 7 - Iniciar o timer do jogo;

const startTimer = () => {

    this.loop = setInterval(() => {
        const currentTime = parseInt(timer.innerHTML)
        timer.innerHTML = currentTime + 1
    }, 1000)

}

// Função 8 - Carregar o nome do jogador da Tela de Login;

window.onload = () => {
    // Executa alguma coisa aqui quando a janela carregar

    const playerName = 'Bem-vindo(a), ' + localStorage.getItem('Player') + '!'
    spanPlayer.innerHTML = playerName

    startTimer()
    loadGame()
}
