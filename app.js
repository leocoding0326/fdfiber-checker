import {autoComplete, userInputHandler} from './sources/search-bar.js'
import addresses from '../database/database.js';

//Generate the array of suggested addresses as the user types

const addressInput = document.getElementById('address-input');//Search Bar
const suggestions = document.getElementById('suggestions')//ul under search bar

addressInput.addEventListener('input', (event) => {
   const searchValue = event.target.value;
   const matches = autoComplete(searchValue, addresses);

   if(!searchValue.trim()){
    suggestions.innerHTML = '';//Guard Statement
    return;
   }

   suggestions.innerHTML = '';

   matches.forEach(address => {
        const li = document.createElement('li');
        li.textContent = address;
        suggestions.appendChild(li)
   });
})
