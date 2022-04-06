// --------PART 1-----------
const deliveries = []
let x
let y
let numPizzasDelivered
let text
let previousCoordinate = { x: 0, y: 0 }

/**
 * This function takes in a string of directions, 
 * converts the string to an array,
 * and iterates through the array - applying one of the dispatcher's directions in each iteration.
 * It will keep track of the coordinates as objects in a new array
 * 
 *
 * @param {string}  
 */
function inputDirections(string) {
    let strArr = stringToArray(string)
    deliveries.push({ x: 0, y: 0, numPizzasDelivered: 1 })
    for (let i = 0; i < strArr.length; i++) {

        newx = previousCoordinate.x
        newy = previousCoordinate.y

        if (strArr[i] == '<') {
            newx--
        }
        else if (strArr[i] == '^') {
            newy++
        }
        else if (strArr[i] == '>') {
            newx++
        }
        else if (strArr[i] == 'v') {
            newy--
        }

        checkCoordinateExists(newx, newy);
        previousCoordinate = {
            x: newx,
            y: newy
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


