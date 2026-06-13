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


import {autoComplete, addressExist, userInputHandler} from '../modules/search-bar.js'
import addresses from '../modules/database.js';

const addressInput = document.getElementById('address-input');//Search Bar
const suggestions = document.getElementById('suggestions');//ul under search bar
const clearBtn = document.querySelector('.clear-btn');//clear btn element
const searchBtn = document.querySelector('.search-btn');//Search Button element
const errorMsg = document.querySelector('.error-msg'); //error message element
const displayResult = document.querySelector('.info-display');//Display element under search bar
const searchForm = document.getElementById('search-bar')


//Adds the matches to the suggestion ul
const suggestAddresslist = (searchValue) => {
    const matches = autoComplete(searchValue, addresses);
     matches.forEach(address => {
        const li = document.createElement('li');
        li.textContent = address;

        li.addEventListener('click', () => {//Adds suggested address to input
            addressInput.value = address;
            suggestions.innerHTML = ''; // clears suggestions once one li is clicked
            hideElement(suggestions);
            addressInput.focus();
        })
        suggestions.appendChild(li);
    });
};

//Generate the array of suggested addresses as the user types
const suggestAddress = () => {
    addressInput.addEventListener('input', (event) => {
    const searchValue = event.target.value;
    const valid = autoComplete(searchValue, addresses);
     // validates user input
    if(!searchValue.trim() || valid.length === 0){
        suggestions.innerHTML = '';//Guard Statement
        hideElement(suggestions);
        return;
    }
        showSuggestAddress(searchValue);
    });
};

//Shows suggestions UI elements

const showSuggestAddress = (value) => {
    hideElement(displayResult);
    hideElement(errorMsg);
    showElement(suggestions);
    suggestions.innerHTML = '';
    suggestAddresslist(value);
    enableBtn(searchBtn);
}


//toggle to remove clear button when input is empty
const clearBtnElement = () =>{    
    addressInput.addEventListener('input', () => {
        clearBtn.classList.toggle('hidden', addressInput.value.length === 0);
    });
    clearBtn.addEventListener('click', () => {
        addressInput.value = '';
        hideElement(displayResult);
        hideElement(errorMsg);
        addressInput.focus();
    });
};

//Show the result
const searchEvent = () => {
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if(!inputValidation()) {
            return;
        }
        hideElement(suggestions);
        showElement(displayResult);
        resultHandler();
        disableBtn(searchBtn)
    });
};

//Push the results to displayResult
const resultHandler = () => {
    const addressString = addressInput.value;
    const result = userInputHandler(addressString, addresses);
    if (!result.length) {
        showError('Address Not Fund')
        return;
    }
    displayResult.innerHTML = `
    <h3>Address: ${result[0].address}</h3>
    <p>Cabinet Number: ${result[0].cabinet}</p>
    <p>Cabinet Connection: ${result[0].cabinetConnection}</p>
    <p>MST: ${result[0].mstId}</p>
    <p>MST Connection: ${result[0].mstConnection}</p>
    `
};

//Validates user input to display error only when needed
// //Will rework on it once Google Maps API is added 
const inputValidation = () => {
    const valid = addressInput.value;
    const isValid = addressExist(valid, addresses);
    if(!isValid || !valid.trim()){
        displayResult.innerHTML = '';
        addressInput.value = '';
        hideElement(displayResult);
        hideElement(suggestions);
        showError('Please enter a valid address');
        return false
    } else return true
};

//Hide element
const hideElement = (element) => {
     element.classList.add('hidden')
};

//Show element
const showElement = (element) => {
     element.classList.remove('hidden')
};

//Shows error message on screen
const showError = (message) => {
    errorMsg.innerHTML =`
    <i class="fa-solid fa-circle-exclamation" style="color: #e33f27;"></i>
    ${message}`;
    showElement(errorMsg)
}

//Disable buttons on click

const disableBtn = (btn) => {
    btn.disabled = true;
};

//Enable element when inputing
const enableBtn = (btn) => {
    btn.disabled = false;
};

const runProgram = () => {
    suggestAddress()
    clearBtnElement()
    searchEvent()
}

runProgram()
