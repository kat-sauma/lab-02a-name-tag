const theButton = document.getElementById('my-button');
const theNameSection = document.getElementById('name-display');
const theInput = document.getElementById('my-input-box');


theButton.addEventListener('click', () => {

    // whatever code i put in the cool zone will happen on click
    theNameSection.textContent = theInput.value;
    theInput.value = '';
})