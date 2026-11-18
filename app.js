// ------------------------ VARIABLES ------------------------------ //


// ------------------------ CACHED ELEMENTS ------------------------ //
const openInstructionsBtnEl = document.querySelector('#open-instructions')
const closeInstructionsBtnEl = document.querySelector('#close-instructions')
const instructionsEl = document.querySelector('#instructions')

// characters 
const nyekaEl = document.querySelector('#nyeka')
const remiEl = document.querySelector('#remi')
const adekolaEL = document.querySelector('#adekola')


// ------------------------ FUNCTIONS ------------------------------ //
const chooseCharacter = (event) => {
    console.log(event.target.id)
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
nyekaEl.addEventListener('click', chooseCharacter)
remiEl.addEventListener('click', chooseCharacter)
adekolaEL.addEventListener('click', chooseCharacter)