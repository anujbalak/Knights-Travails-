
class Square {
    constructor() {
        this.cord = null;
        this.next = null;
    }
}

function knightMoves(cord, target, queueArray = [], generatedSquares= []) {
    errorHandler(cord, target);
    if (cord[0] === target[0] && cord[1] === target[1]) {
        return declareMoves(queueArray[0], target);
    }
    let current = queueArray[0];
    queueArray.shift();
    generatedSquares.push(cord);
    let neighbours = [];
    generateNeighbours(cord, neighbours);
    addInQueue(cord, current, queueArray, neighbours, generatedSquares);
    current = queueArray[0];
    while (current.next !== null) {
        current = current.next;
    }
    return knightMoves(current.cord, target, queueArray, generatedSquares);
}


function addInQueue(cord, current, queueArray, neighbours, generatedSquares) {
    let square = current;
    if (queueArray.length === 0) {
        neighbours.forEach(neighbor => {      
            let initialSquare = new Square();
            initialSquare.cord = cord;
            let neighborSquare = new Square();
            initialSquare.next = neighborSquare;
            neighborSquare.cord = neighbor;
            queueArray.push(initialSquare);
        });
    } else {
        neighbours.forEach(neighbor => {
            if (!checkInGenerated(generatedSquares, neighbor)) {
                let initial = {...current};
                let neighborSquare = new Square();
                while (initial.next !== null) {
                    initial = initial.next;
                }
                initial.next = neighborSquare;
                neighborSquare.cord = neighbor
                queueArray.push(square);
            }        
        })
    }
}


function checkInGenerated(array, value) {
    if (array.some(e => e[0] === value[0] && e[1] === value[1])) {
     return true;
    }
    return false;
}

function declareMoves(value, target) {
    let countMoves = 0
    let path = '';
    while (value.next !== null) {
        countMoves += 1;
        path += `[${value.cord}] -> `
        value = value.next
    }
    path += `[${value.cord}]`;
    let msg = `You made it in ${countMoves}. Here is your path: ${path}`
    return msg;
}

function errorHandler(initial, target) {
    if (initial.length === 1 && target.length === 1) {
        throw new Error('Value should be in 2D')
    }
}

function generateNeighbours(initial, neighbours) {

    const max = 8;
    const min = -1;
    let count = 0

    while (count < 8) {
        switch (count) {
            case 0: { 
                let x = initial[0];
                let y = initial[1];
                x += 2;
                y += 1;
                let node = [x, y];
                if (conditions(x, y, min, max)) {
                    neighbours.push(node)
                }        
                break; 
            }
            case 1: {
                let x = initial[0];
                let y = initial[1]; 
                x += 2;
                y -= 1;
                let node = [x, y];
                if (conditions(x, y, min, max)) {
                    neighbours.push(node)
                }        
                break; 
            }
            case 2: {
                let x = initial[0];
                let y = initial[1]; 
                x -= 2;
                y += 1;
                let node = [x, y];
                if (conditions(x, y, min, max)) {
                    neighbours.push(node)
                }        
                break; 
            }
            case 3: {
                let x = initial[0];
                let y = initial[1]; 
                x -= 2;
                y -= 1;
                let node = [x, y];
                if (conditions(x, y, min, max)) {
                    neighbours.push(node)
                }        
                break; 
            }
            case 4: {
                let x = initial[0];
                let y = initial[1]; 
                x += 1;
                y += 2;
                let node = [x, y];
                if (conditions(x, y, min, max)) {
                    neighbours.push(node)
                }        
                break; 
            }
            case 5: {
                let x = initial[0];
                let y = initial[1]; 
                x -= 1;
                y += 2;
                let node = [x, y];
                if (conditions(x, y, min, max)) {
                    neighbours.push(node)
                }        
                break; 
            }
            case 6: {
                let x = initial[0];
                let y = initial[1]; 
                x += 1;
                y -= 2;
                let node = [x, y];
                if (conditions(x, y, min, max)) {
                    neighbours.push(node)
                }        
                break; 
            }
            case 7: {
                let x = initial[0];
                let y = initial[1]; 
                x -= 1;
                y -= 2;
                let node = [x, y];
                if (conditions(x, y, min, max)) {
                    neighbours.push(node)
                }        
                break; 
            }
            default:
                break;
        }
        count++;
    }
}

function conditions(x, y, min, max) {
    if (x > min && x < max && y > min && y < max) {
        return true;
    } else {
        return false;
    }
}

let k = knightMoves([0,0],[3, 3])

console.log(k)