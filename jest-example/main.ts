/**
 * -----------------------------------
 * INSTRUCTIONS
 * -----------------------------------
 * 
 * You shall implement the functions below and consequently write some tests for one
 * of them
 * 
 * >>> Available NPM scripts <<<
 * 
 * START: npm run start
 * START TYPESCRIPT: npm run start:ts
 * SERVE: npm run serve
 * SERVE TYPESCRIPT: npm run serve:ts
 * TEST: npm run test
 * TEST:WATCH: npm run test:watch
 */

/**
 * >>> OPTION 1 <<<
 * 
 * Function `sumAll(...)` should meet the following requirements:
 * 1. accept infinite amount of args
 * 2. accept strings
 * 3. treat objects, undefined & nulls as 0
 * 4. If no arg given, return 0
 */

export function sumAll() {
    return 0
}

const sumAllResult = sumAll()

console.log('sumAllResult: ', sumAllResult)

/**
 * >>> OPTION 2 <<<
 * 
 * Function `upAndDown(...)` should meet the following requirements:
 * 1. accept array of elements
 * 2. the result is best described by the example
 * @param arr eg. [1, 2, 3]
 * @returns [1, 2, 3, 2, 1]
 * @example [a, b, c, d, e] => [a, b, c, d, e, d, c, b, a]
 * 3. this function should NOT mutate the passed array
 */

const myArray: (number | string)[] = []

export function upAndDown(arr: (number | string)[]) {
    return arr
}

const upAndDownResult = upAndDown(myArray)

console.log('upAndDownResult: ', upAndDownResult)

/** Make sure, the initial array is untouched */
console.log('myArray: ', myArray)