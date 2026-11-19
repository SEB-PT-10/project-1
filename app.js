// ------------------------ VARIABLES ------------------------------ //
let isGameStarted = false
let isError = false
let isCharacterChosen = false
let chosenCharacter
let username = null

// ------------------------ CACHED ELEMENTS ------------------------ //
const openInstructionsBtnEl = document.querySelector('#open-instructions')
const closeInstructionsBtnEl = document.querySelector('#close-instructions')
const instructionsEl = document.querySelector('#instructions')
const messageEl = document.querySelector('#message')
const errorMessageEl = document.querySelector('#error-message')
const startNameBtnEl = document.querySelector('#start-name')
const nameInputEl = document.querySelector('#name')
const sceneEl = document.querySelector('#scene')
const sceneTitleEl = document.querySelector('#scene-title')

// characters 
const nyekaEl = document.querySelector('#nyeka')
const remiEl = document.querySelector('#remi')
const adekolaEL = document.querySelector('#adekola')
const characterEls = document.querySelectorAll('.characters > div')


// ------------------------ FUNCTIONS ------------------------------ //
const render = () => {
    if (!isGameStarted) {
        // makes sure user doesn't have to re-type username if they submit before choosing a character
        // nameInputEl.value = username

        startNameBtnEl.addEventListener('click', (event) => {
            event.preventDefault()
            username = nameInputEl.value
            if (chosenCharacter && isCharacterChosen && nameInputEl.value) {
                messageEl.innerHTML = `<p>Welcome ${username}</p>`
                isGameStarted = true
                isError = false
                errorMessageEl.textContent = ''
                setTimeout(() => {
                    if (chosenCharacter === 'nyeka') {
                        sceneTitleEl.textContent = 'The forest is calling you...'
                        sceneEl.innerHTML = `<img src="assets/moonlit-grove-and-the-enchanted-spirit-nyeka.png" />`
                    } else if (chosenCharacter === 'remi') {
                        sceneTitleEl.textContent = 'The forest is calling you...'
                        sceneEl.innerHTML = `<img src="assets/moonlit-grove-and-the-enchanted-spirit-remi.png" />`
                    } else {
                        sceneTitleEl.textContent = 'The forest is calling you...'
                        sceneEl.innerHTML = `<img src="assets/moonlit-grove-and-the-enchanted-spirit-adekola.png" />`
                    }
                }, 1500)
            } else {
                errorMessageEl.textContent = `✧ ⋆₊⊹ Please choose a character ⊹₊⋆ ✧`
                isError = true
            }
        })
    } else {
        alert('game is started')
    }
    console.log(isCharacterChosen)
}

render()

const chooseCharacter = (event) => {
    if (event.target.id === 'nyeka' && !isGameStarted) {
        chosenCharacter = 'nyeka'

        nyekaEl.classList.toggle('nyeka', 'choose-again')
        remiEl.classList.toggle('remi')
        adekolaEL.classList.toggle('adekola')

        } else if (event.target.id === 'remi' && !isGameStarted) {
        chosenCharacter = 'remi'
        
        remiEl.classList.toggle('remi', 'choose-again')
        nyekaEl.classList.toggle('nyeka')
        adekolaEL.classList.toggle('adekola')

    } else if (event.target.id === 'adekola' && !isGameStarted) { 
        chosenCharacter = 'adekola'

        adekolaEL.classList.toggle('adekola', 'choose-again')
        nyekaEl.classList.toggle('nyeka')
        remiEl.classList.toggle('remi')
    }
    isCharacterChosen = !isCharacterChosen
    username = nameInputEl.value
    render()
}


// ------------------------ EVENT LISTENERS ------------------------ //
openInstructionsBtnEl.addEventListener('click', () => {
    instructionsEl.showModal()
})

closeInstructionsBtnEl.addEventListener('click', () => {
    console.log('close')
    instructionsEl.close()
})

// characters 
characterEls.forEach((character) => {
    character.addEventListener('click', chooseCharacter)
})