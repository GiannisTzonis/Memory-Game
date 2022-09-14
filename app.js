const cardArray = [
    {
        name: 'beach',
        img: 'images/beach.jpg',
    },
    {
        name: 'collection',
        img: 'images/collection.jpg',
    },
    {
        name: 'flamigos',
        img: 'images/flamigos.jpg',
    },
    {
        name: 'kokkino',
        img: 'images/kokkino.jpg',
    },
    {
        name: 'vinyl',
        img: 'images/vinyl.jpg',
    },
    {
        name: 'window',
        img: 'images/window.jpg',
    },
    {
        name: 'beach',
        img: 'images/beach.jpg',
    },
    {
        name: 'collection',
        img: 'images/collection.jpg',
    },
    {
        name: 'flamigos',
        img: 'images/flamigos.jpg',
    },
    {
        name: 'kokkino',
        img: 'images/kokkino.jpg',
    },
    {
        name: 'vinyl',
        img: 'images/vinyl.jpg',
    },
    {
        name: 'window',
        img: 'images/window.jpg',
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen =[]
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/zmain.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionSecondId = cardsChosenIds[1]
    
    console.log(cards)
    console.log('check for match!')
    
    if (optionOneId == optionSecondId) {
        cards[optionOneId].setAttribute('src', 'images/zmain.jpg') // black needed
        cards[optionSecondId].setAttribute('src', 'images/zmain.jpg')
        alert(' You have clicked the same image!')
    }
        if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match! Well played.')
        cards[optionOneId].setAttribute('src', 'images/white.jpg') // white needed
        cards[optionSecondId].setAttribute('src', 'images/white.jpg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionSecondId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/zmain.jpg')  // black needed
        cards[optionSecondId].setAttribute('src', 'images/zmain.jpg')
        alert('Sorry, give it another try!')
    }
    
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.textContent ='Congratulations!'
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosen)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout( checkMatch, 500)
    }

}