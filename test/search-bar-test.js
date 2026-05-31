import assert from 'node:assert';
import { autoComplete, userInputHandler } from '../sources/search-bar.js';

//AutoComplete Test

describe('autoComplete', () => {
    it('Takes a string and an array as arguments, and returns matching addresses', () =>{
        const dataBase = [
            {address: 'New York'},
            {address: 'New Hampshire'},
            {address: 'Boston'},
            {address: 1234}
    ];
        const result = autoComplete('new', dataBase);
        const expected = ['New York', 'New Hampshire'];
        assert.deepStrictEqual(result, expected);
    });
    
    it('returns only 5 or less addresses', () => {
        const dataBase = [
            {address: 'New York'},
            {address: 'New Hampshire'},
            {address: 'Boston'},
            {address: 'Newman'},
            {address: 'New Mexico'},
            {address: 'Newson'},
            {address: 'New Zeland'},
            {address: 1234}
    ];
    const result = autoComplete('new', dataBase);
     assert.strictEqual(result.length, 5)
    })
});
