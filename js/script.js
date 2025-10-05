// --------------- Snack 1 ---------------

const raceBikes = [
    {
        name: "Specialized Tarmac SL8",
        weight: 6.6
    },
    {
        name: "Cannondale SuperSix EVO",
        weight: 6.8
    },
    {
        name: "Trek Émonda SLR",
        weight: 6.7
    },
    {
        name: "Pinarello Dogma F",
        weight: 6.9
    }
];

let result;

for (let i = 0; i < raceBikes.length - 1; i++) {
    let curValue = raceBikes[i].weight;
    let nextValue = raceBikes[i + 1].weight;
    result = raceBikes[i].name;
    if (curValue > nextValue) {
        result = raceBikes[i + 1].name;
    }
}

console.log(result);

// --------------- Snack 2 ---------------

const footballTeams = [
    {
        name: "Milan",
        points: 0,
        fouls: 0
    },
    {
        name: "Inter",
        points: 0,
        fouls: 0
    },
    {
        name: "Juventus",
        points: 0,
        fouls: 0
    },
    {
        name: "Atalanta",
        points: 0,
        fouls: 0
    }
]

const newArray = [];

for (let i = 0; i < footballTeams.length; i++) {
    footballTeams[i].points = generateRandomNumber(0, 100);
    footballTeams[i].fouls = generateRandomNumber(0, 10);
    newArray.push(`${footballTeams[i].name}: ${footballTeams[i].fouls} fouls`);
}

console.log(newArray);

function generateRandomNumber(min, max) {
    let result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result
}

// --------------- Snack 3 (bonus) ---------------

/**
 * 
 * @param {array} array 
 * @param {num} a 
 * @param {num} b
 * @returns {array}
 * 
 * Per ogni valore dell'array compreso tra l'indice a e l'indice b
 *      pushare il valore nel nuov array
 */

const array = [1, 2, 3, 4, 5];

function getRangeFromArray(array, a, b) {
    const arrayFiltered = [];
    if (a <= b) {
        for (let i = a; i <= b; i++) {
            curValue = array[i];
            arrayFiltered.push(curValue);
        } return arrayFiltered;
    } else {
        return "Il primo numero deve essere minore del secondo";
    }
}

console.log(array);
console.log(getRangeFromArray(array, 1, 2));

// --------------- Snack 4 (bonus) ---------------

const array1 = [1, 2, 3, 4, 5];
const array2 = ["a", "b", "c"];

/**
 * 
 * @param {array} array1 
 * @param {array} array2
 * 
 * Se la lunghezza del primo array è maggiore di quella del secondo,
 *      per ogni indice del primo array
 *          pushare il numero in quell'indice del primo array
 *          pushare il numero in quell'indice del secondo array (fino a che non si raggiunge la lunghezza del secondo array)
 * altrimenti
 *      per ogni indice del secondo array
 *          pushare il numero in quell'indice del secondo array
 *          pushare il numero in quell'indice del primo array (fino a che non si raggiunge la lunghezza del primo array)
 */

function mergeArrays(array1, array2) {
    const mergedArray = [];
    if (array1.length > array2.length) {
        for (let i = 0; i < array1.length; i++) {
            mergedArray.push(array1[i]);
            if (array2[i])
                mergedArray.push(array2[i]);
        }
    } else {
        for (let i = 0; i < array2.length; i++) {
            mergedArray.push(array2[i]);
            if (array1[i])
                mergedArray.push(array1[i]);
        }
    }
    return mergedArray
}

console.log(mergeArrays(array1, array2));
