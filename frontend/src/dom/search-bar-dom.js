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


import {addressExist, userInputHandler} from '../modules/search-bar.js'
import addresses from '../modules/database.js';
import { ClearBtn } from '../../components/clearBtn/clearBtn.js';
import { AutoComplete } from '../../components/autoComplete/autoComplete.js';
import { ErrorMessage } from '../../components/errorMessage/error.js';

const userInput = document.getElementById('address-input');//Search Bar
const suggestions = document.getElementById('suggestions');//ul under search bar
const clearBtn = document.querySelector('.clear-btn');//clear btn element
const searchBtn = document.querySelector('.search-btn');//Search Button element
const errorMsg = document.querySelector('.error-msg'); //error message element
const displayResult = document.querySelector('.info-display');//Display element under search bar
const searchForm = document.getElementById('search-bar')

//executes automplete
const executeAutoComplete = () => {
    const initAutoComplete = new AutoComplete({
        input: userInput,
        database: addresses,
        display: suggestions,
        error: errorMsg
    })
    initAutoComplete.init();
    return initAutoComplete;
};


//Exectues Clear Button
const executeClearBtn = () => {
    const initClearBtn = new ClearBtn ({
        input: userInput,
        btn: clearBtn,
        response: displayResult,
        error: errorMsg,
    })
    initClearBtn.init();
    return initClearBtn;
}

//Executes Error
const executeError = (errorText) => {
        const error = new ErrorMessage({
        displayError: errorMsg,
        message: errorText,
        input: userInput
    });
        error.showError();
};


//Validates user input to display error only when needed
const inputValidation = () => {
    const valid = userInput.value;
    const isValid = addressExist(valid, addresses);
    if(!isValid || !valid.trim()){
        return false
    } else return true
};


//Show the result
const searchEvent = () => {
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if(!inputValidation()) {
            executeError('Please enter a valid input!')
            hideElement(displayResult);
            hideElement(suggestions);
            return;
        }
        hideElement(suggestions);
        showElement(displayResult);
        resultHandler();
    });
};

//Push the results to displayResult
const resultHandler = () => {
    const addressString = userInput.value;
    const result = userInputHandler(addressString, addresses);
    if (!result.length) {
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

//Hide element
const hideElement = (element) => {
     element.classList.add('hidden')
};

//Show element
const showElement = (element) => {
     element.classList.remove('hidden')
};

const initAutoComplete = executeAutoComplete();

const runProgram = () => {
    executeClearBtn();
    searchEvent();
}

runProgram()

export {initAutoComplete} //exports autocomplete to access it inside clear btn
