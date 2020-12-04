const theButton = document.getElementById('my-button');
const theNameSection = document.getElementById('name-display');
const theInput = document.getElementById('my-input-box');
const thePinkBackground = document.getElementById('my-pink-button')
const theLightBlueBackground = document.getElementById('my-light-blue-button')
const theLightGreenBackground = document.getElementById('my-light-green-button')
const changeColor = document.getElementById ('greeting')


theButton.addEventListener('click', () => {

    // whatever code i put in the cool zone will happen on click
    theNameSection.textContent = theInput.value;
    theInput.value = '';
})

thePinkBackground.addEventListener('click', () => {

    // whatever code i put in the cool zone will happen on click
    changeColor.style.background = 'pink';
})

theLightBlueBackground.addEventListener('click', () => {

    // whatever code i put in the cool zone will happen on click
    changeColor.style.background = 'lightblue';
})

theLightGreenBackground.addEventListener('click', () => {

    // whatever code i put in the cool zone will happen on click
    changeColor.style.background = 'lightgreen';
})