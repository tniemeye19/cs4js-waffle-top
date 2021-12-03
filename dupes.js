// psuedocode to show "number" appeared "so many" times
// create variable for most appearing value
// create variable for most appearing count

// loop over array (i)
//   start a counter for number of occurrences

//   loop over array again (j)
//     compare indexes
//       if same, increase counter

//   if counter > current most appearing count
//     update "most" variables to match

// return most appearing value and count

const numbers = [41, 24, 28, 1, 40, 41, 32, 33, 50, 5, 34, 5, 21, 21, 43, 43, 21, 4, 49, 24];

const mostDuplicates = (arr) => {

    let mostValue;
    let mostCount = 0;

    for (let i = 0; i < arr.length; i++) {
        let counter = 0;

        // nested loop here
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                counter++;
            }
        }

        if (counter > mostCount) {
            mostCount = counter;
            mostValue = arr[i];
        }
    }

    return `${mostValue} appeared ${mostCount} times.`;
};

// psuedocode for refactor and optimization
// create empty object map

// loop over array
//   if array[i] not in map
//     create new key/value pair on map = 1
//   else
//     increment key/value pair by 1

// create variable for most appearing value
// create variable for most appearing count

// loop over object keys/values
//   if value > current most appearing count
//     update "most" variables to match

// return most appearing value and count

const optimizeDuplicates = (arr) => {
    const map = {};

    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];

        if (map[value] === undefined) {
            map[value] = 1;
        } else {
            map[value]++;
        }
    }

    let mostValue;
    let mostCount = 0;

    for (const value in map) {
        if (map[value] > mostCount) {
            mostCount = map[value];
            mostValue = value;
        }
    }

    return `${mostValue} appeared ${mostCount} times.`;
}

module.exports = { mostDuplicates, optimizeDuplicates };