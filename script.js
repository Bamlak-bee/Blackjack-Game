let cards = []
let firstCard = ""
let secondCard = ""
let isAlive = false
let hasBlackjack = false
let sum = 0;
let msg = " "
let msgEl = document.getElementById("msg-el")
let sumEl = document.getElementById("sum-el")


function getRandomCard() {
    let randomcard = Math.ceil(Math.random() * 13)
    if (randomcard > 10) {
        return 10
    }
    else if (randomcard === 1) {
        return 11
    }
    else {
        return randomcard
    }

}

// console.log(sum)


let cardsEl = document.getElementById("cards-el")

function startGame() {
    isAlive == true;
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame() {
    cardsEl.textContent = "Cards:"

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum:" + sum
    if (sum === 21) {
        msg = "Woohoo, You won"
        hasBlackjack == true;
    }
    else if (sum < 21) {
        isAlive = true
        msg = "Do you want to draw another card?"
    }
    else if (sum > 21) {
        isAlive = false
        msg = "You're out"
    }
    console.log(msg)
    msgEl.textContent = msg

}


function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let newcard = getRandomCard()
        sum += newcard
        cards.push(newcard)
        console.log(newcard)
        console.log(sum)
        renderGame()
    }

}


