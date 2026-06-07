/*
Software Algorithm:
1. User Types an address in input,
2. User clicks search button,
    2-1. If input is empty thrhow error;
    2-2. If address not valid throw error;
3. Input Value gets stored on a variable;
4. Variable gets compared vs database address;
    4-1. If not address fund throw an error asking to try a different address or ask admin to add it.
5. If a result is fund render results in UI;
*/


import {autoComplete, matchingAddress, userInputHandler} from '../modules/search-bar.js'
import addresses from '../modules/database.js';

//Generate the array of suggested addresses as the user types

const addressInput = document.getElementById('address-input');//Search Bar
const suggestions = document.getElementById('suggestions')//ul under search bar
const clearBtn = document.querySelector('.clear-btn')//clear btn element
const errorMsg = document.querySelector('.error-msg') //error message element


const autoCompleteElement = () => {
    addressInput.addEventListener('input', (event) => {
    const searchValue = event.target.value;
    const matches = autoComplete(searchValue, addresses);
     // validates user input

    if(!searchValue.trim()){
        suggestions.innerHTML = '';//Guard Statement
        hideElement(suggestions);
        return;
    } else (showElement(suggestions))
    suggestions.innerHTML = '';

    matches.forEach(address => {
            const li = document.createElement('li');
            li.textContent = address;

            li.addEventListener('click', () => {//Adds suggested address to input
                addressInput.value = address;
                suggestions.innerHTML = ''; // clears suggestions once one li is clicked
            })
            suggestions.appendChild(li)
    });
    })
}

//Hide element
const hideElement = (element) => {
     element.classList.add('hidden')
};

//Show element
const showElement = (element) => {
     element.classList.remove('hidden')
     console.log("remove class")
};


//toggle to remove clear button when input is empty

const clearBtnElement = () =>{    
    addressInput.addEventListener('input', () => {
        clearBtn.classList.toggle('hidden', addressInput.value.length === 0);
    });
    clearBtn.addEventListener('click', () => {
        addressInput.value = '';
    })
}
//Shows error message on screen
const showError = (message) => {
    errorMsg.textContent = message;
    showElement(errorMsg)
}

//Validates user input to display error only when needed
// //Will rework on it once Google Maps API is added 
/*const inputValidation = () => {
    const valid = addressInput.value;
    const isValid = matchingAddress(valid, addresses);
    if(!isValid){
        showError('Please enter a valid address')
    };
};*/

autoCompleteElement()
clearBtnElement()