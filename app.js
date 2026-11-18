// ------------------------ VARIABLES ------------------------------ //


// ------------------------ CACHED ELEMENTS ------------------------ //
const openInstructionsBtnEl = document.querySelector('#open-instructions')
const closeInstructionsBtnEl = document.querySelector('#close-instructions')
const instructionsEl = document.querySelector('#instructions')


// ------------------------ FUNCTIONS ------------------------------ //


// ------------------------ EVENT LISTENERS ------------------------ //
openInstructionsBtnEl.addEventListener('click', () => {
    instructionsEl.showModal()
})

closeInstructionsBtnEl.addEventListener('click', () => {
    console.log('close')
    instructionsEl.close()
})