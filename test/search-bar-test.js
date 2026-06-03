import assert from 'node:assert';
import { autoComplete, userInputHandler, matchingAddress } from '../sources/search-bar.js';

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


// User Input handler test

describe('userInputHandler', () => {
    it('compares user input to addresses of different objects inside an array and returns exact object match', () => {
       const database = [
        {
        address: '847 N 21st St',
        mstId: '1234H',
        mstConnection: 2,
        cabinet: 5,
        cabinetConnection: 234,
        },
        {
        address: '1023 W 5th Ave',
        mstId: '5678A',
        mstConnection: 1,
        cabinet: 3,
        cabinetConnection: 118,
        },
        {
        address: '450 E Maple St',
        mstId: '2233B',
        mstConnection: 4,
        cabinet: 2,
        cabinetConnection: 87,
        },
       ];
       const userChoice = '450 E Maple St';
       const expected = database[2];
       const result = userInputHandler(userChoice, database);
       assert.deepStrictEqual(result[0], expected);
    });
    it('works when casing is different', () => {
        const database = [
        {
        address: '847 N 21st St',
        mstId: '1234H',
        mstConnection: 2,
        cabinet: 5,
        cabinetConnection: 234,
        },
        {
        address: '1023 W 5th Ave',
        mstId: '5678A',
        mstConnection: 1,
        cabinet: 3,
        cabinetConnection: 118,
        },
        {
        address: '450 E Maple St',
        mstId: '2233B',
        mstConnection: 4,
        cabinet: 2,
        cabinetConnection: 87,
        },
       ];
       const userChoice = '450 e maple st';
       const expected = database[2];
       const result = userInputHandler(userChoice, database);
       assert.deepStrictEqual(result[0], expected);
    })
    it('returns an empty array when no match fund', () => {
         const database = [
        {
        address: '847 N 21st St',
        mstId: '1234H',
        mstConnection: 2,
        cabinet: 5,
        cabinetConnection: 234,
        },
        {
        address: '1023 W 5th Ave',
        mstId: '5678A',
        mstConnection: 1,
        cabinet: 3,
        cabinetConnection: 118,
        },
        {
        address: '450 E Maple St',
        mstId: '2233B',
        mstConnection: 4,
        cabinet: 2,
        cabinetConnection: 87,
        },
       ];
       const userChoice = '888 mape st';
       const expected = [];
       const result = userInputHandler(userChoice, database);
       assert.deepStrictEqual(result, expected);
    })
})

//test matching address for error handling pourpuses

describe('matchingAddress', () => {
    it ('returns true if it can find an address match in the database', () => {
        const database = [
        {
        address: '847 N 21st St',
        mstId: '1234H',
        mstConnection: 2,
        cabinet: 5,
        cabinetConnection: 234,
        },
        {
        address: '1023 W 5th Ave',
        mstId: '5678A',
        mstConnection: 1,
        cabinet: 3,
        cabinetConnection: 118,
        },
        {
        address: '450 E Maple St',
        mstId: '2233B',
        mstConnection: 4,
        cabinet: 2,
        cabinetConnection: 87,
        },
       ];
       const input = '847 N 21st St';
       const expected = true;
       const result = matchingAddress(input, database);

       assert.deepStrictEqual(result, expected)
    });

        it ('returns right value no matter capitalization', () => {
        const database = [
        {
        address: '847 N 21st St',
        mstId: '1234H',
        mstConnection: 2,
        cabinet: 5,
        cabinetConnection: 234,
        },
        {
        address: '1023 W 5th Ave',
        mstId: '5678A',
        mstConnection: 1,
        cabinet: 3,
        cabinetConnection: 118,
        },
        {
        address: '450 E Maple St',
        mstId: '2233B',
        mstConnection: 4,
        cabinet: 2,
        cabinetConnection: 87,
        },
       ];
       const input = '847 n 21st st';
       const expected = true;
       const result = matchingAddress(input, database);

       assert.deepStrictEqual(result, expected);
    });

        it ('returns false if it cant find an address match in the database', () => {
        const database = [
        {
        address: '847 N 21st St',
        mstId: '1234H',
        mstConnection: 2,
        cabinet: 5,
        cabinetConnection: 234,
        },
        {
        address: '1023 W 5th Ave',
        mstId: '5678A',
        mstConnection: 1,
        cabinet: 3,
        cabinetConnection: 118,
        },
        {
        address: '450 E Maple St',
        mstId: '2233B',
        mstConnection: 4,
        cabinet: 2,
        cabinetConnection: 87,
        },
       ];
       const input = '866 N 21st St';
       const expected = false;
       const result = matchingAddress(input, database);

       assert.deepStrictEqual(result, expected)
    })

})