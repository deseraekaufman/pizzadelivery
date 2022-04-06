// --------PART 2-----------
const deliveries = []
let mariaX
let mariaY
let clovisX
let clovisY
let numPizzasDelivered
let text
let previousCoordinateMaria = { x: 0, y: 0 }
let previousCoordinateClovis = { x: 0, y: 0 }


/**
 * This function takes in a string of directions, 
 * converts the string to an array,
 * and iterates through the array - applying one of the dispatcher's directions in each iteration.
 * It will keep track of the coordinates from each delivery driver as objects in a new array
 * The count of this new array is returned as our answer
 *
 * @param {string}  
 */
function inputDirections(string) {
    let strArr = stringToArray(string)

    deliveries.push({ x: 0, y: 0, numPizzasDelivered: 2 })

    for (let i = 0; i < strArr.length; i++) {
        if (i % 2 === 0) {
            moveMaria(strArr[i]);
        }
        else {
            moveClovis(strArr[i]);
        }
    }
    console.log("Number of houses to receive pizzas: " + deliveries.length)
}
/**
 * This function checks to see if a pair of coordinates already exist in our array of coordinates that we 
 * have previously delivered to
 * @param {number} coordinateX 
 * @param {number} coordinateY 
 */
function checkCoordinateExists(coordinateX, coordinateY) {
    let foundCoordinate = false
    for (let j = 0; j < deliveries.length; j++) {

        if (deliveries[j].x === coordinateX && deliveries[j].y === coordinateY) {
            deliveries[j].numPizzasDelivered += 1
            foundCoordinate = true
        }


    }
    if (foundCoordinate == false) {
        deliveries.push({ x: coordinateX, y: coordinateY, numPizzasDelivered: 1 })

    }

}

/**
 * This function loads the input file from our browser, gets the text content of that input and 
 * then feeds it into our inputDirections function
 * @param {file} file input.txt
 */
async function loadFile(file) {
    text = await file.text();
    document.getElementById('output').textContent = text;
    inputDirections(text);
}

/**
 * This function takes in a string, and splits each character its its own element of a new array
 * @param {string} text input string 
 * @returns {array} inputArray converted to array of characters
 */
function stringToArray(string) {
    let inputArray = string.split('')
    return inputArray;
}

/**
 * This function takes in a single character arrow and applies the appropriate logic to the coordinates of
 * delivery driver Maria ONLY
 * @param {char} direction 
 */
function moveMaria(direction) {
    mariaX = previousCoordinateMaria.x
    mariaY = previousCoordinateMaria.y
    if (direction == '<') {
        mariaX--
    }
    else if (direction == '^') {
        mariaY++
    }
    else if (direction == '>') {
        mariaX++
    }
    else if (direction == 'v') {
        mariaY--
    }
    checkCoordinateExists(mariaX, mariaY);
    previousCoordinateMaria = {
        x: mariaX,
        y: mariaY
    }
}

/**
 * This function takes in a single character arrow and applies the appropriate logic to the coordinates of
 * delivery driver Clovis ONLY
 * @param {char} direction 
 */
function moveClovis(direction) {
    clovisX = previousCoordinateClovis.x
    clovisY = previousCoordinateClovis.y
    if (direction == '<') {
        clovisX--
    }
    else if (direction == '^') {
        clovisY++
    }
    else if (direction == '>') {
        clovisX++
    }
    else if (direction == 'v') {
        clovisY--
    }
    checkCoordinateExists(clovisX, clovisY);
    previousCoordinateClovis = {
        x: clovisX,
        y: clovisY
    }
}


